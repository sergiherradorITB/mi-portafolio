import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Importando los íconos

const Home = () => {
  return (
    <div className="home">
      <header className="hero-section">
        <h1>Sergi Herrador Díaz</h1>
        <p>Soy Software Engineer en CaixaBank Tech, especializado en backend y con experiencia en desarrollo fullstack. </p>
        <p>
            <a href="mailto:sergiherrador44@gmail.com" target="_blank">sergiherrador44@gmail.com</a>
        </p>

        {/* Foto de perfil */}
        <div className="profile-photo">
          <img src="public\assets\images\profile-photo.jpg" alt="Sergi Herrador Díaz" />
        </div>

        {/* Redes Sociales */}
        <div className="social-links">
          <a href="https://github.com/sergiherradorITB" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/sergi-herrador-d%C3%ADaz/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin size={30} />
          </a>
          <a href="https://www.instagram.com/chegiwrx/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram size={30} />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Home;
