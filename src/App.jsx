import './App.css'
import { useState } from 'react'
import {Route, Routes, Link,Router} from "react-router-dom"
import Aufrufen from './Components/Aufrufen'
import Speichern from './Components/Speichern'
import Firebase from "../firebase/Firebase"




function App() {



  return (
    <div className="App">
      <div className="header">
      <h1 className="uberschrift">Save amer</h1>
      <div className='tabs'>
        <span className="tabs__item"><Link to="/aufrufen">aufrufen</Link></span>
        <span className="tabs__item"><Link to="/speichern">speichern</Link></span>
      </div>
      </div>
      <Routes>
        <Route path="/aufrufen" element={<Aufrufen/>}  />
        <Route path="/speichern" element={<Speichern/>}  />
      </Routes>
    </div>

  )
}

export default App
