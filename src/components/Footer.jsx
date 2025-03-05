import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Importando los íconos

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Sergi Herrador. Todos los derechos reservados.</p>

      <div className="social-links">
        <a
          href="https://github.com/sergiherradorITB"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/sergi-herrador-d%C3%ADaz/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://www.instagram.com/chegiwrx/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaInstagram size={30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
