import { Outlet } from 'react-router-dom';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import Hero from '@components/Hero/Hero';
import { CurrencyProvider } from '@store/CurrencyContext';
import { ThemeProvider } from '@store/ThemeContext';
import { TimelineProvider } from '@store/TimelineContext';
import GlobalStyle from '@styles/global';

import { AppComponent } from './styled';

function App() {
  return (
    <ThemeProvider>
      <CurrencyProvider>
        <TimelineProvider>
          <ErrorBoundary>
            <AppComponent>
              <GlobalStyle />
              <Header />
              <Hero />
              <main>
                <Outlet />
              </main>
              <Footer />
            </AppComponent>
          </ErrorBoundary>
        </TimelineProvider>
      </CurrencyProvider>
    </ThemeProvider>
  );
}

export default App;
