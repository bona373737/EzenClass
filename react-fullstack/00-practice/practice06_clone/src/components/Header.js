import React from "react";
import { NavLink, Routes } from "react-router-dom";
import styled from "styled-components";
import headTopImg from "../assets/img/hamburger.jpg";

const HeaderContainer = styled.div`
  width: 100%;
  text-decoration: none;

  .navbar {
    width: 100%;
    height: 60px;
    background-color: white;
    padding: 0 10px;
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 20;

    .navlink {
      text-decoration: none;
      letter-spacing: 5px;
      padding: 0 10px;
    }
  }

  .head-img-wrap {
    position: relative;
    min-width: 800px;

    .head-img {
      display: block;
      margin: auto;
      max-width: 100%;
    }
    span {
      position: absolute;
      left: 20px;
      bottom: 20px;
      font-size: 30px;
      letter-spacing: 5px;
      opacity: 0.5;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div className="navbar">
        <NavLink className="navlink" to="/">
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
