import React from "react";
import Main from "../components/Main";
import Side from "../components/Side";
import styled, { css } from "styled-components";

const ContentContainer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
`;

const Content = () => {
  return (
    <ContentContainer>
      <Side />
      <Main />
    </ContentContainer>
  );
};
export default Content;
