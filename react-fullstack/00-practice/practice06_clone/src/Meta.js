/**
 * @filename Meta.js
 * @description <head>태그 내의 SEO 처리 및 기본 참조 리소스 명시
 */

/**패키지설치 */
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Meta = (props) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="uft-8" />
        <title>{props.title}</title>
        <meta name="keywords" content={props.kewords} />
      </Helmet>
    </HelmetProvider>
  );
};

Meta.defaultProps = {
  title: "Gurmet au Catering",
  keywords: "React",
};

export default Meta;
