import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    font-family: 'Courier New', Courier, monospace;
  }
  body{
    margin: 0;
    padding: 0;
    position: relative;
  }
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
    color: black;
  }
  button{
    border: none;
    background-color:#fff;
    cursor: pointer;
    &:hover{
      border: none;
    }
  }

  Link{
    cursor: pointer;
  }
`;

export default GlobalStyles;