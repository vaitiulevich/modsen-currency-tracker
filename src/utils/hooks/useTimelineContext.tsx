import { useContext } from 'react';
import TimelineContext from '@store/TimelineContext';

export const useCurrencyContext = () => {
  const context = useContext(TimelineContext);

  if (!context) {
    throw new Error('TimelineContext not found');
  }

  return context;
};
