import React from "react";
import styled from "styled-components";
import footerImg from "../assets/img/footerImg.jpg";

const FooterContainer = styled.div`
  width: 100%;

  .footer-img {
    margin: auto;
    box-sizing: border-box;
    img {
      width: 90%;
      max-width: 2100px;
      display: block;
      margin: 10px auto;
    }
  }

  .footer {
    height: 150px;
    background-color: black;
    color: white;
    line-height: 150px;
    text-align: center;
    font-size: var(--font-size-middle);

    a {
      color: white;
      text-decoration: underline;
      &:hover {
        color: green;
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-img">
        <img src={footerImg} alt="footerImg" />
      </div>
      <div className="footer">
        Powered by &nbsp;
        <a href="https://www.w3schools.com/w3css/default.asp" target="_balnk">
          w3.css
        </a>
      </div>
    </FooterContainer>
  );
};
export default Footer;
