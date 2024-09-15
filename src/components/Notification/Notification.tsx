import { useEffect } from 'react';

import { NotificationContainer, NotificationText } from './styled';

interface NotificationProps {
  message: string;
  onClose: () => void;
}

const Notification = ({ message, onClose }: NotificationProps) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 2000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <NotificationContainer>
      <NotificationText className="notification">{message}</NotificationText>
    </NotificationContainer>
  );
};

export default Notification;
