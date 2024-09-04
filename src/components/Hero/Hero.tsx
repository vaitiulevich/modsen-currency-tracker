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
