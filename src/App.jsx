import React, { useRef } from 'react'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Introduccion from './components/Introduccion'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

const App = () => {

  
  return (
    <div className='w-full h-screen bg-[rgba(0,0,0,.86)] overflow-x-hidden lg:overflow-x-visible'>
      <Navbar />
      <Introduccion />
      <Projects />
      <Skills />
      <AboutMe />
      <Contact />
    </div>
  )
}

export default App