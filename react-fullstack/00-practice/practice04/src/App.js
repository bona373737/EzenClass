import React from "react";
import GradeItem from "./components/GradeItem";
import GradeData from "./GradeData";

function App() {
  return (
    <div>
      <h1>성적표</h1>
      <hr />
      <table border="1">
        <thead>
          <tr>
            <td>이름</td>
            <td>학년</td>
            <td>성별</td>
            <td>국어</td>
            <td>영어</td>
            <td>수학</td>
            <td>과학</td>
            <td>총점</td>
            <td>평균</td>
          </tr>
        </thead>
        <tbody>
          {GradeData.map((item, index) => {
            return (
              <GradeItem
                key={index}
                studentName={item.studentName}
                grade={item.grade}
                gender={item.gender}
                kor={item.kor}
                eng={item.eng}
                math={item.math}
                science={item.science}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;
