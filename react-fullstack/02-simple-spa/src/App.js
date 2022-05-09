import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import DepartmentGet from "./pages/DepartmentGet";
import DepartmentPath from "./pages/DepartmentPath";

function App() {
  return (
    <div>
      <h1> 02 - simple - spa </h1> <hr />
      <nav>
        <Link to="/"> [HOME] </Link> <Link to="/about"> [ABOUT] </Link>{" "}
      </nav>
      <a href="/about"> 일반링크 </a>
      {/* HTTP GET파라미터를 포함하는 링크 구성 */}
      <Link to="/department_get?id=101&msg=hello">[컴퓨터공학과]</Link>
      <Link to="/department_get?id=102&msg=world">[멀티미디어학과]</Link>
      <Link to="/department_path/201/hello">[전자공학과]</Link>
      <Link to="/department_path/202/world">[기계공학과]</Link>
      {/* {페이지 역할을 할 컴포넌트 명시하기} */}
      <Routes>
        {" "}
        {/*  */} <Route path="/" element={<Home />} exact={true} />{" "}
        <Route path="/about" element={<About />} /> {/* GET파라미터 사용 */}{" "}
        <Route path="/department_get" element={<DepartmentGet />} />{" "}
        {/* Path파라미터는 URL형식에 변수의 위치와 이름을 정해줘야한다. */}
        <Route path="/department_path/:id/:msg" element={<DepartmentPath />} />
      </Routes>
    </div>
  );
}

export default App;
