import React from "react";
import MyPropsSub from "../components/MyPropsSub";
import Meta from "../components/Meta";

const MyProps = () => {
  console.clear();
  return (
    <div>
      {/* Route처리를 적용받는 페이지에서 이컴포넌트를 중복 사용시 App.js에서의 설정을 덮어쓰게 된다 */}{" "}
      <h2> MyProps </h2>
      {/* 컴포넌트에 propts전달 하기_string값은 따옴표로 감싼다, 그 외의 형식은 {}으로 감싼다. */}{" "}
      <MyPropsSub />
      <MyPropsSub name="민호" age="19" />
      <MyPropsSub name="수영" age={21} />{" "}
    </div>
  );
};
export default MyProps;
