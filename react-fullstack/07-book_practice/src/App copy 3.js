import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./part9,13/Home";
import About from "./part9,13/About";
import Profiles from "./part9,13/Profiles";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* queryString을 활용한 경로 설정 */}
          <Link to="/about?detail=true">About</Link>
        </li>
        <li>
          <Link to="/info">Info</Link>
        </li>
        <li>
          <Link to="/profiles">profiles</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" exact={true} element={<Home />} />

        {/* 동일한 Route에 path여려개 등록가능 */}
        <Route path="/about" element={<About />} />
        <Route path="/info" element={<About />} />

        {/* 서브라우팅설정된 컴포넌트 */}
        <Route path="/profiles/*" element={<Profiles />} />
      </Routes>
    </div>
  );
}

export default App;
