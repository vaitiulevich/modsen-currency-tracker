import logo from '@assets/logo.svg';
import UpdatedStatus from '@components/UpdatedStatus/UpdatedStatus';
import axios from 'axios';
import React from 'react';

import {
  HeroContainer,
  HeroContent,
  HeroHeadline,
  HeroLogo,
  HeroSubtitle,
} from './styled';

const Hero: React.FC = () => {
  const periodId = '1MIN';
  axios
    .get(
      `https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_BTC_USD/latest?period_id=${periodId}`,
      {
        headers: { 'X-CoinAPI-Key': '910C1E7C-062B-49F4-A48B-F3D82043D025' },
      },
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  axios
    .get(
      `https://rest.coinapi.io/v1/assets?filter_asset_id=BTC;CAD;AUD;EUR;ARS;CNY;USD;JPY`,
      {
        headers: { 'X-CoinAPI-Key': '910C1E7C-062B-49F4-A48B-F3D82043D025' },
      },
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  return (
    <>
      <HeroContainer>
        <HeroContent>
          <HeroHeadline>
            Modsen Currency <br />
            Tracker
          </HeroHeadline>
          <HeroSubtitle>
            Quotes for the dollar and other international currencies.
          </HeroSubtitle>
        </HeroContent>
        <HeroLogo>
          <img src={logo} alt="logo" />
        </HeroLogo>
      </HeroContainer>
      <UpdatedStatus />
    </>
  );
};

export default Hero;
