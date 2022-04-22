import React from "react";

const Expr = () => {
  // 사용자 정의 변수
  const name = "리액트";
  const age = 19;
  const color = "#f00";
  const message = "리액트는 가장 주목받는 프론트엔드 프레임워크입니다.";

  //사용자 정의 합수
  const myEllipsis = (message, len) => {
    let str = message;
    if (str.length > len) {
      str = str.substring(0, len) + "...";
    }
    return str;
  };

  return (
    <div>
      <h2>
        Expr<small>(jsx 기본표현식)</small>
      </h2>

      {/* 기본변수 출력하기 - 간단한 사칙연산 가능 */}
      <h3>
        {name}님은 {age + 1}세 입니다.
      </h3>
      <p>
        <font color="#00f">{name}</font>님은&nbsp;
        <font color={color}>리액트 개발자</font>입니다.
        {/* html속성에 변수를 넣은때 따온표 사용 X */}
      </p>

      {/* 사용자정의함수 호출하기 */}
      <blockquote>{myEllipsis(message, 15)}</blockquote>
    </div>
  );
};

export default Expr;
