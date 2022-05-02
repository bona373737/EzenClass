import React from "react";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";

const GlobalStyles = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
}
a{
    text-decoration: none;
    color:black;
}
ul{
    list-style: none;
}
button{
    cursor: pointer;
}


:root{
    --color-gray-light: #f1f1f1;
    --color-gray-dark:#909090;
    
    --font-size-large: 50px;
    --font-size-middle: 30px;
    --font-size-small: 25px;
}

`;

export default GlobalStyles;
