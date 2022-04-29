import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  height: 100px;
  background-color: #f1f1f1;
  text-align: center;

  span {
    line-height: 100px;
  }

  a {
    color: black;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <span>
        Powered by
        <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">
          w3.css
        </a>
      </span>
    </FooterContainer>
  );
};
export default Footer;
