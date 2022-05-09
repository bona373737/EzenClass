import React from "react";
import "./ValidationSample.css";

const ValidationSample = () => {
  const [password, setPassword] = React.useState("");
  const [clicked, setClicked] = React.useState(false);
  const [validated, setValidated] = React.useState(false);
  const input = React.useRef();

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleButtonClick = () => {
    setClicked(true);
    setValidated(password === "0000");
    input.current.focus();
  };

  return (
    <div>
      <input
        ref={input}
        type="password"
        value={password}
        onChange={handleChange}
        //삼항연산자 이중으로 사용
        className={clicked ? (validated ? "success" : "failure") : ""}
      />
      <button onClick={handleButtonClick}>검증하기</button>
    </div>
  );
};
export default ValidationSample;
