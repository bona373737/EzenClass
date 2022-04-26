import React from "react";
import PropTypes from "prop-types";
import tableStyle from "../assets/css/tableStyle.module.css";

const ProfessorSub = ({
  id,
  name,
  userid,
  position,
  sal,
  hiredate,
  comm,
  deptno,
}) => {
  return (
    <tr>
      <td className={tableStyle.tdStyle}>{id}</td>
      <td className={tableStyle.tdStyle}>{name}</td>
      <td className={tableStyle.tdStyle}>{userid}</td>
      <td className={tableStyle.tdStyle}>{position}</td>
      <td className={tableStyle.tdStyle}>{sal}</td>
      <td className={tableStyle.tdStyle}>{hiredate}</td>
      <td className={tableStyle.tdStyle}>{comm}</td>
      <td className={tableStyle.tdStyle}>{deptno}</td>
    </tr>
  );
};

ProfessorSub.prototype = {
  id: PropTypes.number,
  name: PropTypes.string,
  userid: PropTypes.string,
  position: PropTypes.string,
  sal: PropTypes.number,
  hiredate: PropTypes.string,
  comm: PropTypes.number,
  deptno: PropTypes.number,
};

// ProfessorSub.defaultProps={

// }

export default ProfessorSub;
