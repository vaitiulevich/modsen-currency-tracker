import logo from '@assets/logo.svg';
import React from 'react';

import { FooterContainer, Logo, Nav, NavItem } from './styled';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>
      <Nav>
        <NavItem href="#home">Home</NavItem>
        <NavItem href="#timeline">Timeline</NavItem>
        <NavItem href="#bank-card">Bank card</NavItem>
        <NavItem href="#contact">Contact</NavItem>
      </Nav>
    </FooterContainer>
  );
};

export default Footer;
