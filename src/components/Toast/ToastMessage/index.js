import { useEffect } from 'react';
import { Container } from './styles';

import xCircleIcon from '../../../assets/images/icons/x-circle.svg';
import checkCircleIcon from '../../../assets/images/icons/check-circle.svg';

export default function ToastMessage({ message, onRemoveMessage }) {
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      onRemoveMessage(message.id);
    }, message.duration || 7000);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [message, onRemoveMessage]);

  function handleRemoveToast() {
    onRemoveMessage(message.id);
  }

  return (
    <Container
      type={message.type}
      onClick={handleRemoveToast}
      tabIndex={0}
      role="button"
    >
      {message.type === 'danger' && <img src={xCircleIcon} alt="X" />}
      {message.type === 'success' && <img src={checkCircleIcon} alt="Success" />}
      <strong>{message.text}</strong>
    </Container>
  );
}
