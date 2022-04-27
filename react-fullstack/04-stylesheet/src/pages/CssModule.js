import React from "react";

import myStyles from "../assets/css/mystyle.module.css";

const CssModule = () => {
  return (
    <div>
      <h2> CssModule </h2>

      <h3>변수에 저장된 css클래스</h3>
      <div className={myStyles.myCssBox} />

      <h3>독립클래스</h3>
      <div className="myBorderBox"></div>

      <h3>다중클래스적용1 _ 역따옴표 사용</h3>
      <div className={`${myStyles["my-size"]} ${myStyles["my-bg"]}`}></div>

      <h3>다중클래스 적용2</h3>
      <div className={[myStyles["my-size"], myStyles["my-bg"]].join(" ")} />
    </div>
  );
};
export default CssModule;
