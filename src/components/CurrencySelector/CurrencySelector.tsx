import { ChangeEvent, useEffect, useState } from 'react';
import { NO_CURRENCY } from '@constants/messages';
import { useCurrencyContext } from '@utils/hooks/useCurrencyContext';
import useLoadImage from '@utils/hooks/useLoadImage';
import { Currency } from 'interfaces/currency.inteface';
import { CurrencySelectorProps } from 'interfaces/timeline.interface';

import {
  ContentCurrencyPanel,
  CurrencySelect,
  CurrentCurrencyPanel,
  SubTitleCurrencyPanel,
  TitleCurrencyPanel,
} from './styled';

const CurrencySelector = ({ handleSetCurrency }: CurrencySelectorProps) => {
  const { currencyList } = useCurrencyContext();

  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(
    currencyList[0],
  );
  const { imageUrl } = useLoadImage(selectedCurrency?.code);

  useEffect(() => {
    if (currencyList && currencyList.length) {
      setSelectedCurrency(currencyList[0]);
    }
  }, [currencyList]);

  const findCurrencyByCode = (code: string) => {
    return currencyList.find((item) => item.code === code);
  };

  const handleSelectCurrency = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedCurrency = findCurrencyByCode(e.target.value) ?? {};
    setSelectedCurrency(selectedCurrency);
    handleSetCurrency(e);
  };
  const renderCurrencyOptions = () => {
    if (!currencyList || currencyList.length === 0) {
      return <option disabled>{NO_CURRENCY}</option>;
    }

    return currencyList.map((item) => (
      <option key={item.code} value={item.code}>
        {item.name}
      </option>
    ));
  };

  return (
    <div>
      <CurrencySelect
        defaultValue={selectedCurrency?.code}
        onChange={handleSelectCurrency}
      >
        {renderCurrencyOptions()}
      </CurrencySelect>
      <CurrentCurrencyPanel>
        {imageUrl && <img src={imageUrl} alt="currency" />}
        <ContentCurrencyPanel>
          <TitleCurrencyPanel>{selectedCurrency?.name}</TitleCurrencyPanel>
          <SubTitleCurrencyPanel>
            {selectedCurrency?.code}
          </SubTitleCurrencyPanel>
        </ContentCurrencyPanel>
      </CurrentCurrencyPanel>
    </div>
  );
};

export default CurrencySelector;
