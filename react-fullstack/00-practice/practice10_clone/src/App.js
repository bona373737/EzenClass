/**
 * 베스킨라빈스 사이트 클론코딩_http://www.baskinrobbins.co.kr/
 * 
 */


import React from 'react';
import MySwiper from './components/MySwiper';
import Header from './components/Header';
import TopImg from './components/TopImg';
import BrEvent from './components/BrEvent';
import BrMenu from './components/BrMenu';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header/>
      <TopImg/>
      <MySwiper/>
      <BrEvent/>
      <BrMenu/>
      <Footer/>
    </>

  );
}

export default App;
