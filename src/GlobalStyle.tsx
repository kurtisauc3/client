import { createGlobalStyle } from 'styled-components';

const Component = createGlobalStyle`
  *, #root {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    background: none;
  }
  div {
    border: 1px solid black;
    padding: 5px;
    margin: 5px;
    background-color: rgba(0,0,0,0.05);
  }
`;

export default Component;
