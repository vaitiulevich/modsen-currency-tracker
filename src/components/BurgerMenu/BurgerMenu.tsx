import { memo } from 'react';
import { Logo } from '@components/Logo/Logo';
import Menu from '@components/Menu/Menu';

import { BurgerButton, MenuContainer, Overlay } from './styled';

interface BurgerMenuProp {
  isOpen: boolean;
  toggleMenu: () => void;
}

const BurgerMenu = ({ isOpen, toggleMenu }: BurgerMenuProp) => {
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

export default memo(BurgerMenu);
