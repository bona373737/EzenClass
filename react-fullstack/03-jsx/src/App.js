import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import Expr from "./pages/Expr";
import If1 from "./pages/If1";
import If2 from "./pages/If2";
import If3 from "./pages/If3";
import If4 from "./pages/If4";
import Loop1 from "./pages/Loop1";
import Loop3 from "./pages/Loop3";
import Loop2 from "./pages/Loop2";

function App() {
  return (
    <div>
      <h1>03-jsx</h1>

      <nav>
        <Link to="/expr">[Expr]</Link>
        <Link to="/iF1">[IF1]</Link>
        <Link to="/iF2">[IF2]</Link>
        <Link to="/iF3">[IF3]</Link>
        <Link to="/iF4">[IF4]</Link>
        <Link to="/loop1">[Loop1]</Link>
        <Link to="/loop2">[Loop2]</Link>
        <Link to="/loop3">[Loop3]</Link>
      </nav>
      <hr />

      <Routes>
        <Route path="/expr" element={<Expr />} />
        <Route path="/if1" element={<If1 />} />
        <Route path="/if2" element={<If2 />} />
        <Route path="/if3" element={<If3 />} />
        <Route path="/if4" element={<If4 />} />
        <Route path="/loop1" element={<Loop1 />} />
        <Route path="/loop2" element={<Loop2 />} />
        <Route path="/loop3" element={<Loop3 />} />
      </Routes>
    </div>
  );
}

export default App;
