import React, { useState } from 'react';

const DigitalArchives = () => {
  const [selectedCategory, setSelectedCategory] = useState('manuscripts');
  const [searchTerm, setSearchTerm] = useState('');

  const archives = {
    manuscripts: [
      {
        id: 1,
        title: 'Kangyur - Words of Buddha',
        description: 'Complete collection of Buddha\'s teachings in 108 volumes',
        monastery: 'Pemayangtse Monastery',
        language: 'Tibetan',
        century: '18th Century',
        pages: 45000,
        digitized: true
      },
      {
        id: 2,
        title: 'Tengyur - Treatises',
        description: 'Commentaries and treatises by Indian Buddhist masters',
        monastery: 'Rumtek Monastery',
        language: 'Tibetan',
        century: '19th Century',
        pages: 38000,
        digitized: true
      },
      {
        id: 3,
        title: 'Padma Kathang',
        description: 'Biography of Guru Padmasambhava',
        monastery: 'Tashiding Monastery',
        language: 'Tibetan',
        century: '17th Century',
        pages: 250,
        digitized: true
      },
      {
        id: 4,
        title: 'Sikkim Chronicle',
        description: 'Historical records of Sikkim kingdom',
        monastery: 'Enchey Monastery',
        language: 'Tibetan/Nepali',
        century: '19th Century',
        pages: 180,
        digitized: false
      }
    ],
    murals: [
      {
        id: 5,
        title: 'Wheel of Life Mural',
        description: 'Bhavachakra depicting cycle of existence',
        monastery: 'Rumtek Monastery',
        artist: 'Traditional Tibetan Artists',
        century: '20th Century',
        dimensions: '12ft x 12ft',
        digitized: true
      },
      {
        id: 6,
        title: 'Mandala of Compassion',
        description: 'Avalokiteshvara mandala in traditional colors',
        monastery: 'Pemayangtse Monastery',
        artist: 'Newari Artists',
        century: '18th Century',
        dimensions: '8ft x 8ft',
        digitized: true
      },
      {
        id: 7,
        title: 'Four Guardian Kings',
        description: 'Protective deities of the four directions',
        monastery: 'Enchey Monastery',
        artist: 'Sikkimese Artists',
        century: '19th Century',
        dimensions: '6ft x 10ft',
        digitized: false
      }
    ],
    documents: [
      {
        id: 8,
        title: 'Royal Decree of Chogyal',
        description: 'Official document establishing monastery land rights',
        monastery: 'Dubdi Monastery',
        period: '1642 CE',
        material: 'Traditional Paper',
        language: 'Tibetan',
        digitized: true
      },
      {
        id: 9,
        title: 'Monastery Construction Records',
        description: 'Detailed accounts of building materials and costs',
        monastery: 'Pemayangtse Monastery',
        period: '1705 CE',
        material: 'Palm Leaf',
        language: 'Tibetan',
        digitized: true
      },
      {
        id: 10,
        title: 'Festival Calendar',
        description: 'Traditional calendar marking religious festivals',
        monastery: 'Tashiding Monastery',
        period: '18th Century',
        material: 'Cloth Scroll',
        language: 'Tibetan',
        digitized: false
      }
    ]
  };

  const categories = {
    manuscripts: 'Ancient Manuscripts',
    murals: 'Sacred Murals',
    documents: 'Historical Documents'
  };

  const filteredArchives = archives[selectedCategory].filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.monastery.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page-section">
      <div className="container">
        <h1>Digital Archives</h1>
        <p>Explore our comprehensive collection of digitized manuscripts, sacred murals, and historical documents from Sikkim's monasteries.</p>

        {/* Search and Filter */}
        <div className="card">
          <div style={{display: 'grid', gridTemplateColumns: '1fr auto', gap: '1rem', alignItems: 'center', marginBottom: '2rem'}}>
            <div>
              <input
                type="text"
                placeholder="Search archives by title, description, or monastery..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #ddd',
                  borderRadius: '5px',
                  fontSize: '1rem'
                }}
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div style={{display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap'}}>
            {Object.entries(categories).map(([key, label]) => (
              <button
                key={key}
                className={`btn ${selectedCategory === key ? '' : 'btn-secondary'}`}
                onClick={() => setSelectedCategory(key)}
              >
                {label} ({archives[key].length})
              </button>
            ))}
          </div>

          {/* Archive Statistics */}
          <div className="card-grid">
            <div style={{textAlign: 'center', padding: '1rem', background: '#f8f6f3', borderRadius: '10px'}}>
              <h3 style={{color: '#8B2635', margin: '0 0 0.5rem 0'}}>
                {archives[selectedCategory].length}
              </h3>
              <p style={{margin: '0', color: '#666'}}>{categories[selectedCategory]}</p>
            </div>
            <div style={{textAlign: 'center', padding: '1rem', background: '#f8f6f3', borderRadius: '10px'}}>
              <h3 style={{color: '#B8860B', margin: '0 0 0.5rem 0'}}>
                {archives[selectedCategory].filter(item => item.digitized).length}
              </h3>
              <p style={{margin: '0', color: '#666'}}>Digitized</p>
            </div>
            <div style={{textAlign: 'center', padding: '1rem', background: '#f8f6f3', borderRadius: '10px'}}>
              <h3 style={{color: '#666', margin: '0 0 0.5rem 0'}}>5</h3>
              <p style={{margin: '0', color: '#666'}}>Monasteries</p>
            </div>
          </div>
        </div>

        {/* Archive Results */}
        <div>
          <h2>{categories[selectedCategory]} ({filteredArchives.length})</h2>
          {filteredArchives.length === 0 ? (
            <div className="card">
              <p style={{textAlign: 'center', color: '#666'}}>
                No archives found matching your search criteria.
              </p>
            </div>
          ) : (
            <ul className="archive-list">
              {filteredArchives.map((item) => (
                <li key={item.id} className="archive-item">
                  <div style={{display: 'grid', gridTemplateColumns: '1fr auto', gap: '1rem', alignItems: 'start'}}>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', margin: '1rem 0'}}>
                        <div>
                          <strong>Monastery:</strong> {item.monastery}
                        </div>
                        {item.language && (
                          <div>
                            <strong>Language:</strong> {item.language}
                          </div>
                        )}
                        {item.century && (
                          <div>
                            <strong>Period:</strong> {item.century}
                          </div>
                        )}
                        {item.period && (
                          <div>
                            <strong>Date:</strong> {item.period}
                          </div>
                        )}
                        {item.pages && (
                          <div>
                            <strong>Pages:</strong> {item.pages.toLocaleString()}
                          </div>
                        )}
                        {item.dimensions && (
                          <div>
                            <strong>Size:</strong> {item.dimensions}
                          </div>
                        )}
                        {item.artist && (
                          <div>
                            <strong>Artist:</strong> {item.artist}
                          </div>
                        )}
                        {item.material && (
                          <div>
                            <strong>Material:</strong> {item.material}
                          </div>
                        )}
                      </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-end'}}>
                      <div style={{
                        background: item.digitized ? '#4CAF50' : '#FF9800',
                        color: 'white',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '15px',
                        fontSize: '0.8rem',
                        fontWeight: 'bold'
                      }}>
                        {item.digitized ? '✓ Digitized' : '⏳ Processing'}
                      </div>
                      {item.digitized && (
                        <div style={{display: 'flex', gap: '0.5rem'}}>
                          <button className="btn" style={{padding: '0.5rem 1rem', fontSize: '0.9rem'}}>
                            👁️ View
                          </button>
                          <button className="btn btn-secondary" style={{padding: '0.5rem 1rem', fontSize: '0.9rem'}}>
                            💾 Download
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Research Tools */}
        <div className="card">
          <h3>Research & Study Tools</h3>
          <div className="card-grid">
            <div className="card">
              <h4>🔍 Advanced Search</h4>
              <p>Search across all archives with filters for date, language, monastery, and content type.</p>
              <button className="btn">Launch Search</button>
            </div>
            <div className="card">
              <h4>📊 Text Analysis</h4>
              <p>AI-powered tools for text analysis, translation assistance, and content discovery.</p>
              <button className="btn btn-secondary">Explore Tools</button>
            </div>
            <div className="card">
              <h4>📚 Citation Generator</h4>
              <p>Generate proper academic citations for research papers and publications.</p>
              <button className="btn btn-secondary">Create Citations</button>
            </div>
            <div className="card">
              <h4>🤝 Research Collaboration</h4>
              <p>Connect with other researchers and scholars studying Buddhist texts and history.</p>
              <button className="btn">Join Community</button>
            </div>
          </div>
        </div>

        {/* Preservation Status */}
        <div className="card">
          <h3>Digital Preservation Initiative</h3>
          <p>Our ongoing efforts to preserve Sikkim's cultural heritage for future generations.</p>
          <div className="card-grid">
            <div style={{textAlign: 'center', padding: '2rem', background: 'linear-gradient(135deg, #8B2635, #B8860B)', color: 'white', borderRadius: '10px'}}>
              <h2 style={{color: 'white', margin: '0 0 0.5rem 0'}}>85%</h2>
              <p style={{margin: '0'}}>Digitization Complete</p>
            </div>
            <div>
              <h4>Preservation Stats</h4>
              <ul>
                <li>📄 45,000+ manuscript pages digitized</li>
                <li>🎨 150+ murals photographed in high resolution</li>
                <li>📜 75+ historical documents preserved</li>
                <li>🏛️ 12 monasteries participating</li>
                <li>👥 25+ scholars contributing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalArchives;