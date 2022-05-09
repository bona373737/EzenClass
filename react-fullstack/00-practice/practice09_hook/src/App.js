import React, { useReducer, useRef, useCallback, useMemo } from "react";

/**
 * 사칙연산을 수행하기 위한 reducer함수
 * @param {int} state - 현재 상태값
 * @param {object} action - 액션 {x: 첫번째숫자, y: 두번째숫자, exec: 연산자 }
 * @returns 새로운 상태값
 */

function setCalcResult(state, action) {
  let result = 0;

  switch (action.operator) {
    case "+":
      result = action.num1 + action.num2;
      break;
    case "-":
      result = action.num1 - action.num2;
      break;
    case "*":
      result = action.num1 * action.num2;
      break;
    case "/":
      result = action.num1 / action.num2;
      break;
    default:
      result = 0;
  }
  return result;
}

/**
 * reducer함수의 state,action파라미터이름을 변경해보면서
 * 변수가 전달되어지는 흐름을 이해해 보았다.
 */
// function setCalcResult(result, { num1, num2, operator }) {
//   console.log("변경되기전의 result값 :" + result);
//   switch (operator) {
//     case "+":
//       return num1 + num2;
//     case "-":
//       return num1 - num2;
//     case "*":
//       return num1 * num2;
//     case "/":
//       return num1 / num2;
//     default:
//       return 0;
//   }
// }

function App() {
  const num1 = useRef();
  const num2 = useRef();
  const operator = useRef();

  const [result, setCalc] = useReducer(setCalcResult, 0);

  const calcBtnClick = useCallback((e) => {
    // button에 type속성 누락으로 summite되는 현상을 방지함
    // e.preventDefault();

    setCalc({
      num1: Number(num1.current.value),
      num2: Number(num2.current.value),
      operator: operator.current[operator.current.selectedIndex].value,
    });
  }, []);

  /**
   * useMemo를 사용하지 않고 useEffect로 구현을 해았다.
   * color변수를 전역변수로 정의해야 정상적으로 작동한다.
   * 오류내용:React.useEffect will be lost after each render
   */
  // let color = null;
  // React.useEffect(() => {
  //   console.log("useEffect실행됨!");
  //   color = result % 2 === 0 ? "red" : "blue";
  // }, [result]);

  const color = useMemo(() => {
    console.log(result);
    return result % 2 === 0 ? "red" : "blue";
  }, [result]);

  return (
    <div>
      <h1>Exam07</h1>
      <p>useReducer, useMemo, useCallback을 활용한 사칙연산</p>
      <hr />
      <form>
        <input type="text" ref={num1} />
        <select ref={operator}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input type="text" ref={num2} />
        <button type="button" onClick={calcBtnClick}>
          결과확인
        </button>
      </form>
      <hr />
      <h1 style={{ color: color }}>결과값 : {result}</h1>
    </div>
  );
}

export default App;
