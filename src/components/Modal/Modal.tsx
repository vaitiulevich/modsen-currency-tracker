import {
  ALL_CURRENCY,
  endPoints,
  EXCHANGE_API_KEY,
  URL_EXCHANGE_API,
} from '@constants/urls';
import axios from 'axios';
import { Currency } from 'interfaces/currency.inteface';
import React, { useEffect, useState } from 'react';

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

interface ConversionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  conversionData: Currency | null;
}

const ConversionModal: React.FC<ConversionModalProps> = ({
  isOpen,
  onRequestClose,
  conversionData,
}) => {
  const [currencyExchange, setCurrencyExchange] = useState(ALL_CURRENCY[0]);
  const [currencyAmount, setCurrencyAmount] = useState(1);
  const [resCurrencyExchange, setResCurrencyExchange] = useState<number | null>(
    null,
  );
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const availableCurrencies = ALL_CURRENCY.filter(
    (currency) => currency !== conversionData?.code,
  );

  const fetchExchangeRates = async () => {
    if (!conversionData) return;

    try {
      const response = await axios.get(
        `${URL_EXCHANGE_API}${EXCHANGE_API_KEY}${endPoints.exchange}/${conversionData.code}/${currencyExchange}/${currencyAmount}`,
      );
      setResCurrencyExchange(response.data.conversion_result);
      setError(null);
    } catch (err) {
      setError('err');
    }
  };

  const onInputAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrencyAmount(+e.target.value);
  };

  return (
    <Overlay>
      <ModalContent>
        <ModalTitle>Currency Exchange</ModalTitle>
        {conversionData ? (
          <ConversionCurencyPanel>
            <p>From: {conversionData.code}</p>
            <div>
              <span>To:</span>
              <ModalSelect
                value={currencyExchange}
                onChange={(e) => setCurrencyExchange(e.target.value)}
              >
                {availableCurrencies.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </ModalSelect>
            </div>
          </ConversionCurencyPanel>
        ) : (
          <p>No data available</p>
        )}

        <div>
          <label>Amount:</label>
          <ModalInput
            type="number"
            min="0.01"
            step="0.01"
            defaultValue={currencyAmount}
            onChange={onInputAmount}
          />
        </div>

        <ConversionResult>
          <p>Currency conversion result:</p>
          <p>{resCurrencyExchange?.toFixed(2) ?? 0}</p>
        </ConversionResult>

        <CloseButton onClick={fetchExchangeRates}>Exchange</CloseButton>
        <CloseButton
          onClick={() => {
            setCurrencyAmount(1);
            setResCurrencyExchange(null);
            setError(null);
            onRequestClose();
          }}
        >
          Close
        </CloseButton>
      </ModalContent>
    </Overlay>
  );
};

export default ConversionModal;
