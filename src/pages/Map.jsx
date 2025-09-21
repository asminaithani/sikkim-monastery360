import React, { useState } from 'react';
import featuredMonasteries from '../monasteryData';

const Map = () => {
    const [selectedMonastery, setSelectedMonastery] = useState(null);

    const monasteries = featuredMonasteries.map(m => ({
        ...m,
        coordinates: m.id === 'rumtek' ? { lat: 27.3026, lng: 88.5582 } :
            m.id === 'enchey' ? { lat: 27.3389, lng: 88.6065 } :
                m.id === 'pemayangtse' ? { lat: 27.2951, lng: 88.2106 } :
                    m.id === 'tashiding' ? { lat: 27.3225, lng: 88.2847 } :
                        { lat: 27.3688, lng: 88.2118 }
    }));

    return (
        <div className="page-section">
            <div className="container">
                <h1>Interactive Monastery Map</h1>
                <p>Explore the geographical locations of Sikkim's sacred monasteries and plan your spiritual journey.</p>

                {/* Map Container */}
                <div className="card">
                    <div className="placeholder" style={{ height: '500px', position: 'relative' }}>
                        <h3>Interactive Map of Sikkim Monasteries</h3>
                        <p>🗺️ Geo-tagged monastery locations • 📍 Click markers for details • 🚗 Get directions</p>
                        
                        {/* Simulated Map with background image */}
                        <div style={{
                            background: `url(${featuredMonasteries[1].image}) no-repeat center center / cover`,
                            height: '400px',
                            borderRadius: '10px',
                            position: 'relative',
                            margin: '1rem 0',
                            border: '2px solid #8B2635'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(255, 255, 255, 0.4)',
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
                            </div>
                            
                            {/* Map Legend */}
                            <div style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                background: 'rgba(255,255,255,0.9)',
                                padding: '10px',
                                borderRadius: '5px',
                                fontSize: '0.8rem',
                                zIndex: 10
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
                                <img src={monastery.image} alt={monastery.name} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px' }} />
                                <h4 style={{ marginTop: '1rem' }}>{monastery.name}</h4>
                                <p><strong>Location:</strong> {monastery.location}</p>
                                <p>{monastery.description}</p>
                                <div style={{ marginTop: '1rem' }}>
                                    <button className="btn" style={{ marginRight: '0.5rem' }}>🧭 Get Directions</button>
                                    <button className="btn btn-secondary">🎥 Virtual Tour</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Selected Monastery Details */}
                {selectedMonastery && (
                    <div className="card" style={{ border: '2px solid #B8860B' }}>
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
                                <div style={{ marginTop: '1rem' }}>
                                    <button className="btn">🎫 Book Visit</button>
                                    <button className="btn btn-secondary" style={{ margin: '0.5rem' }}>🎧 Audio Guide</button>
                                    <button className="btn btn-secondary">📱 Share Location</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Map;