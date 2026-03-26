import styled from '@emotion/styled';
import type { ChatRoom } from '../../types/chat';
import { formatRoomTime } from '../../utils/time';
import { text } from '../../styles/typography';

type RoomItemProps = {
  room: ChatRoom;
  isSelected: boolean;
  onClick: () => void;
};

const RoomItem = ({ room, isSelected, onClick }: RoomItemProps) => {
  return (
    <Container $isSelected={isSelected} role="option" aria-selected={isSelected} onClick={onClick}>
      <Info>
        <TopRow>
          <RoomName>{room.name}</RoomName>
          {room.lastMessage && (
            <LastMessageTime>{formatRoomTime(room.lastMessage.createdAt)}</LastMessageTime>
          )}
        </TopRow>
        <BottomRow>
          <LastMessage>{room.lastMessage?.text ?? ''}</LastMessage>
          {room.unreadCount > 0 && <UnreadBadge>{room.unreadCount}</UnreadBadge>}
        </BottomRow>
      </Info>
    </Container>
  );
};

export default RoomItem;

const Container = styled.li<{ $isSelected: boolean }>`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md};
  cursor: pointer;
  background-color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.bg.secondary : theme.colors.bg.primary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.bg.secondary};
  }
`;

const Info = styled.div`
  flex: 1 1 0;
  min-width: 0;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const RoomName = styled.span`
  ${text({ size: 'md', weight: 'semibold', ellipsis: true })}
  color: ${({ theme }) => theme.colors.fg.primary};
`;

const LastMessageTime = styled.span`
  ${text({ size: 'xs' })}
  color: ${({ theme }) => theme.colors.fg.tertiary};
  flex-shrink: 0;
  margin-left: ${({ theme }) => theme.spacing.sm};
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LastMessage = styled.span`
  ${text({ size: 'sm', ellipsis: true })}
  color: ${({ theme }) => theme.colors.fg.secondary};
  flex: 1 1 0;
`;

const UnreadBadge = styled.span`
  ${text({ size: 'xs', weight: 'semibold' })}
  min-width: 1.25rem;
  height: 1.25rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background-color: ${({ theme }) => theme.colors.accent.primary};
  color: ${({ theme }) => theme.colors.accent.fg};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${({ theme }) => theme.spacing.xs};
  flex-shrink: 0;
  margin-left: ${({ theme }) => theme.spacing.sm};
`;
