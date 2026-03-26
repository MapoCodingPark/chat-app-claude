import styled from '@emotion/styled';
import { useChatStore } from '../../store/chatStore';
import MessageItem from './MessageItem';

const MessageList = () => {
  const selectedRoomId = useChatStore((state) => state.selectedRoomId);
  const messages = useChatStore((state) =>
    selectedRoomId ? (state.messages[selectedRoomId] ?? []) : [],
  );
  const me = useChatStore((state) => state.me);
  const users = useChatStore((state) => state.users);

  return (
    <Container>
      <List>
        {messages.map((message) => (
          <MessageItem
            key={message.id}
            message={message}
            senderName={users[message.senderId]?.name ?? ''}
            isMe={message.senderId === me.id}
          />
        ))}
      </List>
    </Container>
  );
};

export default MessageList;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`;

const List = styled.ul`
  flex: 1 1 0;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
`;
