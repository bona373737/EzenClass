import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Department from "./component/Department";
import Professor from "./component/Professor";
import Student from "./component/Student";

import navStyle from "./assets/css/navStyle.module.css";
import tableStyle from "./assets/css/tableStyle.module.css";

function App() {
  return (
    <div>
      <h1> Exam05 </h1>
      <nav className={navStyle.navBack}>
        <NavLink className={navStyle.linkBtn} to="/department">
          학과목록
        </NavLink>
        &nbsp;|&nbsp;
        <NavLink className={navStyle.linkBtn} to="/professor">
          교수목록
        </NavLink>
        &nbsp;|&nbsp;
        <NavLink className={navStyle.linkBtn} to="/student">
          학생목록
        </NavLink>
        &nbsp;|&nbsp;
      </nav>
      <div className={tableStyle.back}>
        <Routes>
          <Route path="/department" element={<Department />} />
          <Route path="/professor" element={<Professor />} />
          <Route path="/student" element={<Student />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
