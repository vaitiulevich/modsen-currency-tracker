import { FormEvent, memo, useCallback } from 'react';
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

  return (
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
};

export default memo(TimelineModal);
