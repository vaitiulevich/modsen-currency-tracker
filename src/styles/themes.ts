import { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
  colors: {
    accent: '#00BC4F',
    accentFont:
      'linear-gradient(90.18deg, #00CE2C 0.18%, #AEDF23 49.3%, #A3DC00 99.88%)',
    fillBackground: '#030304',
    fillSecondary: '#202025',
    generalFont: '#D9D9D9',
    secondaryFont: '#A7B2C3',
    linerGradientHero: 'linear-gradient(252.93deg, #24794000 1%, #121212 100%)',
    errMessage: '##e40000',
    footerSecondaryFont: '#656565',
  },
  typography: {
    fontSize: {
      small: '0.8rem',
      medium: '1rem',
      average: '1.3rem',
      large: '1.8rem',
      largest: '3.5rem',
    },
    fontWeight: {
      thin: '100',
      normal: '300',
      bold: '600',
    },
    fontFamily: {
      general: '"Poppins", sans-serif',
    },
  },
  indents: {
    containerPaddingDesctop: '1rem 13%',
    containerPaddingLaptop: '1rem 8%',
    containerPaddingMobile: '1rem 4%',
  },
  border: 'solid 0.01rem #FFFFFF',
};

export const lightTheme: DefaultTheme = {
  colors: {
    accent: '#00BC4F',
    accentFont:
      'linear-gradient(90.18deg, #00CE2C 0.18%, #AEDF23 49.3%, #A3DC00 99.88%)',
    fillBackground: '#fff',
    fillSecondary: '#f5f5f5',
    generalFont: '#030304',
    secondaryFont: '#030304',
    linerGradientHero:
      'linear-gradient(359.93deg, #24794000 1%, #355634 100%);',
    errMessage: '##e40000',
    footerSecondaryFont: '#656565',
  },
  typography: {
    fontSize: {
      small: '0.8rem',
      medium: '1rem',
      average: '1.3rem',
      large: '1.8rem',
      largest: '3.5rem',
    },
    fontWeight: {
      thin: '100',
      normal: '300',
      bold: '600',
    },
    fontFamily: {
      general: '"Poppins", sans-serif',
    },
  },
  indents: {
    containerPaddingDesctop: '1rem 13%',
    containerPaddingLaptop: '1rem 8%',
    containerPaddingMobile: '1rem 4%',
  },
  border: 'solid 0.01rem #030304',
};
