import styled from '@emotion/styled';
import { useChatStore } from '../../store/chatStore';
import RoomItem from './RoomItem';

const RoomList = () => {
  const rooms = useChatStore((state) => state.rooms);
  const selectedRoomId = useChatStore((state) => state.selectedRoomId);
  const selectRoom = useChatStore((state) => state.selectRoom);

  return (
    <Container>
      <Header>Chat</Header>
      <List role="listbox">
        {rooms.map((room) => (
          <RoomItem
            key={room.id}
            room={room}
            isSelected={room.id === selectedRoomId}
            onClick={() => selectRoom(room.id)}
          />
        ))}
      </List>
    </Container>
  );
};

export default RoomList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

const Header = styled.h2`
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.fg.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};
`;

const List = styled.ul`
  flex: 1 1 0;
  overflow-y: auto;
`;
