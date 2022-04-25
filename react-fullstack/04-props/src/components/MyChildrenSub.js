import React from "react";
import PropTypes from "prop-types";

const MyChildrenSub = ({ width, height, children }) => {
  const myStyle = {
    width: width + "px",
    height: height + "px",
    border: "5px solid #d5d5d5",
    padding: "20px",
    margin: "10px",
    backgroundColor: "#eeeeee",
  };

  return (
    <div>
      <h3> MyChildrenSub </h3> <div style={myStyle}> {children} </div>{" "}
    </div>
  );
};

MyChildrenSub.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  children: PropTypes.string,
};

MyChildrenSub.defaultProps = {
  width: 300,
  height: 100,
  children: "내용이 없습니다.",
};

export default MyChildrenSub;
