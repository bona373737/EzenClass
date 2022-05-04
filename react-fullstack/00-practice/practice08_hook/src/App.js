import React from "react";

function App() {
  //기본값 0으로 설정하여 useState 정의
  const [rownum, setRownum] = React.useState(0);
  const rownumChange = (e) => {
    setRownum(e.currentTarget.value);
  };

  //innerHTML으로 별 출력할 위치
  const starPrint = React.useRef();

  //useState로 값이 변경되어 재랜더링 된 후의 실행코드
  React.useEffect(() => {
    for (let i = 0; i < rownum; i++) {
      let star = "";
      for (let j = 0; j < i + 1; j++) {
        star += "*";
      }
      // let starDiv = React.createElement("div", null, star)????
      let starItem = document.createElement("div");
      starItem.innerHTML = star;
      starPrint.current.appendChild(starItem);
    }
    //새로운 값이 입력되어 재랜더링되기 직전에 실행(unmount되는 시점)
    return () => {
      starPrint.current.innerHTML = "";
    };
  }, [rownum]);

  return (
    <div>
      <h1>Exam07</h1>
      <p>useState, usetEffect, useRef를 사용한 별찍기 구현</p>
      <hr />
      <label htmlFor="rownum">rownum : </label>
      <input type="text" id="rownum" value={rownum} onChange={rownumChange} />
      <hr />
      <div ref={starPrint}></div>
    </div>
  );
}

export default App;
