import { Logo } from '@components/Logo/Logo';
import { footerLinks } from '@constants/footerColumns';

import {
  Column,
  CopyrightInfo,
  FooterContainer,
  FooterContent,
  LinksContainer,
  LogoHeadline,
  LogoTitle,
  NavItem,
  TopFooter,
} from './styled';

const Footer = () => {
  const renderLinks = () => {
    return footerLinks.map((column) => (
      <Column key={column.title}>
        <h3>{column.title}</h3>
        {column.links.map((link) => (
          <NavItem key={link.name} href={link.href}>
            {link.name}
          </NavItem>
        ))}
      </Column>
    ));
  };

  return (
    <FooterContainer>
      <TopFooter>
        <FooterContent>
          <LogoHeadline>
            <Logo />
            <LogoTitle>Modsen Currency Tracker</LogoTitle>
          </LogoHeadline>

          <p>
            Since then, the company has grown organically to. Starsup is the
            world's largest trading platform, with $12 billion worth of currency
            trading and 500,000 tickets sold daily to tens of thousands of
            traders worldwide.
          </p>
        </FooterContent>

        <LinksContainer>{renderLinks()}</LinksContainer>
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
