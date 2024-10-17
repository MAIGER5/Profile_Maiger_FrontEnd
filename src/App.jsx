import React, { useState } from 'react';
import './App.css';
import {HashRouter, Routes, Route} from 'react-router-dom'
import { Home, BaseView, NavBar, ProfesionalProfile } from './import_And_export/import_And_export';



function App() {

  return (
    <HashRouter>
      {/* <NavBar/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profesionalProfile' element={<ProfesionalProfile/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App
