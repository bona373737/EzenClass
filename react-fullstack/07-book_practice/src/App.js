import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Profiles from "./part9,13/Profiles";
import Home from "./part9,13/Home";

function App() {
  const active = {
    background: "black",
    color: "red",
  };

  return (
    <div>
      <NavLink to="/">하하</NavLink>
      <NavLink to="/nana">스타일</NavLink>

      <Routes>
        <Route path="/" exact element={<Home />} />
        {/* <Route path="/nana" element={<Profiles />} /> */}
        <Route
          path="/nana"
          render={() => {
            <div>사용자를 선택해주세요</div>;
          }}
        />
      </Routes>
    </div>
  );
}

export default App;
