import React from 'react';

const GhibliApi = () => {
  return (
    <div className="project-page">
      <h1>GhibliApi - Demo y Características</h1>
      <p>
        GhibliApi es una aplicación que utiliza una base de datos local para guardar tus favoritos y consume múltiples APIs
        para obtener información detallada sobre películas, especies, localizaciones y personajes de Studio Ghibli.
      </p>
      <h3>Características:</h3>
      <ul>
        <li><strong>Base de datos local</strong>: Guarda tus películas y personajes favoritos de manera local en el dispositivo.</li>
        <li><strong>Consumo de múltiples APIs</strong>: La app consume diversas APIs para obtener información actualizada y variada sobre el universo Ghibli.</li>
        <li><strong>ViewModel</strong>: Utiliza el patrón de diseño ViewModel para separar la lógica de la UI y manejar los datos de forma eficiente.</li>
        <li><strong>Interfaz amigable</strong>: Presentación clara y sencilla de los datos con una experiencia de usuario fluida.</li>
      </ul>

      <div className="demo-video">
        <h3>Video Demo</h3>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/your-video-link"  // Sustituir con el enlace de tu video
          title="GhibliApi Demo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="instructions">
        <h3>Instrucciones para Descargar e Instalar la APK:</h3>
        <ol>
          <li>Haz clic en el enlace de descarga: <a href="https://drive.google.com/your-file-link" target="_blank" rel="noopener noreferrer">Descargar GhibliApi.apk</a></li>
          <li>Habilita la instalación de aplicaciones de fuentes desconocidas en tu dispositivo Android.</li>
          <li>Instala la APK desde tu carpeta de **Descargas**.</li>
          <li>Abre la app y comienza a explorar las películas y personajes de Studio Ghibli.</li>
        </ol>
      </div>

      <div className="feedback">
        <h3>¡Tu opinión es importante!</h3>
        <p>Una vez que hayas probado la app, por favor deja tu retroalimentación sobre la experiencia de uso. ¡Agradezco tus comentarios!</p>
      </div>

      <div className="technologies">
        <h3>Tecnologías Utilizadas:</h3>
        <ul>
          <li>Android Studio</li>
          <li>Jetpack Compose</li>
          <li>ViewModel</li>
          <li>Base de datos local (para guardar favoritos)</li>
          <li>Retrofit (para consumir las APIs externas)</li>
        </ul>
      </div>
    </div>
  );
};

export default GhibliApi;
