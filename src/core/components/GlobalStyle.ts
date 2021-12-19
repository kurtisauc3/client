import { createGlobalStyle } from 'styled-components';
import BebasNeueEot from '../../assets/fonts/BebasNeue-Regular.eot';
import BebasNeueOtf from '../../assets/fonts/BebasNeue-Regular.otf';
import BebasNeueTtf from '../../assets/fonts/BebasNeue-Regular.ttf';
import BebasNeueWoff from '../../assets/fonts/BebasNeue-Regular.woff';
import BebasNeueWoff2 from '../../assets/fonts/BebasNeue-Regular.woff2';

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'BebasNeue';
      src: url(${BebasNeueEot}) format('eot'),
      url(${BebasNeueOtf}) format('otf'),
      url(${BebasNeueTtf}) format('ttf'),
      url(${BebasNeueWoff}) format('woff'),
      url(${BebasNeueWoff2}) format('woff2');
      font-weight: 300;
      font-style: normal;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'BebasNeue', -apple-system, BlinkMacSystemFont, sans-serif;
    color: #353839;
  }
  html, body, #root {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
`;

export default GlobalStyle;