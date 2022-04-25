import React from "react";
import PropTypes from "prop-types";

// const {studentName, grade, gender, kor,eng,math,science} =props;
const GradeItem = ({ studentName, grade, gender, kor, eng, math, science }) => {
  kor = kor == "미응시" ? 0 : kor;
  eng = eng == "미응시" ? 0 : eng;
  math = math == "미응시" ? 0 : math;
  science = science == "미응시" ? 0 : science;

  const sum = kor + eng + math + science;
  const avg = parseInt(sum / 4);

  return (
    <tr>
      <td>{studentName}</td>
      <td>{grade}</td>
      <td>{gender}</td>
      <td>{kor}</td>
      <td>{eng}</td>
      <td>{math}</td>
      <td>{science}</td>
      <td>{sum}</td>
      <td>{avg}</td>
    </tr>
  );
};

GradeItem.propTypes = {
  studentName: PropTypes.string,
  grade: PropTypes.number,
  gender: PropTypes.string,
  kor: PropTypes.number,
  eng: PropTypes.number,
  math: PropTypes.number,
  science: PropTypes.number,
};

GradeItem.defaultProps={
    kor:0;
    eng:0;
    math:0;
    science:0;
}

export default GradeItem;
