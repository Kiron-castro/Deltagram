import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
  }
  body{
    margin: 0;
  }
  
  html {
    background-color: black;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color:white;
  
  }

`;