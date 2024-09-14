import React from 'react';
import Menu from '@components/Menu/Menu';

import { BurgerButton, MenuContainer, Overlay } from './styled';

interface BurgerMenuProp {
  isOpen: boolean;
  toggleMenu: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProp> = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <Overlay isopen={isOpen} onClick={toggleMenu} />
      <BurgerButton isopen={isOpen} onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </BurgerButton>
      <MenuContainer isopen={isOpen}>
        <Menu toggleMenu={toggleMenu} />
      </MenuContainer>
    </>
  );
};

export default BurgerMenu;
