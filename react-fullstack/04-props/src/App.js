import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import Meta from "./components/Meta";
import MyChildren from "./pages/MyChildren";
import MyProps from "./pages/MyProps";
import MyPropTypes from "./pages/MyPropTypes";

function App() {
  return (
    <div>
      <Meta />

      <h1>04-props</h1>
      <nav>
        <Link to="/myprops"> {MyProps} </Link>
        <Link to="/myproptypes"> {MyPropTypes} </Link>
        <Link to="/mychildren"> {MyChildren} </Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/myprops" element={<MyProps />} />
        <Route path="/myproptypes" element={<MyPropTypes />} />
        <Route path="/mychildren" element={<MyChildren />} />
      </Routes>
    </div>
  );
}

export default App;
