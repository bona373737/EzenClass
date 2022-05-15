import React from 'react';
import styled  from 'styled-components';
import { Link } from 'react-router-dom';

const SubMenuContainer = styled.div`
  width: 100%;
  height: 300px;
  background-color: white;
  position: absolute;
  z-index: 9999;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .content-wrap{
    width: 1200px;
    margin: auto;

    .app-event{
      padding: 50px 0;
    }
    
    .menu-list{
      display: flex;
      justify-content: space-between;
    }
  }

`;

const SubMenu = () => {
  return (
    <SubMenuContainer>
      <div className="content-wrap">
      <div className="app-event">
        <img
          src={process.env.PUBLIC_URL + "/img/img_happypoint_app.jpg"}
          alt=""
        />
      </div>
      <div className="icaream">
        <img
          src={process.env.PUBLIC_URL + "/img/img_monthly_fom_220429.png"}
          alt=""
        />
      </div>
      <div className="menu-list">
        <ul>
          <li><Link to=''>아이스크림</Link></li>
          <li><Link to=''>아이스크림케이크</Link></li>
          <li><Link to=''>음료</Link></li>
          <li><Link to=''>커피</Link></li>
          <li><Link to=''>디저트</Link></li>
        </ul>
        <ul>
          <li><Link to=''>아이스크림</Link></li>
          <li><Link to=''>음료</Link></li>
          <li><Link to=''>커피</Link></li>
        </ul>
        <ul>
          <li><Link to=''>진행중이이벤트</Link></li>
          <li><Link to=''>당첨자발표</Link></li>
        </ul>
        <ul>
          <li><Link to=''>매장찾기</Link></li>
          <li><Link to=''>고객센터</Link></li>
          <li><Link to=''>단체주문</Link></li>
        </ul>
        <ul>
          <li><Link to=''>공지사항</Link></li>
          <li><Link to=''>보도자료</Link></li>
          <li><Link to=''>채용정보</Link></li>
          <li><Link to=''>점포개설문의</Link></li>
          <li><Link to=''>CONTACT US</Link></li>
        </ul>
      </div>
      </div>
    </SubMenuContainer>
  );
};

export default SubMenu;