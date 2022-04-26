import React from "react";
import myschool from "../myschool";
import DepartmentSub from "./DepartmentSub";

import tableStyle from "../assets/css/tableStyle.module.css";

const Department = () => {
  const { department } = myschool;

  return (
    <div>
      <table className={tableStyle.table}>
        <thead>
          <tr className={tableStyle.theadStyle}>
            <th> 학과번호 </th>
            <th> 학과이름 </th>
            <th> 위치 </th>
          </tr>
        </thead>
        <tbody>
          {department.map((v, i) => {
            return (
              <DepartmentSub key={i} id={v.id} dname={v.dname} loc={v.loc} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Department;
