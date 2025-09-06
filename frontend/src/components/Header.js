import React from 'react';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header>
      <nav>
        <h1>Adari Samuel Prasad</h1>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="resume.pdf" download className="resume-btn">Resume</a></li>
          <li>
            <button id="themeToggle" onClick={toggleTheme}>
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
