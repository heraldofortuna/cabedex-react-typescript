import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Press Start 2P', cursive;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: gray;
  }

  .app {
    background-color: white;
    max-width: 500px;
    min-height: 100vh;
    border-left: 4px solid black;
    border-right: 4px solid black;
    padding: 16px;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
