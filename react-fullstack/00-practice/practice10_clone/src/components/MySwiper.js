/**
 * @filename Swiper.js
 * @description Swiper.js 라이브러리를 사용한 img swiper구현
 */

 import React, { useRef, useState } from "react";
 import { Swiper, SwiperSlide } from "swiper/react";
 import styled from 'styled-components';
 
 // Import Swiper styles
 import "swiper/css";
 import "swiper/css/navigation";
 import "swiper/css/pagination";
 
//  import "./styles.css";
 
 // import required modules
 import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
 
  const SwiperContainer = styled.div`
    width: 100%;
    height: 500px;

    .swiper {
      width: 100%;
      height: 100%;
    }

    .swiper-slide {
      
      text-align: center;
      font-size: 18px;
      background: tomato;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }

    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `;

 const MySwiper=()=>{
   return (
     <SwiperContainer>
       <Swiper
         cssMode={true}
         navigation={true}
         pagination={{clickable:true,}}
         mousewheel={true}
         keyboard={true}
         modules={[Navigation, Pagination, Mousewheel, Keyboard]}
         className="MySwiper"
       >
         <SwiperSlide>Slide 1</SwiperSlide>
         <SwiperSlide>Slide 2</SwiperSlide>
         <SwiperSlide>Slide 3</SwiperSlide>
         <SwiperSlide>Slide 4</SwiperSlide>
         <SwiperSlide>Slide 5</SwiperSlide>
         <SwiperSlide>Slide 6</SwiperSlide>
         <SwiperSlide>Slide 7</SwiperSlide>
         <SwiperSlide>Slide 8</SwiperSlide>
         <SwiperSlide>Slide 9</SwiperSlide>
       </Swiper>
     </SwiperContainer>
   );
 }
 
 export default MySwiper;