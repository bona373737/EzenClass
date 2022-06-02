import React from "react";
import {Routes, Route} from 'react-router-dom';

import Top from "./components/Top";
import Covid19 from './pages/Covid19';


function App() {
  return (
    <>
      <Top/>
      <Routes>
        <Route path='/:api' element={<Covid19/>}/>
      </Routes>
    </>
  );
}

export default App;


