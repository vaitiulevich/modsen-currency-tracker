import logo from '@assets/logo.svg';
import ToggleSwitch from '@components/ToggleSwitch/ToggleSwitch';
import { toggleTheme } from '@store/actions/themesActions';
import { RootState } from '@store/store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { HeaderContainer, Logo, Nav, NavItem } from './styled';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(
    (state: RootState) => state.themes.currentTheme,
  );
  const isChecked = currentTheme === 'light';

  const handleToggle = () => {
    dispatch(toggleTheme());
  };
  return (
    <HeaderContainer>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>
      <Nav>
        <NavItem href="#home">Home</NavItem>
        <NavItem href="#timeline">Timeline</NavItem>
        <NavItem href="#bank-card">Bank card</NavItem>
        <NavItem href="#contact">Contact</NavItem>
      </Nav>
      <ToggleSwitch checked={isChecked} onChange={handleToggle} />
    </HeaderContainer>
  );
};

export default Header;
