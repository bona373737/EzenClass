import React from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  //URL의 querystring 추출하기
  const location = useLocation();
  const { search } = location;

  //추출한 querystring에서 detail변수의 값을 가져오기
  const query = new URLSearchParams(search);
  console.log(query.get("detail"));

  //detail변수의 값이 true인 경우에 특정 태그 보여주기
  const showDetail = query.get("detail") === "true";

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터기초를 실습해 보는 예제 프로젝트입니다.</p>
      {showDetail && <p>detail값을 true로 설정하셨군요!</p>}
    </div>
  );
};

export default About;
