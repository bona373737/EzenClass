import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>현재 카운터 값은 {state.value}입니다.</p>
      <button
        onClick={() => {
          dispatch({ type: "INREMENT" });
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        -1
      </button>
    </div>
  );

  //   const [value, setValue] = React.useState(0);
  //   return (
  //     <div>
  //       <p>현재카운터 값은 {value}입니다.</p>
  //       <button
  //         onClick={() => {
  //           setValue(value + 1);
  //         }}
  //       >
  //         +1
  //       </button>
  //       <button
  //         onClick={() => {
  //           setValue(value - 1);
  //         }}
  //       >
  //         -1
  //       </button>
  //     </div>
  //   );
};
export default Counter;
