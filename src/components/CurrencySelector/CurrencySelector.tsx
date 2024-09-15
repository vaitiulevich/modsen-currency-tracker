import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { CurrencyContext } from '@store/CurrencyContext';
import useLoadImage from '@utils/hooks/useLoadImage';
import { CurrencySelectorProps } from 'interfaces/timeline.interface';
import PropTypes from 'prop-types';

import {
  ContentCurrencyPanel,
  CurrencySelect,
  CurrentCurrencyPanel,
  SubTitleCurrencyPanel,
  TitleCurrencyPanel,
} from './styled';

const CurrencySelector = ({ onSetCurrency }: CurrencySelectorProps) => {
  const context = useContext(CurrencyContext);
  const [selectedCurrency, setSelectedCurrency] = useState(
    context?.currencyList[0],
  );
  const { imageUrl } = useLoadImage(selectedCurrency?.code);

  useEffect(() => {
    if (context?.currencyList && context.currencyList.length > 0) {
      setSelectedCurrency(context.currencyList[0]);
    }
  }, [context?.currencyList]);

  const onSelectCurrency = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCurrency(
      context?.currencyList.find((item) => item.code === e.target.value),
    );
    onSetCurrency(e);
  };

  return (
    <div>
      <CurrencySelect
        defaultValue={selectedCurrency?.code}
        onChange={onSelectCurrency}
      >
        {context?.currencyList.map((item) => (
          <option key={item.code} value={item.code}>
            {item.name}
          </option>
        ))}
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

CurrencySelector.propTypes = {
  onSetCurrency: PropTypes.func.isRequired,
};

export default CurrencySelector;
