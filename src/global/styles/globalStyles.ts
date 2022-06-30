import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, #root{
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    overflow: hidden;
  }
`;

export default GlobalStyle;
