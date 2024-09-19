import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { ALL_CURRENCY, CurrencyCodes } from '@constants/currency';
import { endPoints, URL_CURRENCY_API } from '@constants/urls';
import { ConversionModalProps } from 'interfaces/convirsation.interface';
import PropTypes from 'prop-types';

import {
  CloseButton,
  ConversionCurencyPanel,
  ConversionResult,
  ErrorPanel,
  ModalContent,
  ModalInput,
  ModalInputPanel,
  ModalSelect,
  ModalTitle,
  Overlay,
} from './styled';

const ConversionModal = ({
  isOpen = false,
  onRequestClose = () => {},
  conversionData = { code: CurrencyCodes.USD, value: 0 },
}: ConversionModalProps) => {
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

    if (conversionData.code === CurrencyCodes.USD) {
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
  const [error, setError] = useState('');
  const validateAmount = (value: string) => {
    if (value === '') {
      setError('Invalid value');
      return false;
    }
    if (+value < 1) {
      setError(`Minimum value 1`);
      return false;
    }
    if (+value > 1000000) {
      setError(`Maximum value 1 000 000`);
      return false;
    }
    setError('');
    return true;
  };
  const onInputAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (validateAmount(e.target.value)) {
      setCurrencyAmount(+e.target.value);
    }
  };

  if (!isOpen) return null;

  const modalContent = (
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

        <ModalInputPanel>
          <label htmlFor="amount">Amount:</label>
          <ModalInput
            id="amount"
            type="number"
            min="0.01"
            step="0.01"
            defaultValue={currencyAmount}
            onChange={onInputAmount}
          />
          {error && <ErrorPanel>{error}</ErrorPanel>}
        </ModalInputPanel>

        <ConversionResult>
          <p>Currency conversion result:</p>
          <p>{resCurrencyExchange?.toFixed(7) ?? 0}</p>
        </ConversionResult>

        <CloseButton disabled={error !== ''} onClick={onExchangeRates}>
          Exchange
        </CloseButton>
        <CloseButton
          onClick={() => {
            setCurrencyAmount(1);
            setResCurrencyExchange(null);
            setError('');
            onRequestClose();
          }}
        >
          Close
        </CloseButton>
      </ModalContent>
    </Overlay>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById('modal-root')!,
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
