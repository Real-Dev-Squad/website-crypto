import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root{
  ${({ theme }) => {
    let s = ``;
    for (var prop in theme) {
      if (prop in theme) {
        s += `--${prop}: ${theme[prop]};`;
      }
    }
    return s;
  }}
  }
  body{
    transition: all 0.50s linear;
  }
  `;

export default GlobalStyles;
