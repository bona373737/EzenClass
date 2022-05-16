import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'; 
import axios from 'axios';

const StyledBrEvent=styled.div`
  width: 100%;
  padding: 50px 0;
  text-align: center;
  .content-wrap{
    width: 1200px;
    height: 600px;
    margin: auto;

    div:first-child{
      margin: 30px 0;
    }
    .event-list{
      display: flex;
      text-align: left;
      justify-content: space-between;
      li{
        padding-right: 20px;
        width: 255px;

        .event-img{
          object-fit: cover;
          img{
            width: 100%;
          }
        }
        .event-desc{
          padding-top: 20px;
        }
      }
    }
    .page{
      display: flex;
      justify-content: center;

      button{
        margin:0 10px;
        width: 8px;
        height: 10px;
        border-radius: 50%;
        background-color: #CDCCD5;

        &.active{
          background-color: black;
        }
      }
    }
  }
`;

const BrEvent = () => {
  const [brEventContent, setBrEventContent] = React.useState([]);
  const [brEventPage, setBrEventPage] = React.useState([]);
  const [pageBtnAcive, setPageBtnActive] = React.useState('');
  const [brEventIndex, setBrEventIndex] = React.useState(0);

//마운트되는 시점에 event 데이터를 ajax통신으로 가져오고 그중 4개 데이터만 화면에 그려준다.
  React.useEffect(()=>{
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
        setBrEventPage(brEventPage=>json.slice(0,4));
        // console.log(brEventContent)
      }
    })();
  },[])

//페이지 버튼을 누르면 해당 페이지에서 보여줄 data의 시작 index번호를 설정
  const onBrEventPage=React.useCallback( e=>{
    console.log(e);
    const {page} = e.target.dataset;
    setBrEventIndex(brEventIndex=>page);
    // console.log(page);

    // e.target.classList.add('active')

  });

//페이지번호 클릭할때 brEventIndex값이 변경될때마다 원본데이터에서 특정 index범위의 데이터 4개만 화면에 다시 그려주기
  React.useEffect(()=>{
    setBrEventPage(brEventPage=> brEventContent.slice(brEventIndex,parseInt(brEventIndex)+4));
  },[brEventIndex])


  return (
    <StyledBrEvent>
      <div className="content-wrap">
        <div><img src={process.env.PUBLIC_URL +"/img/h_event.png"} alt="" /></div>
        <ul className='event-list'>
          {/* 마운팅됬을때 index 1번부터 4번까지의 데이터를 화면에 보여주고,,,page이동시... */}
          {
            brEventPage.map((v,i)=>{
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
          }
        </ul>
        <div className="page">
          <button data-page={0} onClick={onBrEventPage}></button>
          <button data-page={4} onClick={onBrEventPage}></button>
          <button data-page={8} onClick={onBrEventPage}></button>
          <button data-page={12} onClick={onBrEventPage}></button>
        </div>
      </div>
    </StyledBrEvent>
  );
};

export default BrEvent;