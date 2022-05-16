import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BrInstagram=styled.div`
  width: 100%;
  .content-wrap{
    width: 1200px;
    height: 800px;
    margin: auto;
    position: relative;
    hr{
      color: #C2BCB3;
      opacity: 0.5;
    }
    .section-name{
      position: absolute;
      top: 0;
      left: 38%;
    }
    .instagram-img{
      margin: 50px 0;
      display: flex;
      flex-wrap: wrap;

      li{
        width: 220px;
        height: 220px;
        overflow: hidden;
        margin: 3px;

        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
`;

const BrInstgram = () => {
  const [instagram, setInstagram] = React.useState([]);

  React.useEffect(()=>{
    (async()=>{
      let json=null;
      try {
        const response = await axios.get('http://localhost:3001/instgram');
        json=response.data;
        setInstagram(instagram=>json.slice(0,15));
      } catch (e) {
        console.log(e);
        alert('ajax통신 실패')
      }
    })();
  },[])

  return (
    <BrInstagram>
    <div className="content-wrap">
      <hr />
      <img className='section-name' src={process.env.PUBLIC_URL + "/img/tit_sns.png"} alt="" />
      <ul className="instagram-img">
        {
          instagram.map((v,i)=>{
            return(
              <li><Link to=''><img src={v} alt="" /></Link></li>
            )
          })
        }
      </ul>

    </div>
    </BrInstagram>
  );
};

export default BrInstgram;