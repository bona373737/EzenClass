import React from "react";
import Data from "./Data";
import { useParams } from "react-router-dom";

const Myschool = () => {
  const params = useParams();
  console.debug(params);
  console.debug(typeof params.search);
  const { search } = params;
  //   const schoolData = { Data }[search];
  //   console.log({ Data });
  const [...rest] = Data[search];
  const school = { ...rest };
  console.log(school);

  let colname;
  if (search === "department") {
    colname = ["학과번호", "학과이름", "위치"];
  } else if (search === "professor") {
    colname = [
      "교수번호",
      "교수이름",
      "아이디",
      "직급",
      "급여",
      "입사일",
      "보직수당",
      "소속학과번호",
    ];
  } else {
    colname = [
      "학생번호",
      "학생이름",
      "학년",
      "주민번호",
      "생년월일",
      "연락처",
      "키",
      "몸무게",
      "소속학과번호",
      "담당교수번호",
    ];
  }

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            {colname.map((item, index) => {
              return <td key={index}>{item}</td>;
            })}
          </tr>
        </thead>
        <tr></tr>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default Myschool;
