import React from 'react'
import Aboutimg from '../../assets/Aboutimg.png'
import cursorIcon from '../../assets/cursorIcon.png'
import serverIcon from '../../assets/serverIcon.png'
import './About.css'

function About() {
  return (
    <section className="about"id='about'>

      <div className="about-box">

        <img className="about-img" src={Aboutimg} alt="profile" />

        <div className="about-content">

          <div className="about-item">
            <img src={cursorIcon} alt="frontend" />
            <div>
              <h3>Frontend Developer</h3>
              <p>I am a passionate Frontend Developer focused on building responsive and interactive websites. I have experience in HTML, CSS, JavaScript, and React. I enjoy learning new technologies and improving my development skills through projects.</p>
            </div>
          </div>

          <div className="about-item">
            <img src={serverIcon} alt="backend" />
            <div>
              <h3>Backend Developer</h3>
              <p>I am an aspiring Backend Developer learning the MERN stack. I have experience with Node.js, Express, and MongoDB, and I enjoy building APIs and backend systems. I am continuously learning and working on projects to improve my full-stack development skills.</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default About