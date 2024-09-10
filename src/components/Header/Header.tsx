import logo from '@assets/logo.svg';
import ToggleSwitch from '@components/ToggleSwitch/ToggleSwitch';
import { images } from '@constants/images';
import { useTheme } from '@utils/hooks/useTheme';
import React from 'react';

import { HeaderContainer, Logo, Nav, NavItem } from './styled';

const Header: React.FC = () => {
  const { toggleTheme, isLight } = useTheme();

  return (
    <HeaderContainer>
      <Logo>
        <img src={images.logo} alt="logo" />
      </Logo>
      <Nav>
        <NavItem href="#">Home</NavItem>
        <NavItem href="#timeline">Timeline</NavItem>
        <NavItem href="#bank-card">Bank card</NavItem>
        <NavItem href="#contact">Contact</NavItem>
      </Nav>
      <ToggleSwitch checked={isLight} onChange={toggleTheme} />
    </HeaderContainer>
  );
};

export default Header;
