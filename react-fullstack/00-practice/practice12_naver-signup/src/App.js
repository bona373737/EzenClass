import React, { useRef } from "react";
import styled from 'styled-components';
import axios from 'axios';
import useAxios from 'axios-hooks';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock} from '@fortawesome/free-solid-svg-icons';
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

      .icon-position{
        position: relative;
        input{
          position: relative;
          width: 600px;
        }
        svg{
          position: absolute;
          right: 10px;
          top: 25px;
          color: gray;
        }
      }
      #userid{
        &::placeholder{
          text-align: right;
          padding-right: 15px;
          font-size: 20px;
          opacity: 0.5;
        }
        &:focus::-webkit-input-placeholder {
          text-align: right;
        }
      }
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
  const authorizationnum = React.useRef();
  const [formData, setFormData] = React.useState({
    userid:'',
    password:'',
    passwordcheck:'',
    username:'',
    birthdate:'',
    birthyear:'',
    birthmonth: '',
    birthday: '',
    sex:'',
    tel:''
  });

  const [{loading},refetch] = useAxios({
    url:'http://localhost:3001/member',
    method:'POST'
  },{manual:true});

  /*************************** ???????????? ?????????  Too many render ????????? ????????????.  */
  // const {birthyear, birthmonth, birthday} = formData;
  // const birthdate = [birthyear,birthmonth,birthday].join('-');
  // setFormData(formData => ({...formData, [birthdate]:birthdate}));
  // console.log({formData});
  
  //onBlur??? input??? ??????????????? ??????
  const onBlurInput= React.useCallback((e)=>{
    const current = e.target;
    try {
      switch(current.name){
        case 'userid':
          RegexHelper.value(current, '?????? ???????????????.');
          RegexHelper.checkId(current, '5~20?????? ?????? ?????????, ????????? ????????????(_),(-)??? ?????? ???????????????.');
          setFormData(formData => ({...formData, [current.name]:current.value}));
          document.querySelector(`p[data-${current.name}]`).innerHTML = '';
          break;
        case 'password':
          RegexHelper.value(current, '?????? ???????????????.');
          RegexHelper.checkPw(current, '8~16??? ?????? ??? ?????????, ??????, ??????????????? ???????????????.');
          setFormData(formData => ({...formData, [current.name]:current.value}));
          document.querySelector(`p[data-${current.name}]`).innerHTML = '';
          document.querySelector('.pwicon').style.color = '#02C75A';
          
          break;
        case 'passwordcheck':
          RegexHelper.value(current, '?????? ???????????????.');
          RegexHelper.compareTo(signup_form.current.password,current, '??????????????? ???????????? ????????????.');
          setFormData(formData => ({...formData, [current.name]:current.value}));
          document.querySelector(`p[data-${current.name}]`).innerHTML = '';
          document.querySelector('.pwcheckicon').style.color= '#02C75A';
          break;
        case 'username':
          RegexHelper.value(current, '?????? ???????????????.');
          setFormData(formData => ({...formData, [current.name]:current.value}));
          document.querySelector(`p[data-${current.name}]`).innerHTML = '';
          break;
        case 'sex':
          RegexHelper.value(current, '?????? ???????????????.');
          document.querySelector(`p[data-${current.name}]`).innerHTML = '';
          setFormData(formData => ({...formData, [current.name]:current.value}));
          break;
        case 'birthyear':
          RegexHelper.value(current, '????????? ?????? 4????????? ???????????? ???????????????.');
          RegexHelper.birthYearNum(current,'????????? ?????? 4????????? ???????????? ???????????????.');
          document.querySelector(`p[data-${current.name}]`).innerHTML = '';
          setFormData(formData => ({...formData, [current.name]:current.value}));
          break;
        case 'birthmonth':
          RegexHelper.value(current, '????????? ?????? ???????????????.');
          document.querySelector(`p[data-${current.name}]`).innerHTML = '';
          setFormData(formData => ({...formData, [current.name]:current.value}));
          break;
        case 'birthday':
          RegexHelper.value(current, '????????? ???(??????) 2????????? ???????????? ???????????????.');
          document.querySelector(`p[data-${current.name}]`).innerHTML = '';
          setFormData(formData => ({...formData, [current.name]:current.value}));
          break;
        case 'tel':
          RegexHelper.value(signup_form.current.tel, '?????????????????????.');
          break;
        default:
        }      
      } catch (error) {
        // console.dir(error);
        document.querySelector(`p[data-${current.name}]`).innerHTML = error.message;
        document.querySelector(`p[data-${current.name}]`).style.color='red';
        if(current.name === 'password') {document.querySelector('.pwicon').style.color='red'};
        if(current.name ==='passwordcheck') {document.querySelector('.pwcheckicon').style.color = 'red'};
        setFormData(formData => ({...formData, [current.name]:''}));
        return;
      }
  },[]); //onBlurInput????????? end


