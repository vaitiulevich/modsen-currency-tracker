import { useEffect, useState } from 'react';
import BurgerMenu from '@components/BurgerMenu/BurgerMenu';
import Menu from '@components/Menu/Menu';
import ToggleSwitch from '@components/ToggleSwitch/ToggleSwitch';
import { breakpoints } from '@constants/breakpoints';
import { images } from '@constants/images';
import { useTheme } from '@utils/hooks/useTheme';

import { HeaderContainer, Logo, MenuOptions } from './styled';

const Header = () => {
  const { toggleTheme, isLight } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth > breakpoints.tablet,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > breakpoints.tablet);
      if (window.innerWidth > breakpoints.tablet) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <Logo>
        <img src={images.logo} alt="logo" />
      </Logo>
      {isDesktop ? (
        <>
          <Menu />
          <ToggleSwitch checked={isLight} onChange={toggleTheme} />
        </>
      ) : (
        <MenuOptions>
          <ToggleSwitch checked={isLight} onChange={toggleTheme} />
          <BurgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
        </MenuOptions>
      )}
    </HeaderContainer>
  );
};

export default Header;
