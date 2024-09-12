import React from 'react';
import UpdatedStatus from '@components/UpdatedStatus/UpdatedStatus';
import { images } from '@constants/images';

import {
  HeroContainer,
  HeroContent,
  HeroHeadline,
  HeroLogo,
  HeroSubtitle,
} from './styled';

const Hero: React.FC = () => {
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
          <img src={images.logo} alt="logo" />
        </HeroLogo>
      </HeroContainer>
      <UpdatedStatus />
    </>
  );
};

export default Hero;
