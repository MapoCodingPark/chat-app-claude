# Chat App

실시간 채팅 웹 애플리케이션입니다.
모바일(1-panel)과 데스크탑(2-panel)을 모두 지원하는 반응형으로 구현되어 있습니다.

---

## 기술 스택

| 분류 | 기술 |
|------|------|
| Framework | React 19 + TypeScript |
| Build | Vite |
| 상태 관리 | Zustand |
| 스타일링 | Emotion |
| 린팅/포맷팅 | ESLint + Prettier |

---

## 주요 기능

- 채팅방 목록 조회 및 선택
- 메시지 송수신
- 읽지 않은 메시지 수 표시
- 최근 메시지 기준 채팅방 정렬
- 긴 메시지 말줄임 및 더 보기
- 반응형 레이아웃 (모바일 / 데스크탑)

---

## 시작하기

```bash
# 패키지 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build
```

---

## 프로젝트 구조

```
src/
├── pages/
│   └── ChatPage.tsx          # 메인 페이지 (레이아웃 포함)
├── features/
│   ├── room/                 # 채팅방 관련 컴포넌트
│   │   ├── RoomList.tsx
│   │   ├── RoomItem.tsx
│   │   └── RoomSearch.tsx
│   └── chat/                 # 메시지 관련 컴포넌트
│       ├── MessageList.tsx
│       ├── MessageItem.tsx
│       ├── MessageInput.tsx
│       └── NewMessageBanner.tsx
├── store/
│   └── chatStore.ts          # Zustand 전역 상태
├── styles/
│   ├── theme.ts              # 디자인 토큰
│   ├── typography.ts         # 타이포그래피 유틸
│   └── emotion.d.ts          # Emotion 테마 타입 선언
├── mock/
│   ├── data.ts               # Mock 데이터
│   └── simulator.ts          # 메시지 수신 시뮬레이터
├── types/
│   └── chat.ts               # 타입 정의
└── utils/
    └── time.ts               # 시간 포맷 유틸
```

---

## 컨벤션

[CONVENTIONS.md](./CONVENTIONS.md) 참고
