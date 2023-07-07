import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
 import { Header,HomePage, ProjectsPage, ContactPage ,Footer} from './components';
import {Route, Routes} from "react-router-dom";
import "../style/style.css";
 

function App() {
  

  return (
    <div>
<Header />

      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/projects" element={<ProjectsPage/>}/>
      <Route path="/contacts" element={<ContactPage/>}/>
      </Routes>

      <Footer/>
    </div>
  )
}

export default App
