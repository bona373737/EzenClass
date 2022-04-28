import React from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  color: white;

  .header {
    background-color: #1abc9c;
    height: 150px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 40px;
      font-weight: bold;
      padding-bottom: 10px;
    }

    p {
      font-size: 20px;
    }

    span {
      font-weight: bold;
    }
  }

  .navbar {
    background-color: #333;
    height: 50px;

    .navbar-wrap {
      width: 80%;
      height: 50px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .navlink-wrap {
        width: auto;
        height: 50px;
        display: flex;
      }

      .home {
        background-color: #666;
      }

      .navlink {
        display: block;
        height: 50px;
        line-height: 50px;
        color: white;
        text-decoration: none;
        padding: 0 20px;
        transition: all 0.1s;

        &:hover {
          background-color: #ddd;
          color: black;
        }
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <header className="header">
        <h1>My Website</h1>
        <p>
          A <span>responsive</span> website created by me
        </p>
      </header>
      <nav className="navbar">
        <div className="navbar-wrap">
          <div className="navlink-wrap">
            <NavLink className="navlink home" to="#">
              Home
            </NavLink>
            <NavLink className="navlink" to="#">
              Link1
            </NavLink>
            <NavLink className="navlink" to="#">
              Link2
            </NavLink>
          </div>
          <div>
            <NavLink className="navlink" to="#">
              Link3
            </NavLink>
          </div>
        </div>
      </nav>
    </HeaderContainer>
  );
};
export default Header;
