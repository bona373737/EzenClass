import React from "react";
import styled, { css } from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  height: 100px;
  background-color: #ddd;
  text-align: center;
  line-height: 100px;
  font-size: 30px;
  font-weight: bold;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <h2>Footer 영역</h2>
    </FooterContainer>
  );
};
export default Footer;
