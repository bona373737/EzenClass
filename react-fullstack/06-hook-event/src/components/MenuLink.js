import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const MenuLinkContainer = styled(NavLink)`
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  padding-bottom: 2px;
  color: #222;

  &:hover {
    color: #22b8cf;
  }
  &:after {
    content: "";
    display: inline-block;
    pad: 0 7px;
    color: #ccc;
  }
  &:last-child {
    &::after {
      color: #fff;
    }
  }

  //styled component... 활성화된 해당 메뉴의 기본 클래스 active로 자동설정됨
  &.active {
    text-decoration: underline;
    color: #22b8cf;
    &::after {
      border-bottom: 4px solid #fff !important;
    }
  }
`;

const MenuLink = ({ to, children }) => {
  return <MenuLinkContainer to={to}>{children}</MenuLinkContainer>;
};

export default MenuLink;

//아래처럼 축약형으로 작성하는 것도 가능!
// const MenuLink = ({ to, children }) => {
//   };

//   export default <MenuLinkContainer to={to}>{children}</MenuLinkContainer>;
