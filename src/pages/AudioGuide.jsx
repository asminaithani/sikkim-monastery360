import React, { useState } from 'react';

const AudioGuide = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const [selectedTour, setSelectedTour] = useState('rumtek');
  const [isPlaying, setIsPlaying] = useState(false);

  const languages = {
    english: 'English',
    tibetan: 'Tibetan',
    nepali: 'Nepali',
    hindi: 'Hindi',
    bengali: 'Bengali'
  };

  const audioTours = {
    rumtek: {
      title: 'Rumtek Monastery Audio Tour',
      duration: '45 minutes',
      narrator: 'Lama Tenzin Rinpoche',
      tracks: [
        { id: 1, title: 'Welcome to Rumtek', duration: '3:45' },
        { id: 2, title: 'History of the Monastery', duration: '8:20' },
        { id: 3, title: 'The Main Prayer Hall', duration: '6:15' },
        { id: 4, title: 'Sacred Relics & Artifacts', duration: '7:30' },
        { id: 5, title: 'Daily Life of Monks', duration: '5:45' },
        { id: 6, title: 'Meditation & Teachings', duration: '9:20' },
        { id: 7, title: 'Festival Celebrations', duration: '4:25' }
      ]
    },
    enchey: {
      title: 'Enchey Monastery Audio Guide',
      duration: '35 minutes',
      narrator: 'Ani Pema Dolkar',
      tracks: [
        { id: 8, title: 'Introduction to Enchey', duration: '2:30' },
        { id: 9, title: 'Founding Legend', duration: '5:45' },
        { id: 10, title: 'Architecture & Art', duration: '6:20' },
        { id: 11, title: 'Mountain Views & Nature', duration: '4:15' },
        { id: 12, title: 'Spiritual Practices', duration: '7:30' },
        { id: 13, title: 'Community Service', duration: '8:40' }
      ]
    },
    pemayangtse: {
      title: 'Pemayangtse Monastery Journey',
      duration: '50 minutes',
      narrator: 'Dr. Karma Thinley',
      tracks: [
        { id: 14, title: 'Ancient Beginnings', duration: '4:20' },
        { id: 15, title: 'Royal Connections', duration: '6:45' },
        { id: 16, title: 'Seven-Tiered Heaven', duration: '8:30' },
        { id: 17, title: 'Wooden Sculptures', duration: '7:15' },
        { id: 18, title: 'Sacred Texts', duration: '5:50' },
        { id: 19, title: 'Mountain Panorama', duration: '6:20' },
        { id: 20, title: 'Spiritual Significance', duration: '11:00' }
      ]
    }
  };

  return (
    <div className="page-section">
      <div className="container">
        <h1>Smart Audio Guide</h1>
        <p>Immerse yourself in the wisdom and history of Sikkim's monasteries with our intelligent audio guide system.</p>

        {/* App Overview */}
        <div className="card">
          <h2>🎧 Monastery360 Audio App</h2>
          <div className="card-grid">
            <div>
              <h3>Smart Features</h3>
              <ul>
                <li>🗣️ Multi-language narration</li>
                <li>📍 GPS-triggered content</li>
                <li>🎯 Interactive hotspots</li>
                <li>📱 Offline accessibility</li>
                <li>🔊 High-quality audio</li>
                <li>⏯️ Pause & resume anywhere</li>
              </ul>
            </div>
            <div>
              <h3>Available Languages</h3>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
                {Object.entries(languages).map(([key, lang]) => (
                  <button
                    key={key}
                    className={`btn ${selectedLanguage === key ? '' : 'btn-secondary'}`}
                    onClick={() => setSelectedLanguage(key)}
                    style={{padding: '0.5rem 1rem', fontSize: '0.9rem'}}
                  >
                    {lang}
                  </button>
                ))}
              </div>
              <p style={{marginTop: '1rem', fontSize: '0.9rem', color: '#666'}}>
                More languages coming soon: Bhutia, Lepcha, Limbu
              </p>
            </div>
          </div>
        </div>

        {/* Tour Selection */}
        <div className="card">
          <h3>Select Audio Tour</h3>
          <div className="card-grid">
            {Object.entries(audioTours).map(([key, tour]) => (
              <div 
                key={key}
                className={`card ${selectedTour === key ? 'selected' : ''}`}
                onClick={() => setSelectedTour(key)}
                style={{
                  cursor: 'pointer',
                  border: selectedTour === key ? '2px solid #B8860B' : '1px solid #ddd'
                }}
              >
                <h4>{tour.title}</h4>
                <p><strong>Duration:</strong> {tour.duration}</p>
                <p><strong>Narrator:</strong> {tour.narrator}</p>
                <p><strong>Tracks:</strong> {tour.tracks.length} segments</p>
                <p><strong>Language:</strong> {languages[selectedLanguage]}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Audio Player Interface */}
        <div className="card" style={{border: '2px solid #8B2635'}}>
          <div style={{display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', alignItems: 'center'}}>
            <div>
              <h3>🎵 Now Playing</h3>
              <h4>{audioTours[selectedTour].title}</h4>
              <p>Narrated by {audioTours[selectedTour].narrator} in {languages[selectedLanguage]}</p>
            </div>
            <div style={{textAlign: 'center'}}>
              <button
                className="btn"
                onClick={() => setIsPlaying(!isPlaying)}
                style={{
                  fontSize: '2rem',
                  padding: '1rem 2rem',
                  borderRadius: '50px'
                }}
              >
                {isPlaying ? '⏸️' : '▶️'}
              </button>
            </div>
          </div>

          {/* Audio Progress Bar */}
          <div style={{margin: '1rem 0'}}>
            <div style={{
              background: '#ddd',
              height: '8px',
              borderRadius: '4px',
              position: 'relative'
            }}>
              <div style={{
                background: '#8B2635',
                height: '100%',
                width: '35%',
                borderRadius: '4px'
              }}></div>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#666', marginTop: '0.5rem'}}>
              <span>12:45</span>
              <span>{audioTours[selectedTour].duration}</span>
            </div>
          </div>

          {/* Player Controls */}
          <div style={{display: 'flex', justifyContent: 'center', gap: '1rem', margin: '1rem 0'}}>
            <button className="btn btn-secondary">⏮️ Previous</button>
            <button className="btn btn-secondary">⏪ -15s</button>
            <button className="btn btn-secondary">⏩ +15s</button>
            <button className="btn btn-secondary">⏭️ Next</button>
            <button className="btn btn-secondary">🔊 Volume</button>
          </div>
        </div>

        {/* Track Listing */}
        <div className="card">
          <h3>Audio Tracks - {audioTours[selectedTour].title}</h3>
          <div className="archive-list">
            {audioTours[selectedTour].tracks.map((track, index) => (
              <div 
                key={track.id}
                className="archive-item"
                style={{
                  cursor: 'pointer',
                  background: index === 2 ? '#f0f8e8' : 'white',
                  borderLeft: index === 2 ? '4px solid #B8860B' : '4px solid #8B2635'
                }}
              >
                <div style={{display: 'grid', gridTemplateColumns: 'auto 1fr auto auto', gap: '1rem', alignItems: 'center'}}>
                  <div style={{
                    background: index === 2 ? '#B8860B' : '#8B2635',
                    color: 'white',
                    padding: '0.5rem',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold'
                  }}>
                    {index + 1}
                  </div>
                  <div>
                    <h4 style={{margin: '0 0 0.25rem 0'}}>{track.title}</h4>
                    {index === 2 && <p style={{margin: '0', color: '#B8860B', fontWeight: 'bold'}}>🎵 Currently Playing</p>}
                  </div>
                  <div style={{color: '#666', fontWeight: 'bold'}}>
                    {track.duration}
                  </div>
                  <button className="btn btn-secondary" style={{padding: '0.5rem 1rem'}}>
                    {index === 2 ? '⏸️' : '▶️'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* App Features */}
        <div className="card">
          <h3>Enhanced Audio Experience</h3>
          <div className="card-grid">
            <div className="card">
              <h4>📍 Location-Aware</h4>
              <p>Audio content automatically adjusts based on your exact location within the monastery using GPS and beacons.</p>
            </div>
            <div className="card">
              <h4>🎯 Interactive Hotspots</h4>
              <p>Point your phone at artifacts, murals, or architectural features for detailed audio descriptions.</p>
            </div>
            <div className="card">
              <h4>🔄 Personalized Pace</h4>
              <p>Skip ahead, replay sections, or dive deeper into topics that interest you most.</p>
            </div>
            <div className="card">
              <h4>📱 Offline Ready</h4>
              <p>Download tours before your visit to ensure uninterrupted experience without internet dependency.</p>
            </div>
          </div>
        </div>

        {/* Download App */}
        <div className="card" style={{textAlign: 'center', background: 'linear-gradient(135deg, #8B2635, #B8860B)', color: 'white'}}>
          <h3 style={{color: 'white'}}>📱 Download the Monastery360 App</h3>
          <p>Get the complete audio guide experience on your mobile device</p>
          <div style={{display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap'}}>
            <button className="btn" style={{background: 'white', color: '#8B2635'}}>
              📱 iOS App Store
            </button>
            <button className="btn" style={{background: 'white', color: '#8B2635'}}>
              🤖 Google Play
            </button>
            <button className="btn" style={{background: 'rgba(255,255,255,0.2)', color: 'white', border: '2px solid white'}}>
              🌐 Web App
            </button>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="card">
          <h3>Technical Specifications</h3>
          <div className="card-grid">
            <div>
              <h4>Audio Quality</h4>
              <ul>
                <li>High-quality 320kbps audio</li>
                <li>Professional studio recording</li>
                <li>Noise-cancellation optimized</li>
                <li>Multiple bitrate options</li>
              </ul>
            </div>
            <div>
              <h4>Compatibility</h4>
              <ul>
                <li>iOS 12.0 or later</li>
                <li>Android 8.0 or later</li>
                <li>Web browsers (Chrome, Safari, Firefox)</li>
                <li>Offline mode support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioGuide;