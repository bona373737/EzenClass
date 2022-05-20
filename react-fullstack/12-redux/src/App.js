import React from "react";
import {Routes, Route}  from 'react-router-dom';

import MenuLink from "./components/MenuLink";
import Counter from "./Pages/Counter";

function App() {
  return (
    <div>
      <h1>Redux Toolkit</h1>
      <nav>
        <MenuLink to='/counter'>Counter</MenuLink>
        <MenuLink to='/department'>Department</MenuLink>
      </nav>
      <hr />
      <Routes>
        <Route path="/counter" element={<Counter/>}/>
      </Routes>
    </div>

  );
}

export default App;
