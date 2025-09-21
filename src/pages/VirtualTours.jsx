import React, { useState } from 'react';
import featuredMonasteries from '../monasteryData';

const VirtualTours = () => {
    const [selectedMonastery, setSelectedMonastery] = useState('rumtek');
    const currentMonastery = featuredMonasteries.find(m => m.id === selectedMonastery);

    return (
        <div className="page-section">
            <div className="container">
                <h1>Virtual Tours</h1>
                <p>Experience the spiritual ambiance of Sikkim's monasteries through immersive 360° virtual tours.</p>

                {/* Monastery Selector */}
                <div className="card">
                    <h3>Select a Monastery</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                        {featuredMonasteries.map((monastery) => (
                            <button
                                key={monastery.id}
                                className={`btn ${selectedMonastery === monastery.id ? '' : 'btn-secondary'}`}
                                onClick={() => setSelectedMonastery(monastery.id)}
                            >
                                {monastery.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Virtual Tour Display */}
                <div className="card">
                    <h2>{currentMonastery.name}</h2>
                    
                    {/* 360° Tour Placeholder with image */}
                    <div className="placeholder" style={{ padding: '0', border: 'none', background: 'none' }}>
                        <div style={{
                            position: 'relative',
                            width: '100%',
                            height: '500px',
                            borderRadius: '10px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                        }}>
                            <img src={currentMonastery.image} alt={currentMonastery.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: 'rgba(0,0,0,0.3)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                textAlign: 'center'
                            }}>
                                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🏛️</div>
                                <p><strong>{currentMonastery.name}</strong></p>
                                <p>Virtual Reality Experience</p>
                                <p><em>Click and drag to explore in 360°</em></p>
                                <div style={{ marginTop: '1rem' }}>
                                    <button className="btn">🎧 Enable Audio Guide</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '1rem', color: '#666' }}>
                        <p>🔄 Use mouse to drag and explore • 🔍 Click hotspots for information</p>
                    </div>

                    {/* Monastery Information */}
                    <div className="card-grid">
                        <div className="card">
                            <h4>About This Monastery</h4>
                            <p>{currentMonastery.description}</p>
                            <p><strong>Location:</strong> {currentMonastery.location}</p>
                            <p><strong>Founded:</strong> {currentMonastery.founded}</p>
                        </div>
                        <div className="card">
                            <h4>Tour Features</h4>
                            <ul>
                                {currentMonastery.tours.map((feature, index) => (
                                    <li key={index}>✔️ {feature}</li>
                                ))}
                            </ul>
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
        </div>
    );
};

export default VirtualTours;