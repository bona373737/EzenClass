import React from "react";
import dayjs from "dayjs";

const MyMemo = () => {
  const day = dayjs();

  const getLength = (w) => {
    console.log(
      "getLenght(%s)호출됨!_호출시간:%s",
      w,
      day.format("YY/MM/DD hh:mm:ss.ms")
    );
    return w.length;
  };

  const words = ["City", "Eye", "Apple", "Orange"];
  const [myCount, setMyCount] = React.useState(0);
  const [myIndex, setMyIndex] = React.useState(0);
  const [myWord, setMyWord] = React.useState(words[myIndex]);

  const myLen = React.useMemo(() => {
    return getLength(myWord);
  }, [myWord]);

  console.log(myLen);

  return (
    <div>
      <h2>MyMemo</h2>
      <p>
        {myIndex}번째 단어 "{myWord}"의 길이: {myLen}
      </p>
      <button
        onClick={() => {
          const nextIndex = (myIndex + 1) % words.length;
          setMyIndex(nextIndex);
          setMyCount(myCount + 1);
          setMyWord(words[nextIndex]);
        }}
      >
        버튼클릭 (클릭수: {myCount})
      </button>
    </div>
  );
};
export default MyMemo;