//?????????????????? ??????????????? ???????????? ??????????????? ????????? ????????? ??????  ajax???????????? ????????? member???????????? ????????? ???????????? ??????
const useridCheck = () => {
    (async () => {
        let json = null;
        try {
            const response = await axios.get("http://localhost:3001/member");
            json = response.data;
            console.log(json);
        } catch (error) {
            console.error(error);
        }
        //????????? ???????????? ?????? ?????? ---> " ?????? ?????????????????? ????????? ??????????????????." ??????
        //??????????????? ???????????? ---->" ?????? ???????????????!" ??????
        if (json.some((item) => item.userid === formData.userid)) {
            document.querySelector("p[data-userid]").innerHTML =
                "?????? ?????????????????? ????????? ????????? ?????????.";
            document.querySelector("p[data-userid]").style.color = "red";
        } else {
            document.querySelector("p[data-userid]").innerHTML =
                "?????? ???????????????!";
            document.querySelector("p[data-userid]").style.color = "#02C75A";
        }
    })();
};

React.useEffect(()=>{
  if(formData.userid){
    useridCheck();
  }
},[formData.userid]);


//???????????? ?????? button ???????????????
  const onClickBtn=(e)=>{
    try {
      RegexHelper.value(signup_form.current.tel, '????????? ???????????? ???????????????.');
      RegexHelper.cellphone(signup_form.current.tel, '????????? ???????????? ???????????????.');
      document.querySelector('p[data-authorize').innerHTML = '??????????????? ??????????????????.(???????????? 30???)<br/>??????????????? ?????? ????????? ???????????? ????????? ???????????? ???????????? ?????????.<br/>?????? ????????? ???????????????, ????????????????????? ??????????????? ?????? ??? ????????????.';
      // console.log(authorizationnum.current)
      authorizationnum.current.disabled=false;
      document.querySelector('p[data-authorize').style.color='#02C75A';
    } catch (e) {
      document.querySelector('p[data-authorize').innerHTML = e.message;
      document.querySelector('p[data-authorize').style.color='red';

      return;
    }
  };
  
