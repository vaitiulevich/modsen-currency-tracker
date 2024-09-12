import React, { useEffect, useState } from 'react';
import ConversionModal from '@components/ConversionModal/ConversionModal';
import Loader from '@components/Loader/Loader';
import { images } from '@constants/images';
import useLoadImage from '@utils/hooks/useLoadImage';
import { CurrencyPanelProps } from 'interfaces/currency.inteface';
import PropTypes from 'prop-types';

import { CurrencyName, ValueIcon, ValuePanelContainer } from './styled';

const ValuePanel: React.FC<CurrencyPanelProps> = ({
  item,
  value,
  isCurrency,
  type,
}) => {
  if (!item) {
    return <div>No currency data available.</div>;
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
        conversionData={{ code: item.code ?? '', value }}
      />
      <ValuePanelContainer onClick={toggleModal}>
        <ValueIcon>
          {imageUrl ? <img src={imageUrl} alt={item.name} /> : <Loader />}
        </ValueIcon>
        <div>
          <CurrencyName>{item.name}</CurrencyName>
          {value && (
            <p>
              {type === 'quotes' && 'R$'}
              {value.toFixed(2)}
              {type === 'stocks' && '%'}
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

export default ValuePanel;
