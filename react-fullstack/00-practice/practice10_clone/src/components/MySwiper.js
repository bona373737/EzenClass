/**
 * @filename Swiper.js
 * @description Swiperjs 라이브러리를 사용한 img swiper구현
 */

 import React from "react";
 import { Swiper, SwiperSlide } from "swiper/react";
 import styled from 'styled-components';
 
 // Import Swiper styles
 import "swiper/css";
 import "swiper/css/navigation";
 import "swiper/css/pagination";
 
 // import required modules
 import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import axios from "axios";
 
  const SwiperContainer = styled.div`
    width: 100%;
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
    .swiper-button-next{
      background: url("/img/btn_banner_next.png") no-repeat;
      background-position:auto 50%;
      width: 120px;
      height: 120px;
      margin: 0;
    }
    .swiper-button-prev{
      background: url("/img/btn_banner_prev.png") no-repeat;
      background-position: auto 50%;
      width: 120px;
      height: 120px;
      margin: 0;
    }
    .swiper-button-next::after,
    .swiper-button-prev::after{
      display: none;
    }
    .swiper-pagination-bullet{
      width: 10px;
      height: 10px;
      background-color: white;
    }
      .swiper-pagination-bullet-active{
      background-color: black;
    }
  `;

 const MySwiper=()=>{
   const [ swiper, setSwiper] = React.useState([]);

   React.useEffect(()=>{
     (async()=>{
       let json = null;
      try {
        const response = await axios.get(' http://localhost:3001/sliderImg');
        // console.log(response);
        json=response.data;
      } catch (e) {
        console.error(e);
        alert('ajax 통신 실패');
      }
      if(json != null){
        setSwiper(swiper=>json);
      }
    })();
  },[])

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
        {
            swiper.map((v,i)=>{
              return(
                <SwiperSlide key={i}><img src={process.env.PUBLIC_URL + "/img/"+v} alt="" /></SwiperSlide>
                )
              })
        }
      </Swiper>
    </SwiperContainer>
  );
 }
 export default MySwiper;