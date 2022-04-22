import React from "react";
import { useParams } from "react-router-dom";

const Weather = () => {
  console.clear();

  const param = useParams();
  console.log(param);
  console.debug(param);

  const weather = {
    mon: ["맑음", "맑음"],
    tue: ["비", "맑음"],
    wed: ["맑음", "흐림"],
    thu: ["맑음", "흐림"],
    fri: ["흐림", "흐림"],
    sat: ["비", "맑음"],
    sun: ["맑음", "맑음"],
  };

  const date = param.date;

  return (
    <div>
      <h2>오전</h2>
      <h3>{weather[date][0]}</h3>
      <h2>오후</h2>
      <h3>{weather[date][1]}</h3>
    </div>
  );
};

export default Weather;
