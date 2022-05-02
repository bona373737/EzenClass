import React from "react";

import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";

import data from "../assets/data";

const Main = () => {
  return (
    <div>
      <Projects items={data.project} />
      <About items={data.about} />
      <Contact />
    </div>
  );
};
export default Main;
