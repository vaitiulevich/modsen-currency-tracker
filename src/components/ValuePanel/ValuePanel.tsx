import ConversionModal from '@components/Modal/Modal';
import { CurrencyPanelProps } from 'interfaces/currency.inteface';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { CurrencyName, ValueIcon, ValuePanelContainer } from './styled';

const ValuePanel: React.FC<CurrencyPanelProps> = ({
  item,
  value,
  isCurrency,
}) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const loadImage = async () => {
      if (item) {
        try {
          const imageModule = await import(`@assets/icons/${item.code}.svg`);
          setImageUrl(imageModule.default);
        } catch (error) {
          console.error('Error loading image:', error);
        }
      }
    };

    loadImage();
  }, [item]);

  const toggleModal = () => {
    if (isCurrency) {
      setModalIsOpen((prev) => !prev);
    }
  };

  if (!item) {
    return <div>No currency data available.</div>;
  }

  return (
    <>
      <ConversionModal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        conversionData={{ code: item.code ?? '', value }}
      />
      <ValuePanelContainer onClick={toggleModal}>
        <ValueIcon>
          {imageUrl ? <img src={imageUrl} alt={item.name} /> : 'Loading...'}
        </ValueIcon>
        <div>
          <CurrencyName>{item.name}</CurrencyName>
          {value !== undefined && <p>R${value.toFixed(2)}</p>}
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
