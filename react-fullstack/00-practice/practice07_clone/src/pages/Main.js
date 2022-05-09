import React from "react";

import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";

import data from "../assets/data";

const Main = () => {
  //비구조 문법사용하는 것이 좀더 효율적이다
  // const {project,about} = data;
  //props에 project와 abuout직접 명시
  //아래처럼 코드작성시 데이터구조의 깊이가 깊은경우 data.project.student... 이런식으로 원하는 데이터까지 타고 들어가야한다.

  return (
    <div>
      <Projects items={data.project} />
      <About items={data.about} />
      <Contact />
    </div>
  );
};
export default Main;
