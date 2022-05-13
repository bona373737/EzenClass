/**
 * 베스킨라빈스 사이트 클론코딩_http://www.baskinrobbins.co.kr/
 * 
 */


import React from 'react';
import MySwiper from './components/MySwiper';
import Header from './components/Header';
import TopImg from './components/TopImg';
import Event from './components/Event';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header/>
      <TopImg/>
      <MySwiper/>
      <Event/>
      <Menu/>
      <Footer/>
    </>

  );
}

export default App;
