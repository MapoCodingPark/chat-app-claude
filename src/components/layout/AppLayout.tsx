import styled from '@emotion/styled';
import { useChatStore } from '../../store/chatStore';

const AppLayout = () => {
  const selectedRoomId = useChatStore((state) => state.selectedRoomId);
  const hasSelectedRoom = selectedRoomId !== null;

  return (
    <Container>
      <LeftPanel $isHidden={hasSelectedRoom}>
        <div>Room List</div>
      </LeftPanel>
      <RightPanel $isHidden={!hasSelectedRoom}>
        {hasSelectedRoom ? <div>Message List</div> : <EmptyState>채팅방을 선택해주세요</EmptyState>}
      </RightPanel>
    </Container>
  );
};

export default AppLayout;

const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

const LeftPanel = styled.div<{ $isHidden: boolean }>`
  width: 20rem;
  border-right: 1px solid ${({ theme }) => theme.colors.border.primary};
  flex-shrink: 0;
  overflow-y: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    display: ${({ $isHidden }) => ($isHidden ? 'none' : 'block')};
  }
`;

const RightPanel = styled.div<{ $isHidden: boolean }>`
  flex: 1;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    display: ${({ $isHidden }) => ($isHidden ? 'none' : 'block')};
  }
`;

const EmptyState = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.fg.tertiary};
  font-size: ${({ theme }) => theme.fontSize.sm};
`;
