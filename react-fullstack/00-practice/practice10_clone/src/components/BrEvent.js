import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'; 
import axios from 'axios';

const StyledBrEvent=styled.div`
  width: 100%;
  
  .content-wrap{
    width: 1200px;
    height: 700px;
    margin: auto;

    .event-list{
      display: flex;

      li{
        padding: 20px;

        .event-img{

        }

        .event-desc{
          padding-top: 20px;
        }
      }
    }
    .page{
      display: flex;
    }
  }
`;

const BrEvent = () => {
  const [brEventContent, setBrEventContent] = React.useState([]);
  const [brEventIndex, setBrEventIndex] = React.useState(0);


  const onBrEventPage= React.useCallback(e=>{
      (async()=>{
        let json=null;
        
        try {
          const response = await axios.get('http://localhost:3001/brEvent');
          json=response.data;
          // console.log(json);
          // setBrEventContent(brEventContent=>response.data);
          // console.log(brEventContent);
        } catch (e) {
          console.error(e);
          alert('ajax 연동 실패');
        }
        
        if(json != null){
          setBrEventContent(brEventContent=>json);
          console.log(brEventContent);
        }
      })();
  });

  return (
    <StyledBrEvent>
      <div className="content-wrap">
        <div><img src={process.env.PUBLIC_URL +"/img/h_event.png"} alt="" /></div>
        <ul className='event-list'>
          {/* 마운팅됬을때 index 1번부터 4번까지의 데이터를 화면에 보여주고,,,page이동시... */}
          {/* {
            brEventContent.map((v,i)=>{
              return(
                <li key={i}><Link to=''>
                <div className="event-img">
                  <img src={process.env.PUBLIC_URL +"/img/"+v.img} alt="" />
                </div>
                <div className="event-desc">
                <img src={process.env.PUBLIC_URL +"/img/"+v.category} alt="" />
                <p>{v.desc}</p>
                <p>{v.period}</p>
                </div>
                </Link></li> 
              )
            })
          } */}
        </ul>
        <div className="page">
          <button onClick={onBrEventPage}>페이지버튼1</button>
          <button onClick={onBrEventPage}>페이지버튼2</button>
          <button onClick={onBrEventPage}>페이지버튼3</button>
          <button onClick={onBrEventPage}>페이지버튼4</button>
        </div>
      </div>
    </StyledBrEvent>
  );
};

export default BrEvent;