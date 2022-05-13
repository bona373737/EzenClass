import React, { useTransition } from 'react';
import styled from 'styled-components';
import {Link, Routes, Route} from 'react-router-dom';
import SearchMenu from './SearchMenu';

const HeaderContainer = styled.div`
  width: 100%;

    .header-top {
      //public폴더 안의 img파일 절대경로로 지정
      background: url("img/bg_header.gif");
      .content-wrap{
        width: 1200px;
        height: 150px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: auto;

        .icon-wrap{
          width: 200px;
          display: flex;
          justify-content: space-between;
        }
        
        .contact-wrap {
          width: 250px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }//content-wrap
    } //header-top
    nav {
      border-top: 1px solid black;
      border-bottom: 3px solid black;
      .content-wrap{
        width: 1200px;
        display: flex;
        justify-content: space-between;
        margin: auto;
        .member {
          display: flex;
          justify-content: space-around;
        }
        .gnb {
          display: flex;
          justify-content: space-around;
        }
      }//content-wrap
    } //nav
`;

const Header = () => {
  const [ searchToggle, setSearchToggle]=React.useState(false);
  
  
  
  
  const onClickSearch =()=> {
    setSearchToggle(searchActive=>true);
  }
  React.useEffect(()=>{
    
  },[searchToggle])





  return (
    <>
    <HeaderContainer>
      <section className='header-top'>
        <div className="content-wrap">
        <div className="icon-wrap">
          <img src={`${process.env.PUBLIC_URL}/img/icon_facebook.png`} alt="" />
          <img src={`${process.env.PUBLIC_URL}/img/icon_twitter.png`} alt="" />
          <img src={process.env.PUBLIC_URL+'/img/icon_blog.png'} alt="" />
          <img src={process.env.PUBLIC_URL+'/img/icon_instgram.png'} alt="" />
          <img src={process.env.PUBLIC_URL+'/img/icon_youtube.png'} alt="" />
        </div>
        <div className='logo'>
        <img src={`${process.env.PUBLIC_URL}/img/logo_baskinrobbins.png`} alt="" />
        </div>
        <div className="contact-wrap">
          <Link to=''>고객센터</Link>
          <Link to=''>CONTACTUS</Link>
          <button onClick={onClickSearch} ><img src={process.env.PUBLIC_URL+'/img/icon_search.png'} alt="" /></button>
        </div>
        </div>
      </section>
      <nav>
        <div className="content-wrap">
        <ul className='member'>
          <li><Link to=''>LOGIN</Link></li>
          <li><Link to=''>JOIN</Link></li>
        </ul>
        <ul className='gnb'>
          <li><Link to=''>FAVOR OF THE MONTH</Link></li>
          <li><Link to=''>MENU</Link></li>
          <li><Link to=''>영양 성분 및 알레르기</Link></li>
          <li><Link to=''>EVENT</Link></li>
          <li><Link to=''>STORE</Link></li>
          <li><Link to=''>ABOUT</Link></li>
        </ul>
        </div>
      </nav>
    </HeaderContainer>
    <SearchMenu/>
    </>

  );
};

export default Header;


