import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "../styles/header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <h2>
        <a href="#hero" className="logo">
          Nani Gudivaka
        </a>
      </h2>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FaBars />
      </button>

      <nav className={menuOpen ? "nav active" : "nav"}>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;