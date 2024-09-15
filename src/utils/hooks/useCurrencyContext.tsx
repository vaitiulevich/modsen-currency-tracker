import { useContext } from 'react';
import { CurrencyContext } from '@store/CurrencyContext';

export const useCurrencyContext = () => {
  const context = useContext(CurrencyContext);

  if (!context) {
    throw new Error('CurrencyContext not found');
  }

  return context;
};
