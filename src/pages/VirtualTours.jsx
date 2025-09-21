import React, { useState } from 'react';

const VirtualTours = () => {
  const [selectedMonastery, setSelectedMonastery] = useState('rumtek');

  const monasteries = {
    rumtek: {
      name: 'Rumtek Monastery',
      description: 'The largest monastery in Sikkim, also known as the Dharma Chakra Centre.',
      location: 'East Sikkim',
      founded: '1960s'
    },
    enchey: {
      name: 'Enchey Monastery',
      description: 'Built on a site blessed by Lama Druptob Karpo, means "The Solitary Temple".',
      location: 'Gangtok',
      founded: '1909'
    },
    pemayangtse: {
      name: 'Pemayangtse Monastery',
      description: 'One of the oldest and most important monasteries in Sikkim.',
      location: 'Pelling, West Sikkim',
      founded: '1705'
    },
    tashiding: {
      name: 'Tashiding Monastery',
      description: 'Located on a hill between Rathong and Rangeet rivers.',
      location: 'West Sikkim',
      founded: '1717'
    }
  };

  return (
    <div className="page-section">
      <div className="container">
        <h1>Virtual Tours</h1>
        <p>Experience the spiritual ambiance of Sikkim's monasteries through immersive 360° virtual tours.</p>

        {/* Monastery Selector */}
        <div className="card">
          <h3>Select a Monastery</h3>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem'}}>
            {Object.entries(monasteries).map(([key, monastery]) => (
              <button
                key={key}
                className={`btn ${selectedMonastery === key ? '' : 'btn-secondary'}`}
                onClick={() => setSelectedMonastery(key)}
              >
                {monastery.name}
              </button>
            ))}
          </div>
        </div>

        {/* Virtual Tour Display */}
        <div className="card">
          <h2>{monasteries[selectedMonastery].name}</h2>
          
          {/* 360° Tour Placeholder */}
          <div className="placeholder">
            <h3>360° Virtual Tour</h3>
            <p>Interactive 360° panoramic view of {monasteries[selectedMonastery].name}</p>
            <p>🔄 Use mouse to drag and explore • 🔍 Click hotspots for information</p>
            <div style={{background: '#ddd', height: '400px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '1rem 0'}}>
              <div style={{textAlign: 'center', color: '#666'}}>
                <div style={{fontSize: '4rem', marginBottom: '1rem'}}>🏛️</div>
                <p><strong>{monasteries[selectedMonastery].name}</strong></p>
                <p>Virtual Reality Experience</p>
                <p><em>Click and drag to explore in 360°</em></p>
              </div>
            </div>
          </div>

          {/* Monastery Information */}
          <div className="card-grid">
            <div className="card">
              <h4>About This Monastery</h4>
              <p>{monasteries[selectedMonastery].description}</p>
              <p><strong>Location:</strong> {monasteries[selectedMonastery].location}</p>
              <p><strong>Founded:</strong> {monasteries[selectedMonastery].founded}</p>
            </div>
            <div className="card">
              <h4>Tour Features</h4>
              <ul>
                <li>🏛️ Main Prayer Hall</li>
                <li>🎨 Ancient Murals & Artwork</li>
                <li>📿 Sacred Relics</li>
                <li>🌸 Monastery Gardens</li>
                <li>🔔 Prayer Wheels</li>
                <li>📚 Library & Scripture Hall</li>
              </ul>
            </div>
          </div>

          {/* Tour Controls */}
          <div style={{textAlign: 'center', marginTop: '2rem'}}>
            <button className="btn">🎧 Enable Audio Guide</button>
            <button className="btn btn-secondary" style={{margin: '0 1rem'}}>📱 VR Mode</button>
            <button className="btn btn-secondary">📷 Take Screenshot</button>
          </div>
        </div>

        {/* Additional Tours */}
        <div className="card">
          <h3>More Virtual Experiences</h3>
          <div className="card-grid">
            <div className="card">
              <h4>🌅 Sunrise Meditation</h4>
              <p>Experience the peaceful morning prayers and meditation sessions.</p>
            </div>
            <div className="card">
              <h4>🎭 Festival Celebrations</h4>
              <p>Virtual attendance of colorful monastery festivals and ceremonies.</p>
            </div>
            <div className="card">
              <h4>👨‍🏫 Monk Teachings</h4>
              <p>Listen to wisdom teachings and Buddhist philosophy from resident monks.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTours;