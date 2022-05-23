import React from "react";
import MenuLink from "./components/MenuLink";
import { Routes, Route, NavLink } from "react-router-dom";

import News from "./pages/News";

function App() {
  return (
    <div>
      <h1>NewsList Redux</h1>
      <nav>
        <MenuLink to="/news">뉴스목록</MenuLink>
      </nav>
      <hr />
      <Routes>
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
}
export default App;
