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
    .menu-head{
        padding: 50px 0;
    }
    .menu-board{
      position: relative;
      text-align: left;
      h5{
        line-height: 3px;
      }
      h6{
        line-height: 15px;
        margin: 0;
      }
      
      .board{
        background-color: white;
        box-shadow: 0px 5px 9px gray;
        border-radius: 4px;
        padding: 0 10px;
      }

      .icecream{
        position: absolute;
        top: 20px;
        left: 400px;
        width: 350px;
        height: 250px;
        .text{
          position: relative;
          color: #FF97C0;
          img{
            position: absolute;
            width: 200px;
          }
          .img1{
            left: 30px;
            transform: rotate(-45deg);
          }
          .img2{
            left: 150px;
            top: -40px;
            transform: rotate(35deg);
            width: 250px;
            
          }
        }
      }
      .icecream-cake{
        position: absolute;
        top: 20px;
        left: 780px;
        width: 250px;
        height: 500px;
        .text{
          position: relative;
          h5{
            color: #FEC62A;
          }
          img{
            position: absolute;
            top: 60px;
          }
        }
      }
      .beverage{
        position: absolute;
        top: 300px;
        left: 220px;
        width: 200px;
        height: 300px;
        h5{
          color: #FF9DA8;
        }
        img{
          width: 300px;
        }
        .img1{
          position: absolute;
          left: -60px;
          top: 35px;
          
        }
        .img2{
          position: absolute;
        }
      }
      .coffee{
        position: absolute;
        top: 300px;
        left: 450px;
        width: 300px;
        height: 250px;
        h5{
          color: #BB7B4C;
        }
        img{
            position: absolute;
            top: 0px;
            left: 60px;
            height: 270px;
          }
      }
      .gift{
        position: absolute;
        top: 550px;
        left: 780px;
        width: 250px;
        height: 150px;
        .text{
          position: relative;
          h5{
            color: #EA74A8;
          }
          img{
            position: absolute;
            left: 40px;
            top: 80px;
          }
        }
      }
      .dessert{
        position: absolute;
        top: 580px;
        left: 450px;
        width: 300px;
        height: 150px;
        .text{
          text-align: right;
          position: relative;
          h5{
            color: #F48BA2;
          }
          img{
            width:200px;
          }
          .img1{
            position: absolute;
            left: 50px;
            top:-10px;
            left: -60px;
          }
          .img2{
            position: absolute;
            top: -10px;
            left: 5px;
          }
        }
      }
    }
  }
`;

const BrMenu = () => {
  return (
    <MenuContainer>
      <div className="content-wrap">
        <div className='menu-head'>
          <img src={`${process.env.PUBLIC_URL}/img/h_menu.png`} alt="" />
        </div>
        <div className="menu-board">
          <div className="icecream board">
            <div className="text">
              <h5>ICECREAM</h5>
              <h6>아이스크림의 기준</h6>
              <h6>배스킨라빈스</h6>
              <img className='img1' src={`${process.env.PUBLIC_URL}/img/menu_ice2.png`}  alt="" />
              <img className='img2' src={`${process.env.PUBLIC_URL}/img/menu_ice.png`}  alt="" />
            </div>
          </div>
          <div className="icecream-cake board">
            <div className="text">
              <h5>ICECREAM</h5>
              <h5>CAKE</h5>
              <h6>아이와 어른이 좋아하는</h6>
              <h6>아이스크림을 하나의 케이크에서</h6>
              <h6>모두 즐기세요!</h6>
              <img src={`${process.env.PUBLIC_URL}/img/menu_cake.png`}  alt="" />
            </div>
          </div>
          <div className="beverage board">
            <div className="text">
              <h5>BEVERAGE</h5>
              <h6>아이스크림으로 즐기는</h6>
              <h6>배스킨라빈스만의 음료!</h6>
              <img className='img1' src={`${process.env.PUBLIC_URL}/img/menu_beverage1.png`}  alt="" />
              <img className='img2' src={`${process.env.PUBLIC_URL}/img/menu_beverage2.png`}  alt="" />
            </div>
          </div>
          <div className="coffee board">
            <div className="text">
              <h5>COFFEE</h5>
              <h6>배스킨라빈스만의</h6>
              <h6>부드러운 촉감과</h6>
              <h6>달콤한 풍미!</h6>
              <img src={`${process.env.PUBLIC_URL}/img/menu_coffee.png`}  alt="" />
            </div>
          </div>
          <div className="gift board">
            <div className="text">
              <h5>GIFT</h5>
              <h6>특별한 날, 배스킨라빈스로</h6>
              <h6>달콤한 선물을 전해보세요!</h6>
              <img src={`${process.env.PUBLIC_URL}/img/menu_gift.png`}  alt="" />
            </div>
          </div>
          <div className="dessert board">
            <div className="text">
              <h5>DESSERT</h5>
              <h6>아이스크림을 더욱 재미있게!</h6>
              <h6>간편하게 즐기는 방법!</h6>
              <img className='img1' src={`${process.env.PUBLIC_URL}/img/menu_dessert.png`}  alt="" />
              <img className='img2' src={`${process.env.PUBLIC_URL}/img/menu_dessert2.png`}  alt="" />
            </div>
          </div>
        </div>
      </div>
    </MenuContainer>
  );
};

export default BrMenu;