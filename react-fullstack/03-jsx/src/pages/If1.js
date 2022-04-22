import React from "react";

const If1 = () => {
  const btnLogin = (isLogin) => {
    if (isLogin === true) {
      return <button type="button">Logout </button>;
    } else {
      return <button type="button">Login</button>;
    }
  };

  //조건에 따라 다른 결과를 표시하는 첫번째 방법은
  //호출하는 함수안에서 판별
  return (
    <div>
      <h2>if1</h2>
      {btnLogin(true)}
    </div>
  );
};

export default If1;
