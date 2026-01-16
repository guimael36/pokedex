import { ThemeProviderWrapper } from './contexts/ThemeContext';
import { GlobalStyle } from './styles/GlobalStyles';
import { AppRoutes } from './routes';

function App() {
  return (
    <ThemeProviderWrapper>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProviderWrapper>
  );
}

export default App;