import { create } from 'zustand';
import type { Message, ChatRoom } from '../types/chat';
import type { ChatState } from '../types/chat';
import { ME, USERS, ROOMS, MESSAGES } from '../mock/data';

type ChatActions = {
  selectRoom: (roomId: string) => void;
  unselectRoom: () => void;
  sendMessage: (roomId: string, text: string) => void;
  receiveMessage: (message: Message) => void;
  markRoomAsRead: (roomId: string) => void;
};

type ChatStore = ChatState & ChatActions;

const sortRoomsByLatest = (rooms: ChatRoom[]): ChatRoom[] => {
  return [...rooms].sort((a, b) => {
    const aTime = a.lastMessage?.createdAt ?? '';
    const bTime = b.lastMessage?.createdAt ?? '';
    return bTime.localeCompare(aTime);
  });
};

export const useChatStore = create<ChatStore>((set) => ({
  me: ME,
  users: USERS,
  rooms: sortRoomsByLatest(ROOMS),
  messages: MESSAGES,
  selectedRoomId: null,

  selectRoom: (roomId) => {
    set((state) => ({
      selectedRoomId: roomId,
      rooms: state.rooms.map((room) => (room.id === roomId ? { ...room, unreadCount: 0 } : room)),
    }));
  },

  unselectRoom: () => {
    set({ selectedRoomId: null });
  },

  sendMessage: (roomId, text) => {
    const newMessage: Message = {
      id: `msg-${Date.now()}`,
      roomId,
      senderId: ME.id,
      text,
      createdAt: new Date().toISOString(),
      status: 'sent',
    };

    set((state) => ({
      messages: {
        ...state.messages,
        [roomId]: [...(state.messages[roomId] ?? []), newMessage],
      },
      rooms: sortRoomsByLatest(
        state.rooms.map((room) =>
          room.id === roomId
            ? {
                ...room,
                lastMessage: {
                  text,
                  createdAt: newMessage.createdAt,
                  senderId: ME.id,
                },
              }
            : room,
        ),
      ),
    }));
  },

  receiveMessage: (message) => {
    set((state) => {
      const isCurrentRoom = state.selectedRoomId === message.roomId;

      return {
        messages: {
          ...state.messages,
          [message.roomId]: [...(state.messages[message.roomId] ?? []), message],
        },
        rooms: sortRoomsByLatest(
          state.rooms.map((room) =>
            room.id === message.roomId
              ? {
                  ...room,
                  lastMessage: {
                    text: message.text,
                    createdAt: message.createdAt,
                    senderId: message.senderId,
                  },
                  unreadCount: isCurrentRoom ? 0 : room.unreadCount + 1,
                }
              : room,
          ),
        ),
      };
    });
  },

  markRoomAsRead: (roomId) => {
    set((state) => ({
      rooms: state.rooms.map((room) => (room.id === roomId ? { ...room, unreadCount: 0 } : room)),
    }));
  },
}));
