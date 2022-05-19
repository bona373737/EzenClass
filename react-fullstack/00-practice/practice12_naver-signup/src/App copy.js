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

      }
      .authorize-box{
        display: flex;
        justify-content: space-between;
        align-items: center;
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
  const [ userid, setUserid] = React.useState('');

  const signup_form = React.useRef();
  
  const onBlurInput= React.useCallback((e)=>{
    //input element 객체 한개를 target으로 가져온다.  
    const current = e.target;

    /**
     * input태그에서 blur될때 유효성 겁사하기
     * 유효성검사결과로 ture 또는 error객체 반환
     * 유효성검사 성공인경우 -> 특정메세지 출력 또는 특정 스타일 적용 
     * 유효성검사 실패인경우 -> 특정메세지 출력
     * 
     * 아래방법으로 구현하는 경우 에러메세지는 잘 출력되지만, 처음에 잘못된 값을 입력했다가 다시 올바른 값을 입력했을때 
     * 기존에 출력되어 있던 에러메세지가 삭제 되지 않고 남아 있다.
     * 
     */
    try {
      RegexHelper.value(current, '필수 정보입니다.');
      
      switch(current.name){
        case 'userid':
          RegexHelper.checkId(current, '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.')
          document.querySelector(`p[data-${current.name}]`).innerHTML = '멋진 아이디네요!';
          break;
        case 'password':
          RegexHelper.checkPw(current, '8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.')
          break;
          case 'passwordcheck':
          // console.log(signup_form.current.password);
          RegexHelper.compareTo(signup_form.current.password,current, '비밀번호가 일치하지 않습니다.');
          break;
        default:
          console.log('유효성 검사 끝');
      }      
    } catch (e) {
      // window.alert(e.message);
      // e.field.focus();
      document.querySelector(`p[data-${current.name}]`).innerHTML = e.message;
      return e.message;
    }

    //유효성검사가 완료된 값들을 가져오기
    const userid = e.currentTarget.value;
    console.log(e);
  },[]); //onBlurInput이벤트 end

  React.useEffect(()={
    

  },[userid])



  //가입하기 버튼 클릭 했을때 form전체검사
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
          <StyledInput type="text" name="password" id="password" onBlur={onBlurInput} />
          <p data-password='errorMessage'></p>
        </div>
        <div className="input-box">
          <label htmlFor="">비밀번호 재확인</label>
          <StyledInput type="text" name="passwordcheck" id="passwordCheck"  onBlur={onBlurInput} />
          <p data-passwordcheck='errorMessage'></p>
        </div>
        <div className="input-box">
          <label htmlFor="">이름</label>
          <StyledInput type="text" name="username" id="username"  onBlur={onBlurInput} />
          <p data-username='errorMessage'></p>
        </div>
        <div className="input-box">
          <label htmlFor="birthYear">생년월일</label>
          <div className="birthdate-box">
            <StyledInput type="text" name="birthYear" id="birthYear" placeholder="년(4자)"/>
            <StyledSelect name="birthMonth" id="">
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
            <StyledInput type="text" name="birthDay" id="" placeholder="일"/>
          </div>
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
          <StyledSelect name="" id="">
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
