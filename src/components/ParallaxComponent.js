// src/components/ParallaxComponent.js
import React from 'react';
import { Parallax } from 'react-parallax';

const ParallaxComponent = () => (
  <Parallax bgImage="image.jpg" strength={200}>
    <div className="content">
      <h2>Contenido sobre el parallax</h2>
    </div>
  </Parallax>
);

export default ParallaxComponent;
