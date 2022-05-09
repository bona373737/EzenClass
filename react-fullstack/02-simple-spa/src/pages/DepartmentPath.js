//

import React from "react";
import { useParams } from "react-router-dom";

const DepartmentPath = () => {
  console.clear();

  //요청 데이터 확인하기
  const params = useParams();
  console.group("useParams()의 값 확인하기");
  console.debug(params);
  console.groupEnd();

  //필요한 변수값과 타입확인
  console.debug("요청된 학과번호 값=%s (%s)", params.id, typeof params.id);
  console.debug("요청된 메시지 내용=%s (%s)", params.msg, typeof params.msg);

  //테스트 데이터(실전에서는 해당데이터를 백엔드로부터 받아와야 한다.)
  const departmentList = {
    item: [
      {
        id: 201,
        dname: "전자공학과",
        loc: "3호관",
      },
      {
        id: 202,
        dname: "기계공학학과",
        loc: "4호관",
      },
    ],
  };

  //전달된 파라미터  id를  정수로 변환
  const id = parseInt(params.deptno);

  //조회결과가 저장될 객체
  let departmentItem = null;

  //테스트데이터에서 deptno값이 일치하는 정보를 조회
  departmentList.item.some((item, index) => {
    if (item.id === id) {
      departmentItem = item;
      return true;
    }
    return false;
  });

  //조회결과가 없는 경우
  if (!departmentItem) {
    return <h2> 존재하지 않는 데이터에 대한 요청입니다. </h2>;
  }

  //정상화면 출력
  return (
    <div>
      <h2> {departmentItem.dname} </h2>{" "}
      <ul>
        <li> 학과번호: {DataTransferItem.id} </li>{" "}
        <li> 학과위치: {DataTransferItem.loc} </li>{" "}
      </ul>
    </div>
  );
};

export default DepartmentPath;
