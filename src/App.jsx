import './App.css';
import {HashRouter, Routes, Route} from 'react-router-dom'
import { Home, NavBar } from './import_And_export/import_And_export';



function App() {

  return (
    <HashRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App
