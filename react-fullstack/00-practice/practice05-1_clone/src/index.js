/**
 * @filenam : index.js
 * @description : 프로그램 시작점.
 *                전역 스타일(GrobalStyles)과
 *                전역 SEO(Meta)와
 *                라우팅 범위설정(BrowserRouter)을 하고
 *                시작(App)한다.
 * @author
 */

/** 패키지 참조 */
import React from "react";
import ReactDOM from "react-dom/client";
//전역 스타일 정의
import GlobalStyles from "./GlobalStyles";
//SEO 구현
import Meta from "./Meta";
//라우팅 범위 설정
import { BrowserRouter } from "react-router-dom";
//프로그램 시작
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Meta />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
