import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Spinner from './Spinner';

const StudentContainer=styled.div`
  width: 100%;
`;

const Student = ({deptno}) => {
  const [loading, setLoading] = useState(false);
  const thead =['학번','이름','아이디','학년','주민번호','생년월일','연락처','키','몸무게','소속학과번호','담당교수번호'];
  const [tbody,setTbody] = useState([]);

  React.useEffect(()=>{
    setLoading(true);

    (async()=>{
      let json=null;
      try {
        const response = await axios.get(`http://localhost:3001/student?deptno=${deptno}`);
        json=response.data;
        // console.log(json);
      } catch (e) {
        console.error(e);
        alert('ajax 통신 실패');
      }finally{
        setLoading(false);
      }
      if( json != null){
        setTbody(tbody=>json);
        // console.log(tbody);
      }
    })();
  },[deptno]);


  return (
    <StudentContainer>
      <Spinner visible={loading}/>
      <h1>학생목록</h1>
      <table border={1}>
        <thead>
          <tr>
            {
              thead.map((v,i)=><th key={i}>{v}</th>)
            }
          </tr>
        </thead>
        <tbody>
            {
              tbody.map((v,i)=>{
                return(
                  <tr key={i}>
                    <td>{v.id}</td>
                    <td>{v.name}</td>
                    <td>{v.userid}</td>
                    <td>{v.grade}</td>
                    <td>{v.idnum.slice(0,6) + '-********'}</td>
                    <td>{v.birthdate.slice(0,10)}</td>
                    <td>{v.tel}</td>
                    <td>{v.height}</td>
                    <td>{v.weight}</td>
                    <td>{v.deptno}</td>
                    <td>{v.profno}</td>
                  </tr>
                )
              })
            }
        </tbody>
      </table>
    </StudentContainer>
  );
};

Student.propTypes={
  deptno:PropTypes.number.isRequired
}

export default Student;