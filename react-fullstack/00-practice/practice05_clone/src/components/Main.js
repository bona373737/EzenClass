import React from "react";
import styled, { css } from "styled-components";

const MainContainer = styled.div`
  border-left: 1px solid #d5d5d5;
  border-right: 1px solid #d5d5d5;
  padding: 30px 10px;

  h1 {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  h3 {
    font-weight: bold;
    margin-bottom: 20px;
  }
  p {
    margin: 10px 0;
  }

  .fake-img {
    background-color: #aaa;
    width: 800px;
    height: 160px;
    margin-top: 10px;
    padding: 15px;
  }
`;

const Main = () => {
  return (
    <MainContainer>
      <article>
        <h1>TITLE HEADING</h1>
        <h3>Title description, Dec7, 2017</h3>
        <div className="fake-img">image</div>
        <p>Some text...</p>
        <p>
          Sunt in culpa qui officia deserunt mollit anim id est laborum
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco.
        </p>
      </article>
      <article>
        <h1>TITLE HEADING</h1>
        <h3>Title description, Dec7, 2017</h3>
        <div className="fake-img">image</div>
        <p>Some text...</p>
        <p>
          Sunt in culpa qui officia deserunt mollit anim id est laborum
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco.
        </p>
      </article>
    </MainContainer>
  );
};
export default Main;
