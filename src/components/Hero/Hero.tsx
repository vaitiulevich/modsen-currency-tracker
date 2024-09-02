import logo from '@assets/logo.svg';
import { RootState } from '@store/store';
import React from 'react';

import {
  HeroContainer,
  HeroContent,
  HeroHeadline,
  HeroLogo,
  HeroSubtitle,
} from './styled';

const Hero: React.FC = () => {
  return (
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
  );
};

export default Hero;
