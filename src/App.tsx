import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './globalStyles';
import { theme } from './styles';

const Title = styled.h1`
  background-color: skyblue;
  color: #fff;
  padding: 10px 20px;
  text-align: center;
`;

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Title>React Typescript Todo App</Title>
      <h3>ENV: {process.env.NODE_ENV}</h3>
      <h3>NAME: {process.env.name}</h3>
    </ThemeProvider>
  );
};
