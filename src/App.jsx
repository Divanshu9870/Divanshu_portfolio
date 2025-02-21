import { useEffect, useState } from 'react'
import Navbar1 from './component/Navbar1'


import './App.css'
import Home from './component/Home'
import Experience from './component/Experience'
import Skills from './component/Skills'
import Projects from './component/Projects'
import Contact from './component/Contact'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {

useEffect(()=>{
  AOS.init()
  document.title='Portfolio'
},[])
  return (
    <>
    <Navbar1/>
    <Home/>
    <Experience/>
    <Skills/>
    <Projects/>
    <Contact/>
    </>
  )
}

export default App
