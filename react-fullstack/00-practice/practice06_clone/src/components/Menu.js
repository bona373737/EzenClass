import React from "react";
import styled from "styled-components";
import menuImg from "../assets/img/tablesetting.jpg";
import GlobalStyles from "../GlobalStyles";

const MenuContainer = styled.div`
  .menu-wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 100px auto;
    padding: 0 50px;
    max-width: 1500px;

    img {
      width: 50%;
      opacity: 0.8;
    }

    .menu-list {
      h1 {
        text-align: center;
        font-size: var(--font-size-large);
        margin: 40px;
      }
      ul {
        li {
          margin: 10px 0;
          height: 120px;
          h3 {
            font-size: var(--font-size-middle);
            margin-bottom: 20px;
          }
          p {
            font-size: 20px;
            opacity: 0.5;
          }
        }
      }
    }
  }
  @media screen and (max-width: 800px) {
    .menu-wrap {
      flex-direction: column;

      img {
        margin: auto;
        width: 100%;
      }
    }
  }
`;

const Menu = () => {
  return (
    <MenuContainer>
      <div className="menu-wrap">
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
      </div>
    </MenuContainer>
  );
};
export default Menu;
