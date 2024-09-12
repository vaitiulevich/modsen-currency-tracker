import React, { createContext, ReactNode, useContext, useState } from 'react';
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

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isLight, setisLight] = useState(
    localStorage.getItem('isLightTheme') === 'true',
  );
  const [currentTheme, setCurrentTheme] = useState<DefaultTheme>(
    isLight ? lightTheme : darkTheme,
  );

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) =>
      prevTheme === darkTheme ? lightTheme : darkTheme,
    );
    setisLight(!isLight);
    localStorage.setItem('isLightTheme', JSON.stringify(!isLight));
  };

  return (
    <StyledThemeProvider theme={currentTheme}>
      <ThemeContext.Provider value={{ toggleTheme, isLight }}>
        {children}
      </ThemeContext.Provider>
    </StyledThemeProvider>
  );
};
