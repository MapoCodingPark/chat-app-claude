export type User = {
  id: string;
  name: string;
};

export type Message = {
  id: string;
  roomId: string;
  senderId: string;
  text: string;
  createdAt: string;
  status: 'sending' | 'sent' | 'failed';
};

export type ChatRoom = {
  id: string;
  name: string;
  participantIds: string[];
  lastMessage?: {
    text: string;
    createdAt: string;
    senderId: string;
  };
  unreadCount: number;
};

export type ChatState = {
  me: User;
  users: Record<string, User>; // userId → User (빠른 조회용)
  rooms: ChatRoom[];
  messages: Record<string, Message[]>; // roomId → Message[]
  selectedRoomId: string | null;
};
