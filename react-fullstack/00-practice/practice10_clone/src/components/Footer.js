import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const FooterContainer= styled.div`
  width: 100%;
  border-top: 1px solid #FEAF2A;
  .content-wrap{
    width: 1200px;
    margin: auto;
    text-align: center;

    .footer-links{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .site-wrap{
    width: 100%;
    background-color: #F9F8F7;
    .site{
      width: 1200px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
  
  
      ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
  
        .img1{
          height: 30px;
        }
      }
      .family-site{
        height: 40px;
        width: 100px;
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="content-wrap">
        <ul className="footer-links">
          <li><Link to=''>점포개설문의</Link></li>
          <li><Link to=''>채용문의</Link></li>
          <li><Link to=''>윤리신고센터</Link></li>
          <li><Link to=''>이용약관</Link></li>
          <li><Link to=''>개인정보처리방침</Link></li>
          <li><Link to=''>영상정보처리기기운영관리방침</Link></li>
          <li><Link to=''>거래희망회사 사전등록</Link></li>
        </ul>
      </div>
      <div className="site-wrap">

        <div className="site">
        <ul>
          <li><Link to=''><img src={`${process.env.PUBLIC_URL}/img/btn_happypoint.png`} alt="" /></Link></li>
          <li><Link to=''><img src={`${process.env.PUBLIC_URL}/img/btn_happymarket.png`} alt="" /></Link></li>
          <li><Link to=''><img src={`${process.env.PUBLIC_URL}/img/btn_spc_story.png`} alt="" /></Link></li>
        </ul>
          <ul>
          <li><Link to=''><img src={`${process.env.PUBLIC_URL}/img/btn_norton.gif`} alt="" /></Link></li>
          <li><Link to=''><img className='img1' src={`${process.env.PUBLIC_URL}/img/btn_ccm_2.png`} alt="" /></Link></li>
          <li><Link to=''><img src={`${process.env.PUBLIC_URL}/img/btn_ksa.png`} alt="" /></Link></li>
          </ul>
          <select className="family-site">
            <option value="">배스킨스쿨</option>
            <option value="">SPC그룹사이트</option>
            <option value="">SPC MAGAZINE</option>
            <option value="">BR코리아</option>
            <option value="">해피포인트카드</option>
            <option value="">파스쿠찌</option>
            <option value="">삼립</option>
            <option value="">파리바케트</option>
            <option value="">던킨도너츠</option>
          </select>
        </div>
      </div>
      <div className="content-wrap">

          <img src={`${process.env.PUBLIC_URL}/img/footer_logo.png`} alt="" />
        <div className="address">
          <div>
            <span>사업자등록번호: 303-81-09535</span>
            <span>비알코리아(주) 대표이사 도세호</span>
            <span>서울특별시 서초구 남부순환로 2620(양재동 11-149번지)</span>
          </div>
          <div>
            <span>TEL: 080-555-3131</span>
            <span>개인정보관리책임자:김경우</span>
          </div>
          <p>Copyright ⓒ 2016 BRKOREA Company. All Rights Reserved.</p>
        </div>
      </div>

      
    </FooterContainer>
  );
};

export default Footer;