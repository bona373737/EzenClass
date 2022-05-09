import React from "react";
import PropTypes from "prop-types";
import tableStyle from "../assets/css/tableStyle.module.css";

const StudentSub = ({
  id,
  name,
  grade,
  userid,
  idnum,
  birthdate,
  tel,
  height,
  weight,
  deptno,
  profno,
}) => {
  return (
    <tr>
      <td className={tableStyle.tdStyle}>{id}</td>
      <td className={tableStyle.tdStyle}>{name}</td>
      <td className={tableStyle.tdStyle}>{grade}</td>
      <td className={tableStyle.tdStyle}>{userid}</td>
      <td className={tableStyle.tdStyle}>{idnum}</td>
      <td className={tableStyle.tdStyle}>{birthdate}</td>
      <td className={tableStyle.tdStyle}>{tel}</td>
      <td className={tableStyle.tdStyle}>{height}</td>
      <td className={tableStyle.tdStyle}>{weight}</td>
      <td className={tableStyle.tdStyle}>{deptno}</td>
      <td className={tableStyle.tdStyle}>{profno}</td>
    </tr>
  );
};
StudentSub.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  grade: PropTypes.number,
  userid: PropTypes.string,
  idnum: PropTypes.string,
  birthdate: PropTypes.string,
  tel: PropTypes.string,
  height: PropTypes.number,
  weight: PropTypes.number,
  deptno: PropTypes.number,
  profno: PropTypes.number,
};

// StudentSub.defaultProps={}

export default StudentSub;
