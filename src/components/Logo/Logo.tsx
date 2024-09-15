import { images } from '@constants/images';

import { LogoImg } from './styled';

export const Logo = () => {
  return (
    <LogoImg>
      <img src={images.logo} alt="logo" />
    </LogoImg>
  );
};
