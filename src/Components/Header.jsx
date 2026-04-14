import React from 'react'
import '../styles/header.css'

const Header = () => {
  return (
    
  <header className="header">
      <h2><a href="./hero" className="logo">Nani Gudivaka</a></h2>
      <nav>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
    
  )
}

export default Header