import React from "react";

//jsx 조건분기(3) : 조건식과 ||연산자 사용

const If3 = () => {
    // falsy--> undefined, null, 0, false, ''
    const articleList = undefined;

    return ( <
      div >
      <
      h2 > if3 < /h2> {
        articleList || < p > 조회된 게시글이 없습니다. < /p>} <
          /div>
      );
    };

    export default If3;