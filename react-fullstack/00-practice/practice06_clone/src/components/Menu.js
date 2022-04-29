import React from "react";
import styled from "styled-components";
import menuImg from "../assets/img/tablesetting.jpg";

const MenuContainer = styled.div``;

const Menu = () => {
  return (
    <MenuContainer>
      <div className="menu-list">
        <h1>Our Menu</h1>
        <ul>
          <li>
            <h3>Bread Basket</h3>
            <p>Assortment of fresh baked fruit breads and muffins 5.50</p>
          </li>
          <li>
            <h3>Honey Almond Granola with Fruits</h3>
            <p>
              Natural cereal of honey toasted oats, raisins, almonds and dates
              7.00
            </p>
          </li>
          <li>
            <h3>Belgian Waffle</h3>
            <p>Vanilla flavored batter with malted flour 7.50</p>
          </li>
          <li>
            <h3>Scrambled eggs</h3>
            <p>
              Scrambled eggs, roasted red pepper and garlic, with green onions
              7.50
            </p>
          </li>
          <li>
            <h3>Blueberry Pancakes</h3>
            <p>With syrup, butter and lots of berries 8.50</p>
          </li>
        </ul>
      </div>
      <img src={menuImg} alt="" />
    </MenuContainer>
  );
};
export default Menu;
