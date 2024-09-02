import Header from '@components/Header/Header';
import Hero from '@components/Hero/Hero';
import { ThemeProvider } from '@store/ThemeContext';
import GlobalStyle from '@styles/global';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Header />
      <Hero />
    </ThemeProvider>
  );
}

export default App;
