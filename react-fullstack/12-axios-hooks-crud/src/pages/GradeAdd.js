import React from 'react';
import useAxios from 'axios-hooks';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

import Spinner from '../components/Spinner';
import Table from '../components/Table';

import regeHelper from '../regex/RegexHelper';

//Table컴포넌트의 CSS를 확장한 컴포넌트
const TableEx = styled(Table)`
  margin-top: 50px;
  margin-bottom: 15px;

  .inputWrapper{
    padding: 0;
    position: relative;
    text-align: left;
    .field{
      box-sizing: border-box;
      display: block;
      position: absolute;
      left: 0;
      top:0;
      width: 100%;
      height: 100%;
      border: 0;
      padding: 0 10px;
      outline: none;
      font-size: 14px;
    }
    label{
      margin-left: 7px;
      margin-right: 10px;

      input{
        margin-right: 10px;
      }
    }
  }
`;

const GradeAdd = () => {
  //저장완료 후 목록으로 돌아가기 위한 페이지 강제이동 함수 생성
  const navigate = useNavigate();

  //백엔드에 데이터 저장을 위한 ajax요청 객체 생성_메뉴얼전송모드(함수 수동실행)
  const [{loading},refetch] = useAxios({
    url:'http://localhost:3001/grade',
    method:'POST'
  },{manual:true});

  //<form>의 submit버튼이 눌러졌을때 호출될 이벤트헨들러
  const onSubmit=(e)=>{
    e.preventDefault();
    
    //입력값에 대한 유효성 검사 코드
    const current =e.target;
    try {
      regeHelper.value(current.name, '이름을 입력하세요');
      regeHelper.kor(current.name, '이름은 한글로 입력하세요');
      regeHelper.minLength(current.name, 2, '이름은 최소 2글자 이상 입력해야 합니다.');
      regeHelper.maxLength(current.name, 10, '이름은 최대 10글자까지 입력 가능합니다.');
      regeHelper.value(current.level, '학년을 선택하세요');
      regeHelper.check(current.sex, '성별을 선택하세요');
      regeHelper.num(current.kor, '국어점수는 숫자만 입력 가능합니다.');
      regeHelper.value(current.eng, '이름을 입력하세요');
      regeHelper.num(current.eng, '영어점수는 숫자만 입력 가능합니다.');
      regeHelper.value(current.math, '이름을 입력하세요');
      regeHelper.num(current.math, '수학점수는 숫자만 입력 가능합니다.');
      regeHelper.value(current.sin, '이름을 입력하세요');
      regeHelper.num(current.sin, '과학점수는 숫자만 입력 가능합니다.');
    } catch (e) {
      window.alert(e.message);
      e.field.focus();
      return;
    }

    //입력받은 값 취득하기
    const name = e.target.name.vlaue;
    const level = e.target.level.vlaue;
    const sex = e.target.sex.vlaue;
    const kor = e.target.kor.vlaue;
    const eng = e.target.eng.vlaue;
    const math = e.target.math.vlaue;
    const sin = e.target.sin.vlaue;
    

  
  let json=null;
  (async ()=>{
    try {
      const response = await refetch({
        data:{
          name:name,
          level:parseInt(level),
          sex: sex,
          kor:parseInt(kor),
          eng:parseInt(eng),
          math:parseInt(math),
          sin:parseInt(sin)
        }
      })
      json=response.data;
    } catch (e) {
      console.log(e);
      window.alert(`[ ${e.response.status} ] ${e.response.statusText} \n ${e.message}`); 
    } 
    
    if(json !== null){
      window.alert('저장되었습니다.');
      //목록페이지로 강제이동
      //window.location.href=url 기능과 동일함 대신 React의 navigate는 SPA특성에 맞게 실재 페이지가 이동되는 것이 아니다.
      navigate('/')
    }
  })();
}
  
  return (
    <>
      <Spinner visible={loading}/>
      <form onSubmit={onSubmit}>
        <TableEx>
          <colgroup>
            <col width={120}></col>
          </colgroup>
          <tbody>
            <tr>
              <th>이름</th>
              <td className='inputWrapper'> <input className='field' type='text' name='name' /> </td>
            </tr>
            <tr>
              <th>학년</th>
              <td className='inputWrapper'>
                <select name='level' className='field'>
                  <option value="">-----선택하세요-----</option>
                  <option value="1">1학년</option>
                  <option value="2">2학년</option>
                  <option value="3">3학년</option>
                  <option value="4">4학년</option>
                </select>
              </td>
            </tr>
            <tr>
              <th>성별</th>
              <td className='inputWrapper'>
                {/* radio input의 name같은 값들은 배열로 묶인다. */}
                <label><input type='radio' name='sex' value="남자"/>남자</label>
                <label><input type='radio' name='sex' value="여자"/>여자</label>
              </td>
            </tr>
            <tr>
              <th>국어</th>
              <td className='inputWrapper'>
                {/* react에서 number input의 min,max속성은 사용불가...클릭이벤트에서  유효성검사와 함께 직접 구현해야한다. */}
                <input type="number" className='field' name='kor' placeholder='숫자만 입력(0-100)' />
              </td>
            </tr>
            <tr>
              <th>영어</th>
              <td className='inputWrapper'>
                <input type="number" className='field' name='eng' placeholder='숫자만 입력(0-100)' />
              </td>
            </tr>
            <tr>
              <th>수학</th>
              <td className='inputWrapper'>
                <input type="number" className='field' name='math' placeholder='숫자만 입력(0-100)' />
              </td>
            </tr>
            <tr>
              <th>과학</th>
              <td className='inputWrapper'>
                <input type="number" className='field' name='sin' placeholder='숫자만 입력(0-100)' />
              </td>
            </tr>
          </tbody>
        </TableEx>
        <div style={{textAlign: 'center'}}>
          <button type='submit'>저장하기</button>
        </div>
      </form>
    </>
  );
};

export default GradeAdd;