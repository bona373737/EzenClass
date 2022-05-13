import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    font-family: 'Courier New', Courier, monospace;
  }
  body{
    margin: 0;
    padding: 0;
  }
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  button{
    border: none;
    background-color: #fff;
    &:hover{
      border: none;
    }
  }
`;

export default GlobalStyles;