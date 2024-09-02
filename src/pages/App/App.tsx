import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import Hero from '@components/Hero/Hero';
import { ThemeProvider } from '@store/ThemeContext';
import GlobalStyle from '@styles/global';

import { AppComponent } from './styled';

function App() {
  return (
    <ThemeProvider>
      <AppComponent>
        <GlobalStyle />
        <Header />
        <Hero />
        <main></main>
        <Footer />
      </AppComponent>
    </ThemeProvider>
  );
}

export default App;
