import React from 'react';
import useAxios from 'axios-hooks';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Spinner from '../components/Spinner';
import Table from '../components/Table';

const LinkContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: #fff;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 10px 0;
`;
const TopLink = styled(NavLink)`
  margin-right: 15px;
  display: inline-block;
  font-size: 16px;
  padding: 7px 19px 5px 10px;
  border: 1px solid #eee;
  background-color: #fff;
  color: #000;
  text-decoration: none;
  &:hover{
    background-color: #06f2;
  }
`;

const GradeList = () => {
  //화면에 표시할 성적표 데이터 저장 변수
  const [grade, setGrade] = React.useState([]);
  //백엔드로부터 데이터 불러오기_자체캐시기능 방지함
  const [{data,loading1,error}, refetch] = useAxios(' http://localhost:3001/grade',{
    useCache:false
  })
  //axios-hooks에 의해 생성된 상태값이 data가 변경되었을때 실행될 hook
  React.useEffect(()=>{
    //ajax통신으로 받아온 원본데이터를 grede상태값에 복사한다.
    setGrade(data);
  },[data])

  //백엔드에 삭제요청 전송
  //자체 캐시기능 방지, 삭제버튼 이벤트에 의해 호출되어야 하므로 메뉴얼 실행모드 
  const [{loading2},sendDelete] = useAxios({method: 'DELETE'},{useCache:false,manual:true});

  //삭제버튼클릭시 호출 될 이벤트 헨들러
  const onDeleteClick=(e)=>{
    e.preventDefault();
    const id= parseInt(e.target.dataset.id);
    const name = e.target.dataset.name;

    if(window.confirm(`정말 ${name}학생의 성적을 삭제하시겠습니까?`)){
      (async()=>{
        let json = null;
        try {
          const response = await sendDelete({
            method: 'DELETE',
            url: `http://localhost:3001/grade/${id}`
          })
        } catch (e) {
          console.error(e);
          window.alert(`[${e.response.status}] ${e.response.statusText}\n${e.message}`)
        }
        if(json != null){
          setGrade(grade=>grade.filter((v,i)=>{return v.id !== id}));
        }
      })();
    }
  }

  return (
    <div>
      <Spinner visible={loading1 || loading2 }/>

      <LinkContainer>
        <TopLink to='add'>성적 추가하기</TopLink>
      </LinkContainer>

      {error? (
        <div>
          <h1>Oops~!!! {error.code} Error</h1>
          <hr />
          <p>{error.message}</p>
        </div>
      ):(
        <Table>
          <thead>
            <tr>
              <th rowSpan={2} >No.</th>
              <th rowSpan={2} >이름</th>
              <th rowSpan={2} >학년</th>
              <th rowSpan={2} >성별</th>
              <th colSpan={4} >과목별 점수</th>
              <th colSpan={2} >집계</th>
              <th colSpan={2} rowSpan={2}>수정/삭제</th>
            </tr>
            <tr>
              <th>국어</th>
              <th>영어</th>
              <th>수학</th>
              <th>과학</th>
              <th>총점</th>
              <th>평균</th>
            </tr>
          </thead>
          <tbody>
            {grade && grade.map(({id,name,level,sex,kor,eng,math,sin},i)=>{
              return(
                <tr key={i}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{level}</td>
                  <td>{sex}</td>
                  <td>{kor}</td>
                  <td>{eng}</td>
                  <td>{math}</td>
                  <td>{sin}</td>
                  <td>{kor+eng+math+sin}</td>
                  <td>{(kor+eng+math+sin)/4}</td>
                  <td>
                    <NavLink to={ `edit/${id}` }> 수정하기 </NavLink>
                  </td>
                  <td>
                    {/* 삭제버튼을 눌렀을때 삭제하려는 데이터가 무엇이지 식별 되야 하므로 
                    해당 태그에 dataset으로 id와 name값을 저장해 준다. */}
                    <a href="#!" data-id={id} data-name={name} onClick={onDeleteClick} >삭제하기</a>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      )
    }
    </div>
  );
};

export default GradeList;