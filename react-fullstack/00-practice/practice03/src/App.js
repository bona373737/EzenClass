import React from "react";
import { Routes, Route } from "react-router-dom";
import Myschool from "./Myschool";

function App() {
  return (
    <div>
      <h1>연습문제 3번</h1>
      <nav>
        <a href="/myschool/department">학과목록</a> &nbsp;|&nbsp;
        <a href="/myschool/professor">교수목록</a> &nbsp;|&nbsp;
        <a href="/myschool/student">학생목록</a>
      </nav>

      <Routes>
        <Route path="/myschool/:search" element={<Myschool />} />
      </Routes>
    </div>
  );
}

export default App;
