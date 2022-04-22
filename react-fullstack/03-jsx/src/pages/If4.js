import React from "react";

//jsx 조건분기(4) : 삼항 연산자를 사용한 조건 분기

const If4 = () => {
  const isLogin = true;

  return ( <
    div >
    <
    h2 > if4 < /h2> {
      isLogin === true ? ( <
        button type = "button" > 로그아웃 < /button>
      ) : ( <
        button type = "button" > 로그인 < /button>
      )
    } <
    /div>
  );
};

export default If4;