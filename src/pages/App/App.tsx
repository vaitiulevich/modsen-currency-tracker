import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import Hero from '@components/Hero/Hero';
import { ThemeProvider } from '@store/ThemeContext';
import GlobalStyle from '@styles/global';
import { Outlet } from 'react-router-dom';

import { AppComponent } from './styled';

function App() {
  return (
    <ThemeProvider>
      <AppComponent>
        <GlobalStyle />
        <Header />
        <Hero />
        <main>
          <Outlet />
        </main>
        <Footer />
      </AppComponent>
    </ThemeProvider>
  );
}

export default App;
