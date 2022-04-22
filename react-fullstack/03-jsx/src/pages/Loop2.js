import React from "react";

const Loop2 = () => {
  const myArray = ["hello", "world"];

  const myArrayItem = myArray.map((v, i) => {
    return <li key={i}> {v}</li>;
  });

  return (
    <div>
      <h2>Loop2</h2>
      <ul>{myArrayItem}</ul>
    </div>
  );
};

export default Loop2;
