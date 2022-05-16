import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Spinner from './Spinner';

const ProfessorContainer=styled.div`

`;

const Professor = ({deptno}) => {
  const [loading, setLoading] = useState(false);
  const thead =['교수번호','이름','아이디','직급','급여','입사일','보직수당','소속학과번호'];
  const [tbody,setTbody] = useState([]);

  React.useEffect(()=>{
    setLoading(true);

    (async()=>{
      let json=null;
      try {
        const response = await axios.get(` http://localhost:3001/professor?deptno=${deptno}`);
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
        console.log(tbody);
      }
    })();
  },[deptno]);

  return (
    <ProfessorContainer>
      <Spinner visible={loading}/>
      <h1>교수목록</h1>
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
                    <td>{v.position}</td>
                    <td>{v.sal}</td>
                    <td>{v.hiredate.slice(0,10)}</td>
                    <td>{v.comm}</td>
                    <td>{v.deptno}</td>
                  </tr>
                )
              })
            }
        </tbody>
      </table>
      
    </ProfessorContainer>
  );
};

Professor.propTypes={
  deptno:PropTypes.number.isRequired
}

export default Professor;