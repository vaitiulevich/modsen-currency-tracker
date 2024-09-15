import { images } from '@constants/images';

import {
  Column,
  CopyrightInfo,
  FooterContainer,
  FooterContent,
  LinksContainer,
  Logo,
  LogoHeadline,
  LogoTitle,
  NavItem,
  TopFooter,
} from './styled';

const Footer = () => {
  return (
    <FooterContainer>
      <TopFooter>
        <FooterContent>
          <LogoHeadline>
            <Logo>
              <img src={images.logo} alt="logo" />
            </Logo>
            <LogoTitle>Modsen Currency Tracker</LogoTitle>
          </LogoHeadline>

          <p>
            Since then, the company has grown organically to. Starsup is the
            world's largest trading platform, with $12 billion worth of currency
            trading and 500,000 tickets sold daily to tens of thousands of
            traders worldwide.
          </p>
        </FooterContent>

        <LinksContainer>
          <Column>
            <h3>General</h3>
            <NavItem href="#market">Market</NavItem>
            <NavItem href="#service">Service</NavItem>
          </Column>
          <Column>
            <h3>Product</h3>
            <NavItem href="#sparks">Sparks</NavItem>
            <NavItem href="#snaps">Snaps</NavItem>
          </Column>
          <Column>
            <h3>Community</h3>
            <NavItem href="#ideas">Ideas</NavItem>
            <NavItem href="#streams">Streams</NavItem>
          </Column>
        </LinksContainer>
      </TopFooter>
      <div>
        <CopyrightInfo>
          Startsup © 2023-2024, All Rights Reserved
        </CopyrightInfo>
      </div>
    </FooterContainer>
  );
};

export default Footer;
