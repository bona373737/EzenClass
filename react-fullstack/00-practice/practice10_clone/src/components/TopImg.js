import React from 'react';
import styled from 'styled-components';

const TopImgContainer=styled.div`
  width: 100%;
  background-color: #FFD925;
  text-align: center;
  margin-bottom: 5px;

  img{
    width: 1200px;
  }
`;

const TopImg = () => {
  return (
    <TopImgContainer>
      <img src={process.env.PUBLIC_URL+`/img/topImg.jpg`} alt="" />
    </TopImgContainer>
  );
};

export default TopImg;