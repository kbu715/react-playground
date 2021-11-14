import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    font-family: ${({ theme }) => theme.fontFamilies.main};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }
  html {
    font-family: ${({ theme }) => theme.fontFamilies.main};
  }
  body {
    font-family: ${({ theme }) => theme.fontFamilies.main};
  }
  h1 {
    margin: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button,
  input,
  select,
  textarea {
    background-color: transparent;
    border: 0;
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
  a,
  button {
    cursor: pointer;
  }
  button {
    padding: 0;
  }
  ul,
  ol {
    padding-left: 0;
    list-style: none;
  }
  address {
    font-style: normal;
  }
`;
