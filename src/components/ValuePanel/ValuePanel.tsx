import { memo, useState } from 'react';
import ConversionModal from '@components/ConversionModal/ConversionModal';
import Loader from '@components/Loader/Loader';
import { CurrencyCodes } from '@constants/currency';
import useLoadImage from '@utils/hooks/useLoadImage';
import { CurrencyPanelProps } from 'interfaces/currency.inteface';
import PropTypes from 'prop-types';

import { CurrencyName, ValueIcon, ValuePanelContainer } from './styled';

const ValuePanel = ({
  item = {},
  value = 0,
  isCurrency = false,
}: CurrencyPanelProps) => {
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

ValuePanel.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  value: PropTypes.number.isRequired,
  isCurrency: PropTypes.bool.isRequired,
};

export default memo(ValuePanel);
