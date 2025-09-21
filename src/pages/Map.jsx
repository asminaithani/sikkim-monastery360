import React, { useState } from 'react';

const Map = () => {
  const [selectedMonastery, setSelectedMonastery] = useState(null);

  const monasteries = [
    {
      id: 1,
      name: 'Rumtek Monastery',
      location: 'East Sikkim',
      coordinates: { lat: 27.3026, lng: 88.5582 },
      distance: '24 km from Gangtok',
      description: 'The largest monastery in Sikkim, seat of the Karmapa.',
      established: '1960s'
    },
    {
      id: 2,
      name: 'Enchey Monastery',
      location: 'Gangtok',
      coordinates: { lat: 27.3389, lng: 88.6065 },
      distance: '3 km from Gangtok center',
      description: 'Beautiful monastery with panoramic views of Kanchenjunga.',
      established: '1909'
    },
    {
      id: 3,
      name: 'Pemayangtse Monastery',
      location: 'Pelling, West Sikkim',
      coordinates: { lat: 27.2951, lng: 88.2106 },
      distance: '110 km from Gangtok',
      description: 'One of the oldest monasteries with intricate wooden sculptures.',
      established: '1705'
    },
    {
      id: 4,
      name: 'Tashiding Monastery',
      location: 'West Sikkim',
      coordinates: { lat: 27.3225, lng: 88.2847 },
      distance: '85 km from Gangtok',
      description: 'Sacred monastery on a hilltop between two rivers.',
      established: '1717'
    },
    {
      id: 5,
      name: 'Dubdi Monastery',
      location: 'Yuksom, West Sikkim',
      coordinates: { lat: 27.3688, lng: 88.2118 },
      distance: '125 km from Gangtok',
      description: 'The oldest monastery in Sikkim, built by Lhatsun Chenpo.',
      established: '1701'
    }
  ];

  return (
    <div className="page-section">
      <div className="container">
        <h1>Interactive Monastery Map</h1>
        <p>Explore the geographical locations of Sikkim's sacred monasteries and plan your spiritual journey.</p>

        {/* Map Container */}
        <div className="card">
          <div className="placeholder" style={{height: '500px', position: 'relative'}}>
            <h3>Interactive Map of Sikkim Monasteries</h3>
            <p>🗺️ Geo-tagged monastery locations • 📍 Click markers for details • 🚗 Get directions</p>
            
            {/* Simulated Map */}
            <div style={{
              background: 'linear-gradient(135deg, #E8F5E8 0%, #F0F8E8 50%, #E0F0E0 100%)',
              height: '400px',
              borderRadius: '10px',
              position: 'relative',
              margin: '1rem 0',
              border: '2px solid #8B2635'
            }}>
              {/* Monastery Markers */}
              {monasteries.map((monastery, index) => (
                <div
                  key={monastery.id}
                  style={{
                    position: 'absolute',
                    left: `${20 + index * 15}%`,
                    top: `${30 + index * 12}%`,
                    cursor: 'pointer',
                    transform: 'translate(-50%, -50%)'
                  }}
                  onClick={() => setSelectedMonastery(monastery)}
                >
                  <div style={{
                    background: selectedMonastery?.id === monastery.id ? '#B8860B' : '#8B2635',
                    color: 'white',
                    padding: '8px 12px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                    border: '2px solid white',
                    transition: 'all 0.3s ease'
                  }}>
                    📍 {monastery.name}
                  </div>
                </div>
              ))}
              
              {/* Map Legend */}
              <div style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'rgba(255,255,255,0.9)',
                padding: '10px',
                borderRadius: '5px',
                fontSize: '0.8rem'
              }}>
                <div><strong>Sikkim Monastery Map</strong></div>
                <div>📍 Click markers for details</div>
              </div>
            </div>
          </div>
        </div>

        {/* Monastery List */}
        <div className="card">
          <h3>All Monasteries ({monasteries.length})</h3>
          <div className="card-grid">
            {monasteries.map((monastery) => (
              <div 
                key={monastery.id} 
                className={`card ${selectedMonastery?.id === monastery.id ? 'selected' : ''}`}
                onClick={() => setSelectedMonastery(monastery)}
                style={{
                  cursor: 'pointer',
                  border: selectedMonastery?.id === monastery.id ? '2px solid #B8860B' : '1px solid #ddd'
                }}
              >
                <h4>{monastery.name}</h4>
                <p><strong>Location:</strong> {monastery.location}</p>
                <p><strong>Distance:</strong> {monastery.distance}</p>
                <p><strong>Established:</strong> {monastery.established}</p>
                <p>{monastery.description}</p>
                <div style={{marginTop: '1rem'}}>
                  <button className="btn" style={{marginRight: '0.5rem'}}>🧭 Get Directions</button>
                  <button className="btn btn-secondary">🎥 Virtual Tour</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Monastery Details */}
        {selectedMonastery && (
          <div className="card" style={{border: '2px solid #B8860B'}}>
            <h3>📍 {selectedMonastery.name}</h3>
            <div className="card-grid">
              <div>
                <h4>Location Details</h4>
                <p><strong>Region:</strong> {selectedMonastery.location}</p>
                <p><strong>Distance from Gangtok:</strong> {selectedMonastery.distance}</p>
                <p><strong>Coordinates:</strong> {selectedMonastery.coordinates.lat}°N, {selectedMonastery.coordinates.lng}°E</p>
                <p><strong>Established:</strong> {selectedMonastery.established}</p>
              </div>
              <div>
                <h4>Visit Information</h4>
                <p>{selectedMonastery.description}</p>
                <div style={{marginTop: '1rem'}}>
                  <button className="btn">🎫 Book Visit</button>
                  <button className="btn btn-secondary" style={{margin: '0.5rem'}}>🎧 Audio Guide</button>
                  <button className="btn btn-secondary">📱 Share Location</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Travel Information */}
        <div className="card">
          <h3>Travel Information</h3>
          <div className="card-grid">
            <div className="card">
              <h4>🚗 By Road</h4>
              <p>Most monasteries are accessible by road. Some require short hikes from the nearest motorable point.</p>
            </div>
            <div className="card">
              <h4>🕐 Best Time to Visit</h4>
              <p>October to June offers clear mountain views. Avoid monsoon season (July-September).</p>
            </div>
            <div className="card">
              <h4>📋 Entry Requirements</h4>
              <p>Inner Line Permit required for non-Sikkimese visitors. Available online or at entry points.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;