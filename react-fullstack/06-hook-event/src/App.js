import { Routes, Route } from "react-router-dom";

import MenuLink from "./components/MenuLink";

import MyState from "./pages/MyState";
import DataRange1 from "./pages/DataRange1";
import DataRange2 from "./pages/DataRange2";
import MyEffect from "./pages/MyEffect";

function App() {
  return (
    <div>
      <h1>06-hook-event</h1>
      <nav>
        <MenuLink to="/mystate">MyState</MenuLink>
        <MenuLink to="/datarange1">DataRange1</MenuLink>
        <MenuLink to="/datarange2">DataRange2</MenuLink>
      </nav>
      <hr />
      <Routes>
        <Route path="/mystate" element={<MyState />} />
        <Route path="/datarange1" element={<DataRange1 />} />
        <Route path="/datarange1" element={<DataRange1 />} />
        <Route path="/datarange2" element={<DataRange2 />} />
      </Routes>
    </div>
  );
}

export default App;
