import { createGlobalStyle } from 'styled-components';

const Component = createGlobalStyle`
  *, #root {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html, body, #root {
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex: 1;
  }
  a {
    &.active {
      text-decoration: none;
      color: inherit;
      pointer-events: none;
    }
  }
  div {
    display: flex;
  }
  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
      outline: none;
  }
`;

export default Component;
