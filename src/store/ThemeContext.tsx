import { darkTheme, lightTheme } from '@styles/themes';
import React, { createContext, ReactNode, useContext, useState } from 'react';
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
  const [currentTheme, setCurrentTheme] = useState<DefaultTheme>(darkTheme);
  const [isLight, setisLight] = useState(false);

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) =>
      prevTheme === darkTheme ? lightTheme : darkTheme,
    );
    setisLight(!isLight);
  };

  return (
    <StyledThemeProvider theme={currentTheme}>
      <ThemeContext.Provider value={{ toggleTheme, isLight }}>
        {children}
      </ThemeContext.Provider>
    </StyledThemeProvider>
  );
};
