import React from "react";
import { useParams } from "react-router-dom";

import Meta from "../components/Meta";
import GradeItem from "../components/GradeItem";
import GradeData from "../GradeData";

const GradeTable = () => {
  const params = useParams();
  // console.log(params);
  let { grade } = params;
  grade += "학년";
  // console.log(grade);
  // console.log(GradeData[grade]);

  return (
    <div>
      <Meta title={grade + ":::React연습문제"} />
      <h2>{grade}</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>이름</th>
            <th>성별</th>
            <th>국어</th>
            <th>영어</th>
            <th>수학</th>
            <th>과학</th>
            <th>총점</th>
            <th>평균</th>
          </tr>
        </thead>
        <tbody>
          {GradeData[grade].map((item, index) => {
            return (
              <GradeItem
                key={index}
                name={item.이름}
                sex={item.성별}
                kor={item.국어}
                eng={item.영어}
                math={item.수학}
                scinc={item.과학}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GradeTable;
