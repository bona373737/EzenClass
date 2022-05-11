import { useReducer } from "react";

function reducer(state, action) {
  //state를 복사하고 그중 name값만 덮어쓰기
  return {
    ...state,
    [action.name]: action.value,
  };
}

export default function useInputs(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = (e) => {
    //event객체의 target속성값 전체를 action으로 전달
    dispatch(e.target);
  };
  return [state, onChange];
}
