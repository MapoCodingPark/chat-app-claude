import type { User, ChatRoom, Message } from '../types/chat';

export const ME: User = {
  id: 'user-me',
  name: '나',
};

export const USERS: Record<string, User> = {
  'user-me': ME,
  'user-1': { id: 'user-1', name: 'James' },
  'user-2': { id: 'user-2', name: 'Sarah' },
  'user-3': { id: 'user-3', name: 'Chris' },
  'user-4': { id: 'user-4', name: 'Emily' },
  'user-5': { id: 'user-5', name: 'Ryan' },
};

export const ROOMS: ChatRoom[] = [
  {
    id: 'room-1',
    name: 'James',
    participantIds: ['user-me', 'user-1'],
    lastMessage: {
      text: '내일 몇 시에 만날까요?',
      createdAt: '2026-03-25T10:30:00.000Z',
      senderId: 'user-1',
    },
    unreadCount: 2,
  },
  {
    id: 'room-2',
    name: 'Sarah',
    participantIds: ['user-me', 'user-2'],
    lastMessage: {
      text: '확인했어요!',
      createdAt: '2026-03-25T09:15:00.000Z',
      senderId: 'user-me',
    },
    unreadCount: 0,
  },
  {
    id: 'room-3',
    name: 'Project Team',
    participantIds: ['user-me', 'user-3', 'user-4', 'user-5'],
    lastMessage: {
      text: '배포 완료했습니다 🎉',
      createdAt: '2026-03-25T08:00:00.000Z',
      senderId: 'user-3',
    },
    unreadCount: 5,
  },
  {
    id: 'room-4',
    name: 'Emily',
    participantIds: ['user-me', 'user-4'],
    lastMessage: {
      text: '감사합니다!',
      createdAt: '2026-03-24T22:00:00.000Z',
      senderId: 'user-4',
    },
    unreadCount: 0,
  },
];

export const MESSAGES: Record<string, Message[]> = {
  'room-1': [
    {
      id: 'msg-1-1',
      roomId: 'room-1',
      senderId: 'user-1',
      text: '안녕하세요!',
      createdAt: '2026-03-25T10:00:00.000Z',
      status: 'sent',
    },
    {
      id: 'msg-1-2',
      roomId: 'room-1',
      senderId: 'user-me',
      text: '안녕하세요 반갑습니다 😊',
      createdAt: '2026-03-25T10:05:00.000Z',
      status: 'sent',
    },
    {
      id: 'msg-1-3',
      roomId: 'room-1',
      senderId: 'user-1',
      text: '내일 미팅 관련해서 여쭤봐도 될까요?',
      createdAt: '2026-03-25T10:20:00.000Z',
      status: 'sent',
    },
    {
      id: 'msg-1-4',
      roomId: 'room-1',
      senderId: 'user-1',
      text: '내일 몇 시에 만날까요?',
      createdAt: '2026-03-25T10:30:00.000Z',
      status: 'sent',
    },
  ],
  'room-2': [
    {
      id: 'msg-2-1',
      roomId: 'room-2',
      senderId: 'user-me',
      text: '서연님 자료 공유드렸어요',
      createdAt: '2026-03-25T09:00:00.000Z',
      status: 'sent',
    },
    {
      id: 'msg-2-2',
      roomId: 'room-2',
      senderId: 'user-2',
      text: '감사해요! 바로 확인해볼게요',
      createdAt: '2026-03-25T09:10:00.000Z',
      status: 'sent',
    },
    {
      id: 'msg-2-3',
      roomId: 'room-2',
      senderId: 'user-me',
      text: '확인했어요!',
      createdAt: '2026-03-25T09:15:00.000Z',
      status: 'sent',
    },
  ],
  'room-3': [
    {
      id: 'msg-3-1',
      roomId: 'room-3',
      senderId: 'user-3',
      text: '오늘 배포 준비됐나요?',
      createdAt: '2026-03-25T07:00:00.000Z',
      status: 'sent',
    },
    {
      id: 'msg-3-2',
      roomId: 'room-3',
      senderId: 'user-4',
      text: '네 QA 완료했습니다',
      createdAt: '2026-03-25T07:30:00.000Z',
      status: 'sent',
    },
    {
      id: 'msg-3-3',
      roomId: 'room-3',
      senderId: 'user-5',
      text: '저도 확인 완료요!',
      createdAt: '2026-03-25T07:45:00.000Z',
      status: 'sent',
    },
    {
      id: 'msg-3-4',
      roomId: 'room-3',
      senderId: 'user-me',
      text: '그럼 바로 배포 진행할게요',
      createdAt: '2026-03-25T07:55:00.000Z',
      status: 'sent',
    },
    {
      id: 'msg-3-5',
      roomId: 'room-3',
      senderId: 'user-3',
      text: '배포 완료했습니다 🎉',
      createdAt: '2026-03-25T08:00:00.000Z',
      status: 'sent',
    },
  ],
  'room-4': [
    {
      id: 'msg-4-1',
      roomId: 'room-4',
      senderId: 'user-me',
      text: '유나님 어제 도움 주셔서 감사했어요',
      createdAt: '2026-03-24T21:50:00.000Z',
      status: 'sent',
    },
    {
      id: 'msg-4-2',
      roomId: 'room-4',
      senderId: 'user-4',
      text: '감사합니다!',
      createdAt: '2026-03-24T22:00:00.000Z',
      status: 'sent',
    },
  ],
};
