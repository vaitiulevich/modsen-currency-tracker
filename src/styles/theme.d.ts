import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      accent: string;
      accentFont: string;
      fillBackground: string;
      fillSecondary: string;
      generalFont: string;
      hoverFill: string;
      secondaryFont: string;
      linerGradientHero: string;
      errMessage: string;
      footerSecondaryFont: string;
      modalFill: string;
    };
    typography: {
      fontSize: {
        small: string;
        medium: string;
        average: string;
        large: string;
        largest: string;
      };
      fontFamily: {
        general: string;
      };
      fontWeight: {
        thin: string;
        normal: string;
        bold: string;
      };
    };
    indents: {
      containerPaddingDesctop: string;
      containerPaddingLaptop: string;
      containerPaddingMobile: string;
    };
    border: {
      borderPanels: string;
      borderSwither: string;
    };
  }
}
