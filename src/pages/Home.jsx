import React from 'react';
import featuredMonasteries, { heroImages } from '../monasteryData';

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="hero">
                <img src={heroImages.home} alt="Sikkim's breathtaking landscape with a monastery in the distance" className="hero-image" />
                <div className="container hero-content">
                    <h1>Monastery360</h1>
                    <p>
                        Discover the spiritual and cultural heritage of Sikkim's ancient monasteries
                        through immersive digital experiences and interactive exploration.
                    </p>
                    <a href="/virtual-tours" className="btn">Start Virtual Tour</a>
                </div>
            </section>

            {/* About Section */}
            <section className="page-section">
                <div className="container">
                    <div className="card-grid">
                        <div className="card">
                            <h3>Rich Heritage</h3>
                            <p>
                                Sikkim is home to over 200 monasteries, each holding centuries of Buddhist
                                wisdom, art, and cultural traditions. These sacred spaces are repositories
                                of ancient manuscripts, intricate murals, and timeless teachings.
                            </p>
                        </div>
                        <div className="card">
                            <h3>Digital Preservation</h3>
                            <p>
                                Monastery360 uses cutting-edge technology to digitally preserve and share
                                these precious heritage sites, making them accessible to devotees,
                                researchers, and curious minds worldwide.
                            </p>
                        </div>
                        <div className="card">
                            <h3>Interactive Experience</h3>
                            <p>
                                Explore 360° virtual tours, listen to guided audio experiences, browse
                                historical archives, and participate in cultural events from anywhere
                                in the world.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Monasteries Section */}
            <section className="page-section">
                <div className="container">
                    <h2>Featured Monasteries</h2>
                    <p style={{ textAlign: 'center' }}>Explore some of Sikkim's most revered spiritual sanctuaries.</p>
                    <div className="card-grid">
                        {featuredMonasteries.slice(0, 3).map(monastery => (
                            <div key={monastery.id} className="image-card">
                                <img src={monastery.image} alt={monastery.name} />
                                <div className="image-card-content">
                                    <h3>{monastery.name}</h3>
                                    <p>{monastery.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="page-section" style={{ backgroundColor: '#f8f6f3' }}>
                <div className="container">
                    <div style={{ textAlign: 'center' }}>
                        <h2>Begin Your Spiritual Journey</h2>
                        <p>Discover the profound beauty and wisdom of Sikkim's monasteries through our digital platform.</p>
                        <div style={{ marginTop: '2rem' }}>
                            <a href="/virtual-tours" className="btn" style={{ margin: '0 1rem' }}>Virtual Tours</a>
                            <a href="/booking" className="btn btn-secondary" style={{ margin: '0 1rem' }}>Book Visit</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;