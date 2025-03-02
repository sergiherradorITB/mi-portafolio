import React from 'react';
import Button from '@mui/material/Button';

const GoogleMapsFirebase = () => {
  return (
    <div className="project-page">
      <h1>Google Maps & Firebase - Demo y Características</h1>
      <p>
        Google Maps & Firebase es una aplicación que integra la API de Google Maps con Firebase para almacenar y gestionar marcadores de usuario, así como almacenar imágenes asociadas a esos marcadores. Los usuarios pueden agregar marcadores en su ubicación actual o en una ubicación personalizada, gestionarlos y organizarlos por categorías.
      </p>
      <h3>Características:</h3>
      <ul>
        <li><strong>Agregar marcadores en la ubicación actual:</strong> Si haces clic en el botón +, se agregará un marcador en tu ubicación actual.</li>
        <li><strong>Agregar marcadores en cualquier zona del mapa:</strong> Si mantienes presionada una zona del mapa, se agregará un marcador en esa ubicación.</li>
        <li><strong>Gestión de marcadores:</strong> Puedes editar los nombres y las imágenes de los marcadores.</li>
        <li><strong>Filtrado por categorías:</strong> Los marcadores pueden ser organizados y mostrados por categorías.</li>
        <li><strong>Autenticación de usuarios:</strong> Los usuarios pueden iniciar sesión para gestionar sus propios marcadores y datos.</li>
        <li><strong>Interfaz amigable:</strong> Presentación clara y sencilla de los datos con una experiencia de usuario fluida.</li>
      </ul>

      <div className="demo-video">
        <h3>Video Demo</h3>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/your-video-link"  // Sustituir con el enlace de tu video
          title="Google Maps & Firebase Demo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="instructions">
        <h3>Instrucciones para Descargar e Instalar la APK:</h3>
        
        <Button
            variant="contained"
            sx={{
                padding: '10px 20px',
                fontSize: '16px',
                margin: '20px 0',
                backgroundColor: 'white', // Cambiar color de fondo a blanco
                color: 'black', // Cambiar color del texto a negro
                '&:hover': {
                backgroundColor: '#f1f1f1', // Color cuando el botón está en hover
                }
            }}
            href="https://drive.google.com/uc?export=download&id=YOUR_FILE_ID"
            target="_blank"
            rel="noopener noreferrer"
        >
        Descargar GoogleMapsFirebase.apk
        </Button>



        <ol>
          <li>Haz clic en el enlace de descarga: <a href="https://drive.google.com/uc?export=download&id=YOUR_FILE_ID" target="_blank" rel="noopener noreferrer">Descargar GoogleMapsFirebase.apk</a></li>
          <li>Habilita la instalación de aplicaciones de fuentes desconocidas en tu dispositivo Android.</li>
          <li>Instala la APK desde tu carpeta de **Descargas**.</li>
          <li>Abre la app y comienza a agregar marcadores en el mapa.</li>
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
          <li>Retrofit (para consumir las APIs de Google Maps)</li>
          <li>Firebase (para almacenar datos e imágenes)</li>
        </ul>
      </div>
    </div>
  );
};

export default GoogleMapsFirebase;
