import React from "react";
import PropTypes from "prop-types";

import tableStyle from "../assets/css/tableStyle.module.css";

const DepartmentSub = ({ id, dname, loc }) => {
  return (
    <tr>
      <td className={tableStyle.tdStyle}>{id}</td>
      <td className={tableStyle.tdStyle}>{dname}</td>
      <td className={tableStyle.tdStyle}>{loc}</td>
    </tr>
  );
};

DepartmentSub.propTypes = {
  id: PropTypes.number.isRequired,
  dname: PropTypes.string.isRequired,
  loc: PropTypes.string.isRequired,
};

// DepartmentSub.defaultProps = {};

export default DepartmentSub;
