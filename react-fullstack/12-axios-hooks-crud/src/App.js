import React from "react";
import {Routes, Route} from 'react-router-dom';
import GradeList from './pages/GradeList';
import GradeAdd from './pages/GradeAdd';
import GradeEdit from './pages/GradeEdit'

function App() {
  return (
    <>
      <h1>11-axios-hooks-CRUD</h1>
      <Routes>
        <Route path="/" exact={true} element={<GradeList/>} />
        <Route path="/add" exact={true} element={<GradeAdd/>} />
        <Route path="/edit/:id" exact={true} element={<GradeEdit/>} />
      </Routes>

    </>
  );
}

export default App;
