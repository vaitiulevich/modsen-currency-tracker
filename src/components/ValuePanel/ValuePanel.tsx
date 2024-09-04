import ConversionModal from '@components/Modal/Modal';
import { CurrencyPanelProps } from 'interfaces/currency.inteface';
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
        conversionData={item}
      />
      <ValuePanelContainer onClick={toggleModal}>
        <ValueIcon>
          {imageUrl ? <img src={imageUrl} alt={item.name} /> : 'Loading...'}
        </ValueIcon>
        <div>
          <CurrencyName>{item.name}</CurrencyName>
          {value !== undefined && <p>{value}</p>}
        </div>
      </ValuePanelContainer>
    </>
  );
};

export default ValuePanel;
