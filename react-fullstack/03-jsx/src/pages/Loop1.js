import React from "react";

const Loop1 = () => {
  const createListItems = (count) => {
    let li = [];

    //반복적으로 처리되는 컴포넌트 요소는 각항목을 식별하기 위해
    //고유한 값을 갖는 KEY 속성을 포함해야한다.(React권고사항)
    for (let i = 0; i < count; i++) {
      li.push(<li>Item {i}</li>);
    }
    return li;
  };

  return (
    <div>
      <h2>Loop1</h2>
      <ul>{createListItems(5)}</ul>
    </div>
  );
};

export default Loop1;
