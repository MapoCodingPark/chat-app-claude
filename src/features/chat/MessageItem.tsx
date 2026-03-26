import { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import type { Message } from '../../types/chat';
import { formatMessageTime } from '../../utils/time';
import { text } from '../../styles/typography';

type MessageItemProps = {
  message: Message;
  senderName: string;
  isMe: boolean;
};

const MessageItem = ({ message, senderName, isMe }: MessageItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (el) {
      setIsTruncated(el.scrollHeight > el.clientHeight);
    }
  }, [message.text]);

  const handleExpandClick = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <Container $isMe={isMe}>
      {!isMe && <SenderName>{senderName}</SenderName>}
      <Bubble $isMe={isMe}>
        <Text ref={textRef} $isMe={isMe} $isExpanded={isExpanded}>
          {message.text}
        </Text>
        {(isTruncated || isExpanded) && (
          <ExpandButton $isMe={isMe} onClick={handleExpandClick}>
            {isExpanded ? '접기' : '더 보기'}
          </ExpandButton>
        )}
      </Bubble>
      <Time>{formatMessageTime(message.createdAt)}</Time>
    </Container>
  );
};

export default MessageItem;

const Container = styled.li<{ $isMe: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ $isMe }) => ($isMe ? 'flex-end' : 'flex-start')};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const SenderName = styled.span`
  ${text({ size: 'xs' })}
  color: ${({ theme }) => theme.colors.fg.tertiary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  padding: 0 ${({ theme }) => theme.spacing.sm};
`;

const Bubble = styled.div<{ $isMe: boolean }>`
  max-width: 70%;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background-color: ${({ $isMe, theme }) =>
    $isMe ? theme.colors.accent.primary : theme.colors.bg.tertiary};
  border-bottom-right-radius: ${({ $isMe, theme }) =>
    $isMe ? theme.borderRadius.sm : theme.borderRadius.lg};
  border-bottom-left-radius: ${({ $isMe, theme }) =>
    $isMe ? theme.borderRadius.lg : theme.borderRadius.sm};
`;

const Text = styled.p<{ $isMe: boolean; $isExpanded: boolean }>`
  ${({ $isExpanded }) =>
    text({ size: 'md', lineHeight: 1.5, preWrap: true, ellipsis: $isExpanded ? undefined : 3 })}
  color: ${({ $isMe, theme }) => ($isMe ? theme.colors.accent.fg : theme.colors.fg.primary)};
`;

const ExpandButton = styled.button<{ $isMe: boolean }>`
  ${text({ size: 'xs', weight: 'semibold' })}
  display: block;
  margin-top: ${({ theme }) => theme.spacing.xs};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: ${({ $isMe, theme }) => ($isMe ? 'rgba(255,255,255,0.8)' : theme.colors.accent.primary)};
`;

const Time = styled.span`
  ${text({ size: 'xs' })}
  display: block;
  color: ${({ theme }) => theme.colors.fg.tertiary};
  margin-top: ${({ theme }) => theme.spacing.xs};
`;
