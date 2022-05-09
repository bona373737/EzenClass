import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import headTopImg from "../assets/img/hamburger.jpg";
import GlobalStyles from "../GlobalStyles";

const HeaderContainer = styled.div`
  width: 100%;
  text-decoration: none;

  .navbar {
    width: 100%;
    height: 80px;
    background-color: white;
    box-shadow: 0 1px 8px var(--color-gray-dark);
    padding: 0 10px;
    font-size: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 20;

    .navlink {
      text-decoration: none;
      letter-spacing: 5px;
      padding: 0 20px;
      color: black;
      display: block;
      height: 60px;
      line-height: 60px;

      &:hover {
        background-color: var(--color-gray-dark);
      }
    }

    nav {
      display: flex;
      margin-right: 20px;
    }
  }

  .head-img-wrap {
    position: relative;
    margin: auto;

    .head-img {
      display: block;
      margin: auto;
      width: 100%;
      max-width: 2300px;
    }
    span {
      position: absolute;
      left: 20px;
      bottom: 20px;
      font-size: var(--font-size-large);
      letter-spacing: 5px;
      opacity: 0.5;
    }
  }

  @media screen and (max-width: 800px) {
    .navbar nav {
      display: none;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div className="navbar">
        <NavLink className="navlink" to="#">
          Gourmet au Catering
        </NavLink>
        <nav>
          <NavLink className="navlink" to="#">
            About
          </NavLink>
          <NavLink className="navlink" to="#">
            Menu
          </NavLink>
          <NavLink className="navlink" to="#">
            Contact
          </NavLink>
        </nav>
      </div>
      <div className="head-img-wrap">
        <img className="head-img" src={headTopImg} alt="headeTop" />
        <span>Le Catering</span>
      </div>
    </HeaderContainer>
  );
};
export default Header;
