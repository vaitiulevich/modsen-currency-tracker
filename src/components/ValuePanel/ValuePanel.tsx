import ConversionModal from '@components/ConversionModal/ConversionModal';
import Loader from '@components/Loader/Loader';
import { images } from '@constants/images';
import useLoadImage from '@utils/hooks/useLoadImage';
import { CurrencyPanelProps } from 'interfaces/currency.inteface';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { CurrencyName, ValueIcon, ValuePanelContainer } from './styled';

const ValuePanel: React.FC<CurrencyPanelProps> = ({
  item,
  value,
  isCurrency,
}) => {
  if (!item) {
    return <div>No currency data available.</div>;
  }

  // const imageUrl = loadImage(item?.code);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { imageUrl } = useLoadImage(item?.code);

  // useEffect(() => {
  // const loadImage = async () => {
  //   if (item) {
  //     try {
  //       const imageModule = await import(`@assets/icons/${item.code}.svg`);
  //       return imageModule.default
  //     } catch (error) {
  //       console.error('Error loading image:', error);
  //     }
  //   }
  // };
  // setImageUrl(imageModule.default);

  // loadImage();
  // }, []);

  console.log(imageUrl);

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
