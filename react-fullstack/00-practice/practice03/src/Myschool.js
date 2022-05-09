import React from "react";
import Data from "./Data";
import { useParams } from "react-router-dom";

const Myschool = () => {
  const params = useParams();
  console.debug(params);
  console.debug(typeof params.search);
  const { search } = params;

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

  const [...schoolData] = Data[search];
  let list;
  for (let i = 0; i < schoolData.length; i++) {
    list = [];
    // list.push(<tr>);
    for (let j = 0; j < schoolData[0].length; j++) {
      list.push(<td key={j}>{schoolData[i][j]}</td>);
    }
    {
      /* list.push(</tr>);  */
    }

    return list;
  }

  return (
    <div>
      <table border="1">
        <thead></thead>
        {list}
        <tbody></tbody>
      </table>
    </div>
  );
};

export default Myschool;
