import React, { useState } from 'react';
import axios from 'axios';

import Spinner from './components/Spinner';
import Professor from './components/Professor';
import Student from './components/Student';


function App() {
  const [ department, setDepartment] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ selectedDeptno, setSelectedDeptno] = useState(-1);

  React.useEffect(()=>{
    setLoading(loading=>true);

    (async()=>{
      let json=null;
      try {
        const respons = await axios.get('http://localhost:3001/department');
        json=respons.data;
      } catch (e) {
        console.error(e);
        alert('ajax통신 실패');
      }finally{
        setLoading(loading=>false);
      }

      if(json !=null){
        setDepartment(department=>json);
      }

    })();
  },[]);

  //select값이 변경되면 선택된 학과의  학과번호를 저장-->props로 전달할 데이터
  const selectDepartment=React.useCallback((e)=>{
    // let {deptno}=e.target.dataset;  
    // setSelectedDeptno(selectedDeptno=>deptno);
    // setSelectedDeptno(selectedDeptno=>e.target.value);
    const current= e.target;
    const id=parseInt(current[current.selectedIndex].value);
    setSelectedDeptno(id);
  });


  return (
    <>
      <h1>Exam 09</h1>
      <hr />
      <Spinner visible={loading}/>
      <select name="" id="" onChange={selectDepartment}>
        {
          department.map((v,i)=>{
            return(
              // <option key={i} data-deptno={v.id}>{v.dname}</option>
              <option key={v.id} value={v.id} >{v.dname}</option>
              )
            })
          }
      </select>
      <Student deptno={selectedDeptno}/>
      <Professor deptno={selectedDeptno}/>
    </>
  );
}
export default App;
