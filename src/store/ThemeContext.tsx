import { createContext, ReactNode, useEffect, useState } from 'react';
import { darkTheme, lightTheme } from '@styles/themes';
import {
  DefaultTheme,
  ThemeProvider as StyledThemeProvider,
} from 'styled-components';

type ThemeState = {
  toggleTheme: () => void;
  isLight: boolean;
};

export const ThemeContext = createContext<ThemeState | undefined>(undefined);

const getInitialTheme = () => {
  const storedTheme = localStorage.getItem('isLightTheme');
  return storedTheme === 'true';
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isLight, setIsLight] = useState(getInitialTheme);
  const [currentTheme, setCurrentTheme] = useState<DefaultTheme>(
    isLight ? lightTheme : darkTheme,
  );
  useEffect(() => {
    setCurrentTheme(isLight ? lightTheme : darkTheme);
    localStorage.setItem('isLightTheme', JSON.stringify(isLight));
  }, [isLight]);

  const toggleTheme = () => {
    setIsLight((prev) => !prev);
  };
  return (
    <StyledThemeProvider theme={currentTheme}>
      <ThemeContext.Provider value={{ toggleTheme, isLight }}>
        {children}
      </ThemeContext.Provider>
    </StyledThemeProvider>
  );
};
