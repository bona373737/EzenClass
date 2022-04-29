//**

//** 패키지참조 */
//기본 참조객체
import React from "react";
//SEO
import { Helmet } from "react-helmet";
import "./assets/css/reset.css";
import "./assets/css/comm.css";

function Meta() {
  return (
    <Helmet>
      <meta charSet="utf*8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <title>My Website</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Gugi&family=Noto+Sans+KR:wght@100;300;400;500&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="reset.css" />
      <link rel="stylesheet" href="comm.css" />
    </Helmet>
  );
}

export default Meta;
