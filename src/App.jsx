
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import './App.css'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Contact from './components/contact/contact'

function App() {
  return (
    <div className='app'>

      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
