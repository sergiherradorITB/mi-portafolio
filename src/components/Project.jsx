import React from 'react';
import { motion } from 'framer-motion';

const Project = ({ title, description, link, image }) => {
  return (
    <motion.div
      className="project"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <img src={image} alt={title} className="project-icon" />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </motion.div>
  );
};

export default Project;
