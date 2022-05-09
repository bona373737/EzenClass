/**
 * @filename GlobalStyles.js
 * @description 전역으로 적용할 style정의, 기본css reset
 */

/**패키지설치 */
import React from "react";
import { createGlobalStyle } from "styled-components";
// css reset
import "../src/assets/css/reset.css";

//
const GlobalStyles = createGlobalStyle`
    *{
    }

    :root{
        --font-size-large : 50px;
        --font-size-middle: 30px;
        --font-size-small: 25px;
        --color-gray : #f1f1f1;
        --color-gray-dark:#909090;
    }

`;
export default GlobalStyles;
