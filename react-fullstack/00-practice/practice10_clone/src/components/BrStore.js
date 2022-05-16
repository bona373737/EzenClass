import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BrStoreContainer = styled.div`
  width: 100%;
  padding: 80px 0;
  .content-wrap{
    width: 1200px;
    margin: auto;

    .storeAndOrder{
      display: flex;
      text-align: center;
      .store{
        img{
          margin: 20px 0;
        }
      }
      .order{
        img{
          margin: 20px 0;
        }
      }
    }
    .sns{
      text-align: center;
      margin: 30px 0;

      div:first-child{
        margin: 30px 0;
      }

      a{
        padding: 0 20px;
      }
    }
  }

`;

const BrStore = () => {
  return (
    <BrStoreContainer>
      <div className="content-wrap">
        <div className="storeAndOrder">
          <div className="store">
            <img src={process.env.PUBLIC_URL + "/img/h_store.png"} alt="" />
            <Link to=''><img src={process.env.PUBLIC_URL + "/img/img_store.jpg"} alt="" /></Link>
          </div>
          <div className="order">
          <img src={process.env.PUBLIC_URL + "/img/h_happyorder_delivery.png"} alt="" />
          <Link to=''><img src={process.env.PUBLIC_URL + "/img/img_happyorder_delivery.png"} alt="" /></Link>
          </div>
        </div>
        <div className="sns">
          <div><img src={process.env.PUBLIC_URL + "/img/h_sns.png"} alt="" /></div>
          <Link to=''><img src={process.env.PUBLIC_URL + "/img/sns_facebook.png"} alt="" /></Link>
          <Link to=''><img src={process.env.PUBLIC_URL + "/img/sns_twitter.png"} alt="" /></Link>
          <Link to=''><img src={process.env.PUBLIC_URL + "/img/sns_blog.png"} alt="" /></Link>
          <Link to=''><img src={process.env.PUBLIC_URL + "/img/sns_instagram.png"} alt="" /></Link>
          <Link to=''><img src={process.env.PUBLIC_URL + "/img/sns_youtube.png"} alt="" /></Link>
        </div>
      </div>
      
    </BrStoreContainer>
  );
};


export default BrStore;