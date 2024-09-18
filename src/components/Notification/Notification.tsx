import { useEffect } from 'react';
import ReactDOM from 'react-dom';

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

  const notificationContent = (
    <NotificationContainer>
      <NotificationText className="notification">{message}</NotificationText>
    </NotificationContainer>
  );
  return ReactDOM.createPortal(
    notificationContent,
    document.getElementById('modal-root')!,
  );
};

export default Notification;
