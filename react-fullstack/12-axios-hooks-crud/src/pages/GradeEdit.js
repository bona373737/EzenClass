import React from 'react';
import useAxios from 'axios-hooks';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

import Spinner from '../components/Spinner';
import Table from '../components/Table';
import regexHelper from '../regex/RegexHelper';

//Table컴포넌트의 CSS확장한 컴포넌트
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
      top: 0;
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

const GradeEdit = () => {
  //path파라미터로 전달된 일련번호를 변수로 담기
  const {id} = useParams();
  //데이터수정 후 목록 페이지로 강제 이동하기 위한 함수 생성
  const navigate = useNavigate();

  //수정하기 페이지에 왔을때 수정하려는 데이터의 기존값이 화면에 보여진상태(axios 자동실행모드)
  const [{data, loading, error},refetch] = useAxios(`http://localhost:3001/grade/${id}`);

  //form의 submit버튼이 클릭됬을때 호출될 이벤트헨들러
  const onSubmit =React.useCallback((e)=>{
    e.preventDefault();

    //입력값 유효성 검사
    const current= e.target;
    try {
      regexHelper.value(current.name, '이름을 입력하세요');
      regexHelper.kor(current.name, '이름은 한글로 입력하세요');
      regexHelper.minLength(current.name, 2, '이름은 최소 2글자 이상 입력해야 합니다.');
      regexHelper.maxLength(current.name, 10, '이름은 최대 10글자까지 입력 가능합니다.');
      regexHelper.value(current.level, '학년을 선택하세요');
      regexHelper.check(current.sex, '성별을 선택하세요');
      regexHelper.num(current.kor, '국어점수는 숫자만 입력 가능합니다.');
      regexHelper.value(current.eng, '이름을 입력하세요');
      regexHelper.num(current.eng, '영어점수는 숫자만 입력 가능합니다.');
      regexHelper.value(current.math, '이름을 입력하세요');
      regexHelper.num(current.math, '수학점수는 숫자만 입력 가능합니다.');
      regexHelper.value(current.sin, '이름을 입력하세요');
      regexHelper.num(current.sin, '과학점수는 숫자만 입력 가능합니다.');
    } catch (e) {
      window.alert(e.message);
      return;
    }

    //입력값 취득하기
    const name = e.target.name.vlaue;
    const level = e.target.level.vlaue;
    const sex = e.target.sex.vlaue;
    const kor = e.target.kor.vlaue;
    const eng = e.target.eng.vlaue;
    const math = e.target.math.vlaue;
    const sin = e.target.sin.vlaue;

    let json = null;

    //입력 post,수정 put,삭제 delete 처리는 async-await문법을 사용해야 한다.
    (async()=>{
      try {
        const response = await refetch({
          method: 'PUT',
          data:{
            name: name,
            level: parseInt(level),
            sex: sex,
            kor : parseInt(kor),
            eng : parseInt(eng),
            math : parseInt(math),
            sin : parseInt(sin)
          }
        })
        json=response.data;
      } catch (e) {
        console.error(e);
        window.alert(`[${e.response.status}] ${e.response.statusText} ${e.message}`);
      }
      if(json != null){
        window.alert('수정되었습니다.');
        navigate('/');
      }
    })();
     
  
  
  })
  
  return (
<>
      <Spinner visible={loading}/>
      {
        error? (
          <div>
            <h1>Oops~~!! {error.code} Error </h1>
            <p>{ error.message }</p>
          </div>
        ):(
          //ajax를 통해 조회한 데이터가 있을때만 데이터 표시하기
          data && (            
      <form onSubmit={onSubmit}>
        <TableEx>
          <colgroup>
            <col width={120}></col>
          </colgroup>
          <tbody>
            <tr>
              <th>이름</th>
              <td className='inputWrapper'> <input className='field' type='text' name='name' defaultValue={data.name} /> </td>
            </tr>
            <tr>
              <th>학년</th>
              <td className='inputWrapper'>
                <select name='level' className='field' defaultValue={data.level}>
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
                <label><input type='radio' name='sex' value="남자" defaultChecked={data.sex==='남자'} />남자</label>
                <label><input type='radio' name='sex' value="여자" defaultChecked={data.sex==='여자'} />여자</label>
              </td>
            </tr>
            <tr>
              <th>국어</th>
              <td className='inputWrapper'>
                {/* react에서 number input의 min,max속성은 사용불가...클릭이벤트에서  유효성검사와 함께 직접 구현해야한다. */}
                <input type="number" className='field' name='kor' placeholder='숫자만 입력(0-100)' defaultValue={data.kor} />
              </td>
            </tr>
            <tr>
              <th>영어</th>
              <td className='inputWrapper'>
                <input type="number" className='field' name='eng' placeholder='숫자만 입력(0-100)'defaultValue={data.eng} />
              </td>
            </tr>
            <tr>
              <th>수학</th>
              <td className='inputWrapper'>
                <input type="number" className='field' name='math' placeholder='숫자만 입력(0-100)' defaultValue={data.math} />
              </td>
            </tr>
            <tr>
              <th>과학</th>
              <td className='inputWrapper'>
                <input type="number" className='field' name='sin' placeholder='숫자만 입력(0-100)' defaultValue={data.sin} />
              </td>
            </tr>
          </tbody>
        </TableEx>
        <div style={{textAlign: 'center'}}>
          <button type='submit' >저장하기</button>
        </div>
      </form>
          )
          )
        }
    </>
  );
};

export default React.memo(GradeEdit);