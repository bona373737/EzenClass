import React from "react";
import { Routes, Route } from "react-router-dom";

import Meta from "./components/Meta";
import GradeTable from "./page/GradeTable";

function App() {
  return (
    <div>
      <Meta />

      <h1>성적표</h1>
      <nav>
        <a href="/grade_table/1">1학년</a>&nbsp;|&nbsp;
        <a href="/grade_table/2">2학년</a>&nbsp;|&nbsp;
        <a href="/grade_table/3">3학년</a>&nbsp;|&nbsp;
        <a href="/grade_table/4">4학년</a>
      </nav>
      <hr />

      <Routes>
        <Route path="/grade_table/:grade" element={<GradeTable />} />
      </Routes>
    </div>
  );
}

export default App;
