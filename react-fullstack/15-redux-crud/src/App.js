import React, {memo} from 'react';
import {Routes, Route} from 'react-router-dom';

import DepartmentList from './pages/DepartmentList';
import DepartmentAdd from './pages/DepartmentAdd';
import DepartmentEdit from './pages/DepartmentEdit';

import ProfessorList from './pages/ProfessorList';
import ProfessorEdit from './pages/ProfessorEdit';
import ProfessorAdd from './pages/ProfessorAdd';
import ProfessorDetail from './pages/ProfessorDetail';


function App() {
  return (
    <div>
      <h1>Redux-CRUD</h1>
      <hr/>
      <Routes>
        {/* <Route path='/' exact element={<DepartmentList/>}/>
        <Route path='/department_add' element={<DepartmentAdd/>}/>
        <Route path='/department_edit/:deptno' element={<DepartmentEdit/>}/> */}
        
        <Route path='/' exact element={<ProfessorList/>}/>
        <Route path='/professor_add' element={<ProfessorAdd/>}/>
        <Route path='/professor_detail/:profno' element={<ProfessorDetail/>}/>
        <Route path='/professor_edit/:profno' element={<ProfessorEdit/>}/>
        

      </Routes>
    </div>
  );
}

export default memo(App);
