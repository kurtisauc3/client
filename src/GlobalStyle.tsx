import { createGlobalStyle } from 'styled-components';

const Component = createGlobalStyle`
  *, #root {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  div {
    border: 1px solid black;
    padding: 5px;
    margin: 5px;
    background-color: rgba(0,0,0,0.05);
  }
  a {
    padding: 5px;
    margin: 0 5px;
    &.active {
      border: 1px solid black;
      text-decoration: none;
      color: inherit;
      pointer-events: none;
    }
  }
`;

export default Component;
