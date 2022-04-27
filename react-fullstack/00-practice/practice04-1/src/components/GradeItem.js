import React from "react";
import PropTypes from "prop-types";

const GradeItem = ({ name, sex, kor, eng, math, scinc }) => {
  const sum = parseInt(kor + eng + math + scinc);
  const avg = parseInt(sum / 4);

  return (
    <tr align="center">
      <td>{name}</td>
      <td>{sex}</td>
      <td>{kor}</td>
      <td>{eng}</td>
      <td>{math}</td>
      <td>{scinc}</td>
      <td>{sum}</td>
      <td>{avg}</td>
    </tr>
  );
};

GradeItem.propTypes = {
  name: PropTypes.string,
  sex: PropTypes.string,
  kor: PropTypes.number,
  eng: PropTypes.number,
  math: PropTypes.number,
  scinc: PropTypes.number,
};

GradeItem.defaultProps = {
  kor: 0,
  eng: 0,
  math: 0,
  scinc: 0,
};
export default GradeItem;
