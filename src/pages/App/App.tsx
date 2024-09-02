import Header from '@components/Header/Header';
import Hero from '@components/Hero/Hero';
import { RootState } from '@store/store';
import GlobalStyle from '@styles/global';
import { darkTheme, lightTheme } from '@styles/themes';
import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

function App() {
  const currentTheme = useSelector(
    (state: RootState) => state.themes.currentTheme,
  );
  const theme = currentTheme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Hero />
    </ThemeProvider>
  );
}

export default App;
