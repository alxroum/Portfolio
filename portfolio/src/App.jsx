import { useEffect, useRef, useState } from 'react'
import './App.css'
import 'animate.css'
import { HashRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

// graphics
import ARlogo from '/AR_Logo_Orange.svg'

// components
import { ProjectCard } from './components/ProjectCard'

// external data
import data from './data/projectData.json'

// pages
import Home from './pages/Home'

function homeSectionRedirect(section) {
  console.log("redirect home");
}

function Nav() {
  return (
    <>
      <div id="nav">
        <div id="nav-logo">
          <img id="logo-img" src={ARlogo} alt="AR Logo"/>
          <span id="logo-text">Alex Rouman</span>
        </div>
        <ul>
          <li><HashLink smooth to="#about">About</HashLink></li>
          
          <li><HashLink smooth to="#projects">Projects</HashLink></li>
          <li><HashLink smooth to="#experience">Experience</HashLink></li>
          <li><HashLink smooth to="#contact">Contact</HashLink></li>
        </ul>
      </div>
    </>
  )
}

export function grabProjectData() {
  return data;
}

export default function App() {

  return (
    <>
      <Router>
        <Nav/>
        <Routes>
            {/* Login and SignUp are always accessible */}
            <Route path='/' element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
        </Routes>
      </Router>
    </>
  )
}