import UpdatedStatus from '@components/UpdatedStatus/UpdatedStatus';
import { images } from '@constants/images';
import withScrollAnimation from '@utils/HOC/withScrollAnimation';

import {
  HeroContainer,
  HeroContent,
  HeroHeadline,
  HeroLogo,
  HeroSubtitle,
} from './styled';

const Hero = () => {
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

export default withScrollAnimation(Hero);
