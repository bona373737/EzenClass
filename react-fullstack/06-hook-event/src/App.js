import { Routes, Route } from "react-router-dom";

import MenuLink from "./components/MenuLink";

import MyState from "./pages/MyState";
import DataRange1 from "./pages/DataRange1";
import DataRange2 from "./pages/DataRange2";
import MyMemo from "./pages/MyMemo";
import MyReducer from "./pages/MyReducer";

function App() {
  return (
    <div>
      <h1>06-hook-event</h1>
      <nav>
        <MenuLink to="/mystate">MyState</MenuLink>
        <MenuLink to="/datarange1">DataRange1</MenuLink>
        <MenuLink to="/myreducer">MyReducer</MenuLink>
        <MenuLink to="/datarange2">DataRange2</MenuLink>
        <MenuLink to="/mymemo">MyMemo</MenuLink>
      </nav>
      <hr />
      <Routes>
        <Route path="/mystate" element={<MyState />} />
        <Route path="/datarange1" element={<DataRange1 />} />
        <Route path="/myreducer" element={<MyReducer />} />
        <Route path="/datarange2" element={<DataRange2 />} />
        <Route path="/mymemo" element={<MyMemo />} />
      </Routes>
    </div>
  );
}

export default App;
