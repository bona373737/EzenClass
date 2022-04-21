import React from "react";
import { useLocation } from "react-router-dom";

const DepartmentGet = () => {
  console.clear();

  //요청 데이터 확인하기
  const location = useLocation();
  console.group("useLocation()의 리턴값 확인하기");
  console.debug(location);
  console.groupEnd();

  //QueryString을 객체 형태로 변환
  const { search } = location;
  const query = new URLSearchParams(search);
  console.group("QueryString 확인");
  console.debug(query);
  console.groupEnd();

  //추출된 변수값과 데이터 타입 확인
  console.group("파라미터 처리결과 확인");
  console.debug(
    "요청된 학과번호 값=%s (%s)",
    query.get("id"),
    typeof query.get("id")
  );
  console.debug(
    "요청된 메세지 내용=%s (%s)",
    query.get("msg"),
    typeof query.get("msg")
  );
};
