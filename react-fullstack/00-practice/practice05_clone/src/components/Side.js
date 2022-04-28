import React from "react";
import styled, { css } from "styled-components";

const SideContainer = styled.div`
  width: 500px;
  background-color: #eee;
  border-left: 1px solid #d5d5d5;
  border-right: 1px solid #d5d5d5;
  padding: 30px 10px;

  h1 {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 20px;
    font-weight: bold;
    margin: 20px 0px;
  }

  .img-wrap {
    height: 300px;
    display: flex;
    flex-direction: column;
  }

  .fake-img {
    background-color: #aaa;
    width: 400px;
    height: 80px;
    margin-top: 10px;
    padding: 15px;
  }

  .big-img {
    height: 160px;
  }
`;

const Side = () => {
  return (
    <SideContainer>
      <h1>About Me</h1>
      <div>
        <h3>photo of me</h3>
        <div>
          <div className="fake-img big-img">image</div>
        </div>
        <p></p>
      </div>
      <div>
        <h3>More Text</h3>
        <p>Lorem ipsum dolor sit ame.</p>
        <div className="img-wrap">
          <div className="fake-img">image</div>
          <div className="fake-img">image</div>
          <div className="fake-img">image</div>
        </div>
      </div>
    </SideContainer>
  );
};
export default Side;
