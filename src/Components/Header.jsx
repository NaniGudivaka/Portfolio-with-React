import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import "../styles/header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => {
      setMenuOpen(false);
    };

    if (menuOpen) {
      document.addEventListener("click", closeMenu);
    }

    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [menuOpen]);

  return (
    <header
      className="header"
      onClick={(e) => e.stopPropagation()}
    >
      <h2>
        <a href="#hero" className="logo">
          Nani Gudivaka
        </a>
      </h2>

      <button
        className="menu-btn"
        onClick={(e) => {
          e.stopPropagation();
          setMenuOpen(!menuOpen);
        }}
      >
        <FaBars />
      </button>

      <nav className={menuOpen ? "nav active" : "nav"}>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;