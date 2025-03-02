import React from 'react';
import Project from '../components/Project';

const Projects = () => {
  const projectData = [
    {
      title: 'Hangman',
      description: 'A fun word guessing game.',
      link: '/projects/hangman',
      image: '/images/hangman-icon.png' // Ruta de la imagen del icono
    },
    {
      title: 'Ghibli API',
      description: 'Explore Studio Ghibli films.',
      link: '/projects/ghibli-api',
      image: './assets/images/sergi-ghibli-app-icon.png' // Ruta de la imagen del icono
    },
    {
      title: 'Google Maps Firebase',
      description: 'A project with Firebase integration.',
      link: '/projects/google-maps-firebase',
      image: './assets/images/sergi-maps-icon.png' // Ruta de la imagen del icono
    },
    {
      title: 'Trivial',
      description: 'A quiz game.',
      link: '/projects/trivial',
      image: './assets/images/trivial-icon.png' // Ruta de la imagen del icono
    },
    {
      title: 'Unity Game',
      description: 'A fun game built using Unity.',
      link: '/projects/unity-game',
      image: './assets/images/unity-game-icon.png' // Ruta de la imagen del icono
    },
  ];

  return (
    <div className="projects">
      {projectData.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          link={project.link}
          image={project.image}
        />
      ))}
    </div>
  );
};

export default Projects;
