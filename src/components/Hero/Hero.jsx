import React from 'react'
import heroimage from '../../assets/heroimage.jpg'
import './Hero.css'

function Hero() {
  return (
    <section className='container'>
      <div className='content'>
        <h1 className='title'>Hi, I'm Afna Puzhakkal</h1>

        <p className='description'>
          I am a frontend developer with a strong foundation in modern web technologies 
          and currently expanding my expertise in the MERN stack (MongoDB, Express.js, 
          React, and Node.js). I am passionate about building responsive, user-friendly 
          interfaces and continuously improving my development skills.
        </p>

        <a href="mailto:afnapuzhakkal@gmail.com" className='contactbtn'>
          Contact Me
        </a>
      </div>

      <img className='heroimg' src={heroimage} alt="heroimage" />

      <div className="topblur"></div>
      <div className="bottomblur"></div>
    </section>
  )
}

export default Hero