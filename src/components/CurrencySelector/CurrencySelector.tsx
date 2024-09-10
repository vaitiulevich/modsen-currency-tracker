import url from '@assets/icons/CNY.svg';
import { ALL_CURRENCY } from '@constants/urls';
import React from 'react';

interface CurrencySelectorProps {
  onSetCurrency: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CurrencySelector: React.FC<CurrencySelectorProps> = ({
  onSetCurrency,
}) => (
  <div>
    <select onChange={onSetCurrency}>
      {ALL_CURRENCY.map((item) => (
        <option key={item}>{item}</option>
      ))}
    </select>
    <div>
      <img src={url} alt="currency" />
      <div>
        <h2>Dolar</h2>
        <p>usd</p>
      </div>
    </div>
  </div>
);

export default CurrencySelector;
