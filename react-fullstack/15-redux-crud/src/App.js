import React, {memo} from 'react';
import {Routes, Route} from 'react-router-dom';

import DepartmentList from './pages/DepartmentList';
import DepartmentAdd from './pages/DepartmentAdd';
import DepartmentEdit from './pages/DepartmentEdit';


function App() {
  return (
    <div>
      <h1>Redux-CRUD</h1>
      <hr/>
      <Routes>
        <Route path='/' exact={true} element={<DepartmentList/>}/>
        <Route path='/department_add' element={<DepartmentAdd/>}/>
        <Route path='/department_edit/:deptno' element={<DepartmentEdit/>}/>
      </Routes>
    </div>
  );
}

export default memo(App);
