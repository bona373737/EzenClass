import React from "react";
import Counter from "./part5,6,8/Counter";
import IterationSample from "./part5,6,8/IterationSample";
import ScrollBox from "./part5,6,8/ScrollBox";
import Info from "./part5,6,8/Info";

function App() {
  const scrollBoxRef = React.useRef();

  return (
    <div>
      <ScrollBox ref={scrollBoxRef} />
      <button
        onClick={() => {
          //컴포넌트에 ref달고 내부의 속성값을 부모컴포넌트에서 사용할수 있다.
          const { scrollHeight, clientHeight } = scrollBoxRef.current;
          scrollBoxRef.current.scrollTop = scrollHeight + clientHeight;
        }}
      >
        맨 밑으로
      </button>
      <IterationSample />
      <Counter />
      <Info />
    </div>
  );
}

export default App;
