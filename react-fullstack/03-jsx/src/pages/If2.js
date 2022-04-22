import React from "react";

//jsx 조건분기(2)-조건식과 &&연산자 사용

const If2 = () => {
  const isLogin = true;

  return ( <
      div >
      <
      h2 > if2 < /h2> {isLogin === true && <p> 로그인 되셨습니다. </p >
    } {
      " "
    } <
    /div>
);
};

export default If2;