import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  background: url('/img/bg_menu.jpg');
  background-position: 40% 60%;
  height:1000px;
  

  .content-wrap{
    width: 1200px;
    margin: auto;
    text-align: center;

    .menu-board{
      position: relative;
      text-align: left;


      .icecream{
        position: absolute;
        top: 20px;
        left: 400px;
        width: 350px;
        height: 250px;
        background-color: white;
      }
      .icecream-cake{
        position: absolute;
        top: 20px;
        left: 780px;
        width: 250px;
        height: 500px;
        background-color: white;
      }
      .beverage{
        position: absolute;
        top: 300px;
        left: 220px;
        width: 200px;
        height: 300px;
        background-color: white;
      }
      .coffee{
        position: absolute;
        top: 300px;
        left: 450px;
        width: 300px;
        height: 250px;
        background-color: white;
      }
      .gift{
        position: absolute;
        top: 550px;
        left: 780px;
        width: 250px;
        height: 150px;
        background-color: white;
      }
      .dessert{
        position: absolute;
        top: 580px;
        left: 450px;
        width: 300px;
        height: 150px;
        background-color: white;
      }
    }
  }
`;

const BrMenu = () => {
  return (
    <MenuContainer>
      <div className="content-wrap">
        <h1><img src={`${process.env.PUBLIC_URL}/img/h_menu.png`} alt="" /></h1>
        <div className="menu-board">
          <div className="icecream">
            <div className="text">
              <h5>ICECREAM</h5>
              <h6>아이스크림의 기준</h6>
              <h6>배스킨라빈스</h6>
            </div>
          </div>
          <div className="icecream-cake">
            <div className="text">
              <h5>ICECREAM</h5>
              <h5>CAKE</h5>
              <h6>아이와 어른이 좋아하는</h6>
              <h6>아이스크림을 하나의 케이크에서</h6>
              <h6>모두 즐기세요!</h6>
            </div>
          </div>
          <div className="beverage">
            <div className="text">
              <h5>BEVERAGE</h5>
              <h6>아이스크림으로 즐기는</h6>
              <h6>배스킨라빈스만의 음료!</h6>
            </div>
          </div>
          <div className="coffee">
            <div className="text">
              <h5>COFFEE</h5>
              <h6>배스킨라빈스만의</h6>
              <h6>부드러운 촉감과</h6>
              <h6>달콤한 풍미!</h6>
            </div>
          </div>
          <div className="gift">
            <div className="text">
              <h5>GIFT</h5>
              <h6>특별한 날, 배스킨라빈스로</h6>
              <h6>달콤한 선물을 전해보세요!</h6>
            </div>
          </div>
          <div className="dessert">
            <div className="text">
              <h5>DESSERT</h5>
              <h6>아이스크림을 더욱 재미있게!</h6>
              <h6>간편하게 즐기는 방법!</h6>
            </div>
          </div>
        </div>
      </div>
    </MenuContainer>
  );
};

export default BrMenu;