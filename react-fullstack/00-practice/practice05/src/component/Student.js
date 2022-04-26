import React from "react";
import myschool from "../myschool";
import StudentSub from "../component/StudentSub";
import tableStyle from "../assets/css/tableStyle.module.css";

const Student = () => {
  const { student } = myschool;
  return (
    <div>
      <table className={tableStyle.table}>
        <thead>
          <tr className={tableStyle.theadStyle}>
            <th>학생번호</th>
            <th>학생이름</th>
            <th>학년</th>
            <th>아이디</th>
            <th>주민번호</th>
            <th>생년월일</th>
            <th>연락처</th>
            <th>키</th>
            <th>몸무게</th>
            <th>소속학과번호</th>
            <th>담당교수번호</th>
          </tr>
        </thead>
        <tbody>
          {student.map((v, i) => {
            return (
              <StudentSub
                key={i}
                id={v.id}
                name={v.name}
                grade={v.grade}
                userid={v.userid}
                idnum={v.idnum.substring(0, 6) + "-*******"}
                birthdate={v.birthdate.substring(0, 10)}
                tel={v.tel}
                height={v.height}
                weight={v.weight}
                deptno={v.deptno}
                profno={v.profno}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Student;
