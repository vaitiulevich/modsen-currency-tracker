import { memo, useState } from 'react';
import ConversionModal from '@components/ConversionModal/ConversionModal';
import Loader from '@components/Loader/Loader';
import { CurrencyCodes } from '@constants/currency';
import useLoadImage from '@utils/hooks/useLoadImage';
import { CurrencyPanelProps } from 'interfaces/currency.inteface';

import { CurrencyName, ValueIcon, ValuePanelContainer } from './styled';

const ValuePanel = ({ item, value, isCurrency }: CurrencyPanelProps) => {
  if (!item) {
    return (
      <ValuePanelContainer iscurrency={false}>
        No currency data available.
      </ValuePanelContainer>
    );
  }

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { imageUrl } = useLoadImage(item?.code);

  const toggleModal = () => {
    if (isCurrency) {
      setModalIsOpen((prev) => !prev);
    }
  };

  return (
    <>
      <ConversionModal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        conversionData={{ code: item.code ?? CurrencyCodes.USD, value }}
      />
      <ValuePanelContainer
        data-testid={isCurrency ? 'value-panel-container' : ''}
        iscurrency={isCurrency ? isCurrency : false}
        onClick={toggleModal}
      >
        <ValueIcon>
          {imageUrl ? <img src={imageUrl} alt={item.name} /> : <Loader />}
        </ValueIcon>
        <div>
          <CurrencyName>{item.name}</CurrencyName>
          {value && (
            <p>
              {isCurrency && 'R$'}
              {value.toFixed(2)}
              {!isCurrency && '%'}
            </p>
          )}
        </div>
      </ValuePanelContainer>
    </>
  );
};

export default memo(ValuePanel);
