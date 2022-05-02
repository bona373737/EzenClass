import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Meta = (props) => {
  return (
    <HelmetProvider>
      <Helmet></Helmet>
    </HelmetProvider>
  );
};
Meta.defaultProps = {
  title: "React Example",
  description: "React.js예제 입니다.",
  keywords: "React",
  author: "호쌤",
  //image: '기본이미지변수 적용',
  url: window.location.href,
};

export default Meta;
