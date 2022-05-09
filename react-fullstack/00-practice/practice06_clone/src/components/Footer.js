import React from "react";
import styled from "styled-components";
import GlobalStyles from "../GlobalStyles";

const FooterContainer = styled.div`
  width: 100%;
  height: 150px;
  background-color: var(--color-gray);
  text-align: center;

  span {
    line-height: 150px;
    font-size: var(--font-size-small);
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
          &nbsp;w3.css
        </a>
      </span>
    </FooterContainer>
  );
};
export default Footer;
