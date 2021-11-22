import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './globalStyles';
import { theme } from './styles';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
};
