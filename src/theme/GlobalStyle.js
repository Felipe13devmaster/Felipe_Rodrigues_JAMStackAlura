import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    margin: 0;
    padding: 0;
  }

  html, body {
    display: flex;
    min-height: 100vh;
    width: 100%;
    font-family: 'Fira Sans Condensed', sans-serif; 
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
