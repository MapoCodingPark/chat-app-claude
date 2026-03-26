export const formatRoomTime = (isoString: string): string => {
  const date = new Date(isoString);
  const now = new Date();

  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const startOfDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const diffDays = Math.floor(
    (startOfToday.getTime() - startOfDate.getTime()) / (1000 * 60 * 60 * 24),
  );

  const isToday = diffDays === 0;

  if (isToday) {
    return date.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
  }

  if (diffDays === 1) {
    return '어제';
  }

  if (diffDays <= 7) {
    return `${diffDays}일 전`;
  }

  const isThisYear = date.getFullYear() === now.getFullYear();

  if (isThisYear) {
    return date.toLocaleDateString('ko-KR', { month: 'numeric', day: 'numeric' });
  }

  return date.toLocaleDateString('ko-KR', { year: 'numeric', month: 'numeric', day: 'numeric' });
};

export const formatMessageTime = (isoString: string): string => {
  const date = new Date(isoString);
  return date.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
};
