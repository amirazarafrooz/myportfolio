import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
 import { Header,HomePage, ProjectsPage, ContactPage ,Footer} from '../src/components';
import {Route, Routes} from "react-router-dom";
import "../css/style.css";
import "../css/header.css";
import "../css/button.css";
import "../css/herosection.css";
import "../css/aboutmesection.css";
import "../css/cardproject.css";
import "../css/projectssection.css";

function App() {
  

  return (
    <div>
<Header />

      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/projects" element={<ProjectsPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      </Routes>

      <Footer/>
    </div>
  )
}

export default App