//axios post ??????
  const onSubmitForm=(e)=>{
    e.preventDefault();

    if(formData.userid){
      useridCheck();
    }else{
      window.alert('??????????????? ?????? ????????? ????????????????????????.');
      return;
    }

    let json=null;
    (async ()=>{
      try {
        const response = await refetch({
          data:{
            userid: formData.userid,
            password: formData.password,
            username:formData.username,
            birthdate: [formData.birthyear, formData.birthmonth, formData.birthday].join('-'),
            sex:formData.sex,
            tel: formData.tel
          }
        })
        json=response.data;
      } catch (e) {
        console.log(e);
        window.alert(e.message); 
      } 
      
      if(json !== null){
        window.alert('????????? ???????????????.');
      }
  })();
};

  return (
    <AppContainer>
      <div className="content-wrap">
      <div className="logo">
        <img src={process.env.PUBLIC_URL + '/assets/img/logo_naver.png'} alt="logo_naver" />
      </div>
      <form ref={signup_form} onSubmit={onSubmitForm}>
        <div className="input-box">
          <label htmlFor="">?????????</label>
          <StyledInput type="text" name="userid" id="userid"  onBlur={onBlurInput} placeholder='@naver.com' />
          <p data-userid='errorMessage'></p>
        </div>
        <div className="input-box">
          <label htmlFor="">????????????</label>
          <div className="icon-position">
          <StyledInput type="password" name="password" id="password" onBlur={onBlurInput} />
          <FontAwesomeIcon icon={faLock} className='pwicon' />
          </div>
          <p data-password='errorMessage'></p>
        </div>
        <div className="input-box">
          <label htmlFor="">???????????? ?????????</label>
          <div className="icon-position">
          <StyledInput type="password" name="passwordcheck" id="passwordCheck"  onBlur={onBlurInput} />
          <FontAwesomeIcon icon={faLock} className='pwcheckicon'/>
          </div>
          <p data-passwordcheck='errorMessage' ></p>
        </div>
        <div className="input-box">
          <label htmlFor="">??????</label>
          <StyledInput type="text" name="username" id="username"  onBlur={onBlurInput} />
          <p data-username='errorMessage'></p>
        </div>
        <div className="input-box">
          <label htmlFor="birthyear">????????????</label>
          <div className="birthdate-box">
            <StyledInput type="text" className="birthdate" name="birthyear" id="birthyear" placeholder="???(4???)" onBlur={onBlurInput} maxLength={4}/>
            <StyledSelect className="birthdate" name="birthmonth" onBlur={onBlurInput}>
              <option value="">???</option>
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
            <StyledInput type="text" className="birthdate" name="birthday" placeholder="???" onBlur={onBlurInput} maxLength={3}/>
          </div>
            <p data-birthyear='errorMessage' data-birthmonth='errorMessage' data-birthday='errorMessage'></p>
        </div>
        <div className="input-box">
          <label htmlFor="sex">??????</label>
          <StyledSelect name="sex" id="sex" onBlur={onBlurInput}>
            <option value="">??????</option>
            <option value="male">??????</option>
            <option value="female">??????</option>
            <option value="no">????????????</option>
          </StyledSelect>
          <p data-sex='errorMessage'></p>
        </div>
        <div className="input-box">
          <label htmlFor="">
            ?????? ?????? ?????????<span>(??????)</span>
          </label>
          <StyledInput type="text" name="" id="" placeholder="????????????"/>
        </div>
        <div className="input-box">
          <label htmlFor="tel">????????????</label>
          <StyledSelect name="nation" >
            <option value="korea" >
              ???????????? +82
            </option>
          </StyledSelect>
          <div className="authorize-box">            
            <StyledInput type="text" name="tel" id="tel"  onBlur={onBlurInput} placeholder='???????????? ??????'/>
            <StyledButton type='button' onClick={onClickBtn}>???????????? ??????</StyledButton>
          </div>
          <StyledInput type='text' name='authorizationnum' ref={authorizationnum} placeholder="??????????????? ???????????????" disabled onBlur={onBlurInput}></StyledInput>
          <p data-authorize='errorMessage' data-tel='errorMessage'></p>
        </div>
        <StyledButton type="submit">????????????</StyledButton>
      </form>
      <footer>
        <ul>
          <li>
            <a href="https://policy.naver.com/rules/service.html" target="_blank">????????????</a>
          </li>
          <li>
            <a href="https://policy.naver.com/policy/privacy.html" target="_blank">????????????????????????</a>
          </li>
          <li>
            <a href="https://policy.naver.com/rules/disclaimer.html" target="_blank">????????? ????????? ????????????</a>
          </li>
          <li>
            <a href="https://help.naver.com/support/service/main.help?serviceNo=532&_membership_p.membership_p.membership_26&from=alias" target="_blank">???????????? ????????????</a>
          </li>
        </ul>
        <div>??? NAVER Corp.</div>
      </footer>
      </div>
    </AppContainer>
  );
}

export default App;
