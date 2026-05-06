import React, { useState } from 'react'
import './Navbar.css'
import { getImageUrl } from '../../utils'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className='navbar'>
      <a className='title' href="/">portfolio</a>

      <div className='menu'>
        
        {/* Menu Icon */}


        <i className="fa-solid fa-bars menuBtn"
          onClick={() => setMenuOpen(!menuOpen)}
        ></i>

        {/* Menu List */}

        <ul className={`menu-items ${menuOpen ? "open" : ""}`}>
          <li>
            <a href='#about'>About</a>
          </li>

          <li>
            <a href='#experience'>Experience</a>
          </li>

          <li>
            <a href='#projects'>Projects</a>
          </li>
          
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar