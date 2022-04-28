import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import InlineCss from "./pages/InlineCss";
import CssClass from "./pages/CssClass";
import CssModule from "./pages/CssModule";
import Scss from "./pages/Scss";
import ScssModule from "./pages/ScssModule";
import StyledComponent from "./pages/StyledComponent";
import News from "./pages/News";

import "./assets/css/menu.css";

function App() {
  const myStyle = {
    fontWeight: "bold",
    color: "#b82514",
    textDecoration: "none",
    marginRight: "10px",
  };

  return (
    <div>
      <h1 style={myStyle}>04-stylesheet</h1>

      <nav>
        <NavLink className="normalLink" to="/inline_css">
          InlineCss
        </NavLink>
        <NavLink className="normalLink" to="/css_class">
          CssClass
        </NavLink>
        <NavLink className="normalLink" to="/css_module">
          CssModule
        </NavLink>
        <NavLink className="normalLink" to="/scss">
          Scss
        </NavLink>
        <NavLink className="normalLink" to="/scss_module">
          SCssModule
        </NavLink>
        <NavLink className="normalLink" to="/styled_component">
          StyledComponent
        </NavLink>
        <NavLink className="normalLink" to="/news">
          News(Demo)
        </NavLink>
      </nav>
      <hr />

      <Routes>
        <Route path="/inline_css" element={<InlineCss />} />
        <Route path="/css_class" element={<CssClass />} />
        <Route path="/css_module" element={<CssModule />} />
        <Route path="/scss" element={<Scss />} />
        <Route path="/scss_module" element={<ScssModule />} />
        <Route path="/styled_component" element={<StyledComponent />} />
        {/* sub Route페이지가 있는 경우 경로 뒤에 * 명시하기 */}
        <Route path="/news/*" element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
