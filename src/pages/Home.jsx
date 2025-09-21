import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
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

      {/* Features Section */}
      <section className="page-section">
        <div className="container">
          <h2>Explore Sikkim's Monasteries</h2>
          <div className="card-grid">
            <div className="card">
              <h4>🏛️ Famous Monasteries</h4>
              <ul>
                <li>Rumtek Monastery - The Dharma Chakra Centre</li>
                <li>Enchey Monastery - The Solitary Temple</li>
                <li>Pemayangtse Monastery - The Perfect Sublime Lotus</li>
                <li>Tashiding Monastery - The Sacred Hill</li>
                <li>Dubdi Monastery - The Retreat Place</li>
              </ul>
            </div>
            <div className="card">
              <h4>🎯 Key Features</h4>
              <ul>
                <li>360° Virtual Reality Tours</li>
                <li>Interactive Maps with GPS Locations</li>
                <li>Digital Archives of Ancient Texts</li>
                <li>Smart Audio Guides in Multiple Languages</li>
                <li>Cultural Events Calendar</li>
                <li>Online Booking for Monastery Visits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="page-section" style={{backgroundColor: '#f8f6f3'}}>
        <div className="container">
          <div style={{textAlign: 'center'}}>
            <h2>Begin Your Spiritual Journey</h2>
            <p>Discover the profound beauty and wisdom of Sikkim's monasteries through our digital platform.</p>
            <div style={{marginTop: '2rem'}}>
              <a href="/virtual-tours" className="btn" style={{margin: '0 1rem'}}>Virtual Tours</a>
              <a href="/booking" className="btn btn-secondary" style={{margin: '0 1rem'}}>Book Visit</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;