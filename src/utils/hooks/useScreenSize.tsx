import { useEffect, useState } from 'react';
import { breakpoints } from '@constants/breakpoints';

export const useScreenSize = () => {
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth > breakpoints.tablet,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > breakpoints.tablet);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isDesktop;
};
