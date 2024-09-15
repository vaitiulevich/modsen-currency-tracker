import { useCallback, useEffect, useState } from 'react';
import BurgerMenu from '@components/BurgerMenu/BurgerMenu';
import { Logo } from '@components/Logo/Logo';
import Menu from '@components/Menu/Menu';
import ToggleSwitch from '@components/ToggleSwitch/ToggleSwitch';
import { useScreenSize } from '@utils/hooks/useScreenSize';
import { useTheme } from '@utils/hooks/useTheme';

import { HeaderContainer, MenuContainer, MenuOptions } from './styled';

const Header = () => {
  const { toggleTheme, isLight } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useScreenSize();

  useEffect(() => {
    if (isDesktop) {
      setIsOpen(false);
    }
  }, [isDesktop]);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <HeaderContainer>
      <Logo />
      <MenuContainer isDesktop={isDesktop}>
        {isDesktop ? (
          <Menu />
        ) : (
          <BurgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
        )}
      </MenuContainer>
      <ToggleSwitch checked={isLight} onChange={toggleTheme} />
    </HeaderContainer>
  );
};

export default Header;
