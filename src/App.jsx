import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Hangman from './pages/Hangman';
import GhibliApi from './pages/GhibliAPI';
import GoogleMapsFirebase from './pages/GoogleMapsFirebase';
import Trivial from './pages/Trivial';
import UnityGame from './pages/UnityGame';
import './App.css';

const App = () => {
  return (
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/hangman" element={<Hangman />} />
            <Route path="/projects/ghibli-api" element={<GhibliApi />} />
            <Route path="/projects/google-maps-firebase" element={<GoogleMapsFirebase />} />
            <Route path="/projects/trivial" element={<Trivial />} />
            <Route path="/projects/unity-game" element={<UnityGame />} />
          </Routes>
        </div>
        <Footer />

      </Router>
  );
};

export default App;
