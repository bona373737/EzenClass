/**
 * @filename GlobalStyles.js
 * @description 전역으로 적용할 style정의, 기본css reset
 */

import React from "react";
import { createGlobalStyle } from "styled-components";
// css reset
import "../src/assets/css/reset.css";

//
const GlobalStyles = createGlobalStyle`
    *{
    }

`;
export default GlobalStyles;
