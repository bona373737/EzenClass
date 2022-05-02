import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import headerImg from "../assets/img/headerImg.jpg";

const HeaderContainer = styled.div`
  width: 100%;

  .navbar {
    width: 100%;
    height: 80px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: var(--font-size-middle);
    letter-spacing: 5px;
    box-shadow: 0 1px 10px var(--color-gray-dark);
    position: fixed;
    top: 0px;
    z-index: 20;

    .logo {
      margin: 0 20px;
      padding: 10px;
      span {
        font-weight: bold;
      }
      &:hover {
        background-color: var(--color-gray-dark);
      }
    }

    .links {
      display: flex;
      justify-content: space-between;

      .navlink {
        display: block;
        padding: 10px;
        margin: 0 20px;
        &:hover {
          background-color: var(--color-gray-dark);
        }
      }
    }
  }

  .header-img {
    position: relative;
    img {
      display: block;
      margin: 0 auto;
      max-width: 2250px;
      width: 100%;
    }
    .img-text {
      position: absolute;
      left: 40%;
      top: 50%;
      letter-spacing: 10px;
      font-size: var(--font-size-large);
      text-align: center;
      color: white;
      span:first-child {
        background-color: black;
        opacity: 0.8;
        padding: 20px 28px;
        margin: 0 10px;
        font-weight: bold;
      }
    }
  }
  @media screen and (max-width: 900px) {
    .navbar .links {
      display: none;
    }
    .img-text {
      .invisible {
        display: none;
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div className="navbar">
        <div className="logo  navlink">
          <span>BR</span> Architects
        </div>
        <div className="links">
          <NavLink className="navlink" to="#">
            Projects
          </NavLink>
          <NavLink className="navlink" to="#">
            About
          </NavLink>
          <NavLink className="navlink" to="#">
            Contact
          </NavLink>
        </div>
      </div>
      <div className="header-img">
        <img src={headerImg} alt="headerTopImg" />
        <div className="img-text">
          <span>BR</span>
          <span className="invisible">Architects</span>
        </div>
      </div>
    </HeaderContainer>
  );
};
export default Header;
