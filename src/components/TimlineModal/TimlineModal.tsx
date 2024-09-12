import Loader from '@components/Loader/Loader';
import TimelineForm from '@components/TimelineForm/TimelineForm';
import TimelineContext from '@store/TimelineContext';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';

import {
  CloseButton,
  ConversionCurencyPanel,
  ConversionResult,
  ModalContent,
  ModalInput,
  ModalSelect,
  ModalTitle,
  Overlay,
} from './styled';
interface FinanceProps {
  x: Date;
  o: number;
  h: number;
  l: number;
  c: number;
}
interface TimelineModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TimlineModal: React.FC<TimelineModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const context = useContext(TimelineContext);
  if (!context) {
    return <Loader />;
  }
  const { currentFinance, addData } = context;

  const onSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    candlestickData: FinanceProps,
  ) => {
    e.preventDefault();
    console.log(candlestickData);
    addData(candlestickData);
  };

  return (
    <Overlay>
      <ModalContent>
        <ModalTitle>Currency Exchange</ModalTitle>
        <TimelineForm onSubmit={onSubmit} currentFinance={currentFinance} />
        <CloseButton>Exchange</CloseButton>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContent>
    </Overlay>
  );
};

TimlineModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default TimlineModal;
