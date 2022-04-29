import React from "react";
import styled from "styled-components";
import About from "../components/About";
import Menu from "../components/Menu";
import Contact from "../components/Contact";

const MainContainer = styled.div``;

const Main = () => {
  return (
    <MainContainer>
      <About />
      <Menu />
      <Contact />
    </MainContainer>
  );
};
export default Main;
