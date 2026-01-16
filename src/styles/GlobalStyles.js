import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.color};
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  a {
    color: ${props => props.theme.color};
  }
`;