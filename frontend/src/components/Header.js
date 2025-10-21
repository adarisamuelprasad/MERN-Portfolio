import React, { useState } from 'react';

const Header = ({ theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <nav className="nav-container">
        <div className="brand">
          <h1>Adari Samuel Prasad</h1>
        </div>

        <button className="menu-toggle" aria-label="toggle menu" onClick={toggleMenu}>
          <i className={menuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
        </button>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          <li><a href="/resume.pdf" download className="resume-btn" onClick={closeMenu}>Resume</a></li>
          <li>
            <button id="themeToggle" onClick={() => { toggleTheme(); closeMenu(); }}>
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
