import React from "react";
import dayjs from "dayjs";

const DataRange1 = () => {
  const day = dayjs();

  //기본사용법은 한번에 한개의 state만 관리
  // const [startDate,setStartDate]=React.useState(...);
  // const [endDate,setEndDate]=React.useState(...);

  //state값 두개를 함께 묶어서 관리할 경우 json형식 사용
  const [myDate, setMyDate] = React.useState({
    startData: day.format("YYYY-MM-DD"),
    endDate: day.format("YYYY-MM-DD"),
  });

  return (
    <div>
      <h2>DateRange1</h2>
      <p>
        {myDate.startData}~{myDate.endDate}
      </p>
      <p>
        <button
          type="button"
          onClick={(e) => {
            console.log("된다!");
            setMyDate({
              ...myDate,
              startDate: day.add(-7, "d").format("YYYY-MM-DD"),
            });
          }}
        >
          7일
        </button>
      </p>
      <p>
        <button
          type="button"
          onClick={(e) => {
            setMyDate({
              ...myDate,
              startDate: day.add(-15, "d").format("YYYY-MM-DD"),
            });
          }}
        >
          15일
        </button>
      </p>
      <p>
        <button
          type="button"
          onClick={(e) => {
            setMyDate({
              ...myDate,
              startDate: day.add(-1, "M").format("YYYY-MM-DD"),
            });
          }}
        >
          1개월
        </button>
      </p>
      <p>
        <button
          type="button"
          onClick={(e) => {
            setMyDate({
              ...myDate,
              startDate: day.add(-3, "M").format("YYYY-MM-DD"),
            });
          }}
        >
          3개월
        </button>
      </p>
      <p>
        <button
          type="button"
          onClick={(e) => {
            setMyDate({
              ...myDate,
              startDate: day.add(-6, "M").format("YYYY-MM-DD"),
            });
          }}
        >
          6개월
        </button>
      </p>
    </div>
  );
};
export default DataRange1;
