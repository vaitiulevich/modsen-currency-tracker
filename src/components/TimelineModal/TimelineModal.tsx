import { FormEvent, memo, useCallback } from 'react';
import ReactDOM from 'react-dom';
import TimelineForm from '@components/TimelineForm/TimelineForm';
import { useTimelineContext } from '@store/TimelineContext';
import {
  TimelineData,
  TimelineModalProps,
} from 'interfaces/timeline.interface';

import {
  CloseButton,
  ModalContent,
  ModalHeader,
  ModalTitle,
  Overlay,
} from './styled';

const TimelineModal = ({ isOpen, onClose }: TimelineModalProps) => {
  if (!isOpen) return null;
  const { currentFinance, addData } = useTimelineContext();

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>, candlestickData: TimelineData) => {
      e.preventDefault();
      addData(candlestickData);
      onClose();
    },
    [addData, onClose],
  );

  const modalContent = (
    <Overlay>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Change OHLCV</ModalTitle>
          <CloseButton onClick={onClose}>Close</CloseButton>
        </ModalHeader>

        <TimelineForm onSubmit={onSubmit} currentFinance={currentFinance} />
      </ModalContent>
    </Overlay>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById('modal-root')!,
  );
};

export default memo(TimelineModal);
