import React, { useEffect, useState } from 'react';
import { ALL_CURRENCY } from '@constants/currency';
import { endPoints, URL_CURRENCY_API } from '@constants/urls';
import { ConversionModalProps } from 'interfaces/convirsation.interface';
import PropTypes from 'prop-types';

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

const ConversionModal: React.FC<ConversionModalProps> = ({
  isOpen,
  onRequestClose,
  conversionData,
}) => {
  const storedData =
    localStorage.getItem(URL_CURRENCY_API + endPoints.latestCurrency) ?? '{}';
  const [AllCurrencyExchange, setAllCurrencyExchange] = useState(
    JSON.parse(storedData),
  );
  const [currencyAmount, setCurrencyAmount] = useState(1);
  const [resCurrencyExchange, setResCurrencyExchange] = useState<number | null>(
    null,
  );
  const [availableCurrencies, setAvailableCurrencies] = useState<string[]>([]);
  const [currencyExchange, setCurrencyExchange] = useState<string>('');

  useEffect(() => {
    if (!isOpen) return;

    const filteredCurrencies = ALL_CURRENCY.filter(
      (currency) => currency !== conversionData?.code,
    );
    setAvailableCurrencies(filteredCurrencies);
    if (filteredCurrencies.length > 0) {
      setCurrencyExchange(filteredCurrencies[0]);
    }
  }, [isOpen, conversionData]);

  const onExchangeRates = async () => {
    let finalAmount;

    if (conversionData.code === 'USD') {
      finalAmount =
        +currencyAmount *
        +AllCurrencyExchange.data.data[currencyExchange].value;
    } else {
      finalAmount =
        (+currencyAmount / +(conversionData?.value ?? 1)) *
        +AllCurrencyExchange.data.data[currencyExchange].value;
    }

    setResCurrencyExchange(finalAmount);
  };

  const onInputAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrencyAmount(+e.target.value);
  };

  if (!isOpen) return null;

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
          <p>{resCurrencyExchange?.toFixed(7) ?? 0}</p>
        </ConversionResult>

        <CloseButton onClick={onExchangeRates}>Exchange</CloseButton>
        <CloseButton
          onClick={() => {
            setCurrencyAmount(1);
            setResCurrencyExchange(null);
            onRequestClose();
          }}
        >
          Close
        </CloseButton>
      </ModalContent>
    </Overlay>
  );
};

ConversionModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  conversionData: PropTypes.shape({
    code: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }).isRequired,
};

export default ConversionModal;
