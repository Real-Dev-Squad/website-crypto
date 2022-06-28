import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root{
  ${({ theme }) => {
    let style = ``;
    for (const variableName in theme) {
      if (variableName in theme) {
        style += `--${variableName}: ${theme[variableName]};`;
      }
    }
    return style;
  }}
  }
  body{
    transition: all 0.50s linear;
  }
  `;

export default GlobalStyles;
