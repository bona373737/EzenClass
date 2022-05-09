import React from "react";
import DefaultProps from "./part3,4/DefaultProps";
import Welcom from "./part3,4/Welcom";
import InputEvent from "./part3,4/InputEvent";
import ValidationSample from "./part5,6,8/ValidationSample";

function App() {
  return (
    <div>
      <DefaultProps userName={123}>{45678}</DefaultProps>
      <Welcom />
      <InputEvent />
      <h1>useRef사용하지 않고 state로 기능구현</h1>
      <ValidationSample />
    </div>
  );
}

export default App;
