import React, { useRef } from "react";
import styled from 'styled-components';
import axios from 'axios';
import useAxios from 'axios-hooks';

import RegexHelper from "./regex/RegexHelper";

const StyledInput = styled.input`
    height: 60px;
    margin: 5px 0;
    font-size: 25px;
    border: 1px solid #DADADA;
    text-indent: 10px;
    &:focus{
    outline: none;
    border: 1px solid #02C75A;
  }
`;

const StyledButton = styled.button`
  height: 60px;
  background-color: #02C75A;
  border: none;
  font-size: 25px;
  color: white;
  &:focus{
    outline: none;
    border: 1px solid #02C75A;
  }
`;

const StyledSelect = styled.select`
  height: 60px;
  font-size: 25px;
  border: 1px solid #DADADA;
  text-indent: 10px;
  &:focus{
    outline: none;
    border: 1px solid #02C75A;
  }
`;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #F5F6F7;

.content-wrap{
  width: 600px;
  margin: auto;

  .logo{
    text-align: center;
    padding: 50px 0;
  }
  
  form{
    display: flex;
    flex-direction: column;
    
    .input-box{
      display: flex;
      flex-direction: column;
      margin: 18px 0;
      font-size: 25px;
      
      label{
        margin: 5px 0;
      }
      p{
        color: red;
        font-size: 15px;
        margin: 3px 0;
      }
      .birthdate-box{
        display: flex;
        justify-content: space-between;
        align-items: center;
        input{
          width: 180px;
        }
        select{
          width: 180px;
        }
      }
      .authorize-box{
        display: flex;
        justify-content: space-between;
        align-items: center;
        input{
          width: 400px;
        }
      }
      input[name='authorizationNum']{
        background-color: #F7F7F7;        
      }
    }
  }//form end

  footer{
    font-size: 17px;
    opacity: 0.8;
    text-align: center;
    ul{
      list-style: none;
      display: flex;
      padding: 0;
      justify-content: center;
      margin-top:50px;

      li{
        padding: 0 5px;
        &::after{
          content: '|';
          opacity: 0.5;
          padding-left:5px;
        }
        &:last-child::after{
          content: '';
        }
        a{
          text-decoration: none;
          color: black;
          opacity: 0.5;
        }
      }
    }//ul end
  }//footer end
}
`;


function App() {
  const signup_form = React.useRef();
  
  /**
   * 각 input태그에서 blur될때마다 유효성 검사진행
   */
  const onBlurInput= React.useCallback((e)=>{
    let userid = null;
    let password = null;
    let year = null;
    let month = null;
    let day = null;

    const current = e.target;
    try {
      
      switch(current.name){
        case 'userid':
          RegexHelper.value(current, '필수 정보입니다.');
          RegexHelper.checkId(current, '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.');
          userid = current.value;
          document.querySelector(`p[data-${current.name}]`).innerHTML = '';
          break;
        case 'password':
          RegexHelper.value(current, '필수 정보입니다.');
          RegexHelper.checkPw(current, '8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.')
          password=current.value;
          document.querySelector(`p[data-${current.name}]`).innerHTML = '';
          break;
        case 'passwordcheck':
          RegexHelper.value(current, '필수 정보입니다.');
          RegexHelper.compareTo(signup_form.current.password,current, '비밀번호가 일치하지 않습니다.');
          document.querySelector(`p[data-${current.name}]`).innerHTML = '';
          break;
        case 'username':
          RegexHelper.value(current, '필수 정보입니다.');
          document.querySelector(`p[data-${current.name}]`).innerHTML = '';
          break;
        case 'sex':
          RegexHelper.value(current, '필수 정보입니다.');
          document.querySelector(`p[data-${current.name}]`).innerHTML = '';
          break;
        case 'birthyear':
          RegexHelper.value(current, '태어난 년도 4자리를 정확하게 입력하세요.');
          RegexHelper.birthYearNum(current,'태어난 년도 4자리를 정확하게 입력하세요.');
          year= current.value;
          document.querySelector(`p[data-${current.name}]`).innerHTML = '';
          break;
        case 'birthmonth':
          if(current.value === ''){
          RegexHelper.value(current, '태어난 월을 입력하세요.');
          }else{
            month= current.value;
            document.querySelector(`p[data-${current.name}]`).innerHTML = '';
          }
          break;
        case 'birthday':
          RegexHelper.value(current, '태어난 일(날짜) 2자리를 정확하게 입력하세요.');

          break;
        default:
      }      
    } catch (e) {
      document.querySelector(`p[data-${current.name}]`).innerHTML = e.message;
      return e.message;
    }



  //유효성검사가 정상적으로 완료된 아이디 값을 가져와서 ajax통신으로 받아온 member데이터로 중복아이디 검사
    (async()=>{
      let json = null;
      try {
        const response = await axios.get('http://localhost:3001/member');
        json = response.data;
      } catch (error) {
        console.error(error);
      }
      //동일한 아이디가 있는 경우 ---> " 이미 사용중이거나 탈퇴한 아이디입니다." 출력 
      //중복아이디 없는경우 ---->" 멋진 아이디네요!" 출력
      if(json.includes(userid)){
        document.querySelector('p[data-userid]').innerHTML = '이미 사용중이거나 탈퇴한 아이디';
      }else{
        document.querySelector('p[data-userid]').innerHTML = '멋진 아이디네요!';
      }
    })();

    //비밀번호 값에 대하여 유효성 검사 통과한 경우_"빨간색 사용불가" -> "초록색 안전"
    if(password !== null){

    }

    //비민번호 재확인값에 대하여 유효성 검사 통과한 경우 색상변경_ 빨강아이콘->> 초록아이콘



  },[]); //onBlurInput이벤트 end






  /**
   * submit버튼 클릭됬을때 form전체 데이터의 유효성검사 재실행
   */
  const onSubmitForm=React.useCallback((e)=>{
    e.preventDefault();
    
    //form태그 자체를 target으로 가져온다....하위에 포함된 input값에 name속성의 이름으로 구별하여 접근가능
    const current = e.target;

    try {
      RegexHelper.value(current.userid, '필수 정보입니다.');
      RegexHelper.checkId(current.userid, '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.');
    } catch (error) {
      document.querySelector ('p[data-userid]').innerHTML = error.message;
    }

    try {
      RegexHelper.value(current.password, '필수 정보입니다.');
      RegexHelper.checkPw(current.password, '8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.');
    } catch (error) {
      document.querySelector ('p[data-password]').innerHTML = error.message;
    }
  },[]);


  return (
    <AppContainer>
      <div className="content-wrap">
      <div className="logo">
        <img src={process.env.PUBLIC_URL + '/assets/img/logo_naver.png'} alt="logo_naver" />
      </div>
      <form ref={signup_form} onSubmit={onSubmitForm}>
        <div className="input-box">
          <label htmlFor="">아이디</label>
          <StyledInput type="text" name="userid" id="userid"  onBlur={onBlurInput}/>
          <p data-userid='errorMessage'></p>
        </div>
        <div className="input-box">
          <label htmlFor="">비밀번호</label>
          <StyledInput type="password" name="password" id="password" onBlur={onBlurInput} />
          <p data-password='errorMessage'></p>
        </div>
        <div className="input-box">
          <label htmlFor="">비밀번호 재확인</label>
          <StyledInput type="password" name="passwordcheck" id="passwordCheck"  onBlur={onBlurInput} />
          <p data-passwordcheck='errorMessage'></p>
        </div>
        <div className="input-box">
          <label htmlFor="">이름</label>
          <StyledInput type="text" name="username" id="username"  onBlur={onBlurInput} />
          <p data-username='errorMessage'></p>
        </div>
        <div className="input-box">
          <label htmlFor="birthyear">생년월일</label>
          <div className="birthdate-box">
            <StyledInput type="text" name="birthyear" id="birthyear" placeholder="년(4자)" onBlur={onBlurInput} maxLength={4}/>
            <StyledSelect name="birthmonth" onBlur={onBlurInput}>
              <option value="">월</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </StyledSelect>
            <StyledInput type="text" name="birthday" placeholder="일" onBlur={onBlurInput} maxLength={2}/>
          </div>
            <p data-birthyear='errorMessage'></p>
            <p data-birthmonth='errorMessage'></p>
            <p data-birthday='errorMessage'></p>
          <p data-birthdate='errorMessage'></p>
        </div>
        <div className="input-box">
          <label htmlFor="sex">성별</label>
          <StyledSelect name="sex" id="sex" onBlur={onBlurInput}>
            <option value="">성별</option>
            <option value="male">남자</option>
            <option value="female">여자</option>
            <option value="no">선택안함</option>
          </StyledSelect>
          <p data-sex='errorMessage'></p>
        </div>
        <div className="input-box">
          <label htmlFor="">
            본인 확인 이메일<span>(선택)</span>
          </label>
          <StyledInput type="text" name="" id="" />
        </div>
        <div className="input-box">
          <label htmlFor="tel">휴대전화</label>
          <StyledSelect name="nation" >
            <option value="korea" >
              대한민구 +82
            </option>
          </StyledSelect>
          <div className="authorize-box">
            <StyledInput type="text" name="tel" id="tel"  onBlur={onBlurInput}/>
            <StyledButton>인증번호 받기</StyledButton>
          </div>
          <StyledInput type='text' name='authorizationNum' placeholder="인증번호를 입력하세요" disabled onBlur={onBlurInput}></StyledInput>
          <p data-tel='errorMessage'></p>
          <p data-authorizationnum='errorMessage'></p>
        </div>
        <StyledButton type="submit">가입하기</StyledButton>
      </form>
      <footer>
        <ul>
          <li>
            <a href="https://policy.naver.com/rules/service.html" target="_blank">이용악관</a>
          </li>
          <li>
            <a href="https://policy.naver.com/policy/privacy.html" target="_blank">개인정보처리방침</a>
          </li>
          <li>
            <a href="https://policy.naver.com/rules/disclaimer.html" target="_blank">책임의 한계와 법적고지</a>
          </li>
          <li>
            <a href="https://help.naver.com/support/service/main.help?serviceNo=532&_membership_p.membership_p.membership_26&from=alias" target="_blank">회원정보 고객센터</a>
          </li>
        </ul>
        <div>ⓒ NAVER Corp.</div>
      </footer>
      </div>
    </AppContainer>
  );
}

export default App;
