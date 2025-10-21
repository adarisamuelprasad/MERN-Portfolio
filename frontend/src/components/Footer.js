import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-socials">
        <a href="mailto:samuelprasadadari@gmail.com" title="Email" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://www.linkedin.com/in/adarisamuelprasad" title="LinkedIn" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        {/* <a href="tel:+919515237789" title="Phone">
          <i className="fas fa-phone"></i>
        </a> */}
      </div>
      <p>© {new Date().getFullYear()} Designed & Coded by Adari Samuel Prasad.</p>
    </footer>
  );
};

export default Footer;