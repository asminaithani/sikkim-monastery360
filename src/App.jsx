import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import VirtualTours from './pages/VirtualTours.jsx';
import Map from './pages/Map.jsx';
import DigitalArchives from './pages/DigitalArchives.jsx';
import AudioGuide from './pages/AudioGuide.jsx';
import Events from './pages/Events.jsx';
import Booking from './pages/Booking.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/virtual-tours" element={<VirtualTours />} />
            <Route path="/map" element={<Map />} />
            <Route path="/archives" element={<DigitalArchives />} />
            <Route path="/audio-guide" element={<AudioGuide />} />
            <Route path="/events" element={<Events />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;