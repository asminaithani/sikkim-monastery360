import React, { useState } from 'react';

const Events = () => {
  const [selectedMonth, setSelectedMonth] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const events = [
    {
      id: 1,
      name: 'Losar - Tibetan New Year',
      date: '2024-02-10',
      endDate: '2024-02-12',
      monastery: 'Rumtek Monastery',
      type: 'festival',
      description: 'Three-day celebration marking the Tibetan New Year with traditional dances, prayers, and community feasts.',
      duration: '3 days',
      significance: 'Most important festival in Tibetan Buddhism',
      activities: ['Cham Dance', 'Butter Lamp Offering', 'Community Feast', 'Prayer Ceremonies']
    },
    {
      id: 2,
      name: 'Buddha Jayanti',
      date: '2024-05-23',
      monastery: 'All Monasteries',
      type: 'religious',
      description: 'Celebration of Lord Buddha\'s birth, enlightenment, and nirvana.',
      duration: '1 day',
      significance: 'Commemorates the three most important events in Buddha\'s life',
      activities: ['Special Prayers', 'Meditation Sessions', 'Teaching Discourses', 'Alms Giving']
    },
    {
      id: 3,
      name: 'Pang Lhabsol',
      date: '2024-08-15',
      monastery: 'Tashiding Monastery',
      type: 'festival',
      description: 'Festival dedicated to Mount Kanchenjunga and the guardian deities of Sikkim.',
      duration: '1 day',
      significance: 'Celebrates the unity between different communities of Sikkim',
      activities: ['Warrior Dance', 'Mountain Worship', 'Traditional Music', 'Cultural Programs']
    },
    {
      id: 4,
      name: 'Saga Dawa',
      date: '2024-06-21',
      monastery: 'Pemayangtse Monastery',
      type: 'religious',
      description: 'Holy month culminating in the celebration of Buddha\'s enlightenment.',
      duration: '1 day',
      significance: 'Merit from good deeds multiplied 100,000 times',
      activities: ['Circumambulation', 'Prayer Flag Hoisting', 'Butter Lamp Lighting', 'Charitable Acts']
    },
    {
      id: 5,
      name: 'Drukpa Teshi',
      date: '2024-07-19',
      monastery: 'Enchey Monastery',
      type: 'religious',
      description: 'Celebrates Buddha\'s first teaching at Sarnath after his enlightenment.',
      duration: '1 day',
      significance: 'Marks the turning of the first wheel of dharma',
      activities: ['Scripture Reading', 'Dharma Discussions', 'Community Prayers', 'Teaching Sessions']
    },
    {
      id: 6,
      name: 'Drupka Kunley Festival',
      date: '2024-09-28',
      monastery: 'Dubdi Monastery',
      type: 'festival',
      description: 'Celebration honoring the Divine Madman, Drukpa Kunley.',
      duration: '2 days',
      significance: 'Celebrates unconventional wisdom and spiritual freedom',
      activities: ['Mask Dances', 'Comedy Performances', 'Traditional Games', 'Folk Music']
    },
    {
      id: 7,
      name: 'Full Moon Meditation',
      date: '2024-03-25',
      monastery: 'Rumtek Monastery',
      type: 'meditation',
      description: 'Monthly full moon meditation session open to all devotees.',
      duration: '3 hours',
      significance: 'Harnesses the spiritual energy of the full moon',
      activities: ['Group Meditation', 'Mantra Chanting', 'Healing Prayers', 'Silent Contemplation']
    },
    {
      id: 8,
      name: 'Avalokiteshvara Puja',
      date: '2024-04-14',
      monastery: 'Pemayangtse Monastery',
      type: 'religious',
      description: 'Special prayers dedicated to the Bodhisattva of Compassion.',
      duration: '6 hours',
      significance: 'Cultivates compassion and loving-kindness',
      activities: ['Mantra Recitation', 'Offering Ceremonies', 'Healing Blessings', 'Community Prayers']
    }
  ];

  const months = [
    'all', 'january', 'february', 'march', 'april', 'may', 'june',
    'july', 'august', 'september', 'october', 'november', 'december'
  ];

  const eventTypes = {
    all: 'All Events',
    festival: 'Festivals',
    religious: 'Religious Ceremonies',
    meditation: 'Meditation Sessions'
  };

  const getEventMonth = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long' }).toLowerCase();
  };

  const filteredEvents = events.filter(event => {
    const monthMatch = selectedMonth === 'all' || getEventMonth(event.date) === selectedMonth;
    const typeMatch = selectedType === 'all' || event.type === selectedType;
    return monthMatch && typeMatch;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="page-section">
      <div className="container">
        <h1>Cultural Events Calendar</h1>
        <p>Join us in celebrating the rich spiritual and cultural traditions of Sikkim's monasteries throughout the year.</p>

        {/* Calendar Overview */}
        <div className="hero" style={{padding: '3rem 0', margin: '2rem 0'}}>
          <h2 style={{color: 'white', marginBottom: '1rem'}}>2024 Festival Calendar</h2>
          <p style={{fontSize: '1.1rem', marginBottom: '2rem'}}>
            Experience authentic Tibetan Buddhist festivals, religious ceremonies, and meditation retreats
          </p>
          <div style={{display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap'}}>
            <div style={{textAlign: 'center'}}>
              <h3 style={{color: 'white', margin: '0 0 0.5rem 0'}}>{events.length}</h3>
              <p style={{margin: '0', fontSize: '0.9rem'}}>Total Events</p>
            </div>
            <div style={{textAlign: 'center'}}>
              <h3 style={{color: 'white', margin: '0 0 0.5rem 0'}}>5</h3>
              <p style={{margin: '0', fontSize: '0.9rem'}}>Participating Monasteries</p>
            </div>
            <div style={{textAlign: 'center'}}>
              <h3 style={{color: 'white', margin: '0 0 0.5rem 0'}}>12</h3>
              <p style={{margin: '0', fontSize: '0.9rem'}}>Months of Celebrations</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="card">
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'end'}}>
            <div>
              <h4>Filter by Month</h4>
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #ddd',
                  borderRadius: '5px',
                  fontSize: '1rem',
                  textTransform: 'capitalize'
                }}
              >
                {months.map(month => (
                  <option key={month} value={month}>
                    {month === 'all' ? 'All Months' : month}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <h4>Filter by Type</h4>
              <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
                {Object.entries(eventTypes).map(([key, label]) => (
                  <button
                    key={key}
                    className={`btn ${selectedType === key ? '' : 'btn-secondary'}`}
                    onClick={() => setSelectedType(key)}
                    style={{padding: '0.5rem 1rem', fontSize: '0.9rem'}}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Events List */}
        <div>
          <h2>Upcoming Events ({filteredEvents.length})</h2>
          {filteredEvents.length === 0 ? (
            <div className="card">
              <p style={{textAlign: 'center', color: '#666'}}>
                No events found for the selected filters. Try adjusting your search criteria.
              </p>
            </div>
          ) : (
            <div className="card-grid">
              {filteredEvents.map((event) => (
                <div key={event.id} className="event-card card">
                  <div className="event-date">{formatDate(event.date)}</div>
                  
                  <h3>{event.name}</h3>
                  <p style={{color: '#B8860B', fontWeight: 'bold', marginBottom: '1rem'}}>
                    📍 {event.monastery}
                  </p>
                  
                  <p>{event.description}</p>
                  
                  <div style={{margin: '1rem 0'}}>
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '0.5rem', fontSize: '0.9rem'}}>
                      <div><strong>Duration:</strong> {event.duration}</div>
                      <div><strong>Type:</strong> {eventTypes[event.type]}</div>
                    </div>
                  </div>

                  {event.significance && (
                    <div style={{marginBottom: '1rem', padding: '1rem', background: '#f8f6f3', borderRadius: '8px'}}>
                      <strong>Significance:</strong> {event.significance}
                    </div>
                  )}

                  <div style={{marginBottom: '1.5rem'}}>
                    <h4>Activities:</h4>
                    <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
                      {event.activities.map((activity, index) => (
                        <span
                          key={index}
                          style={{
                            background: '#8B2635',
                            color: 'white',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '15px',
                            fontSize: '0.8rem'
                          }}
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
                    <a href="/booking" className="btn">📅 Book Participation</a>
                    <button className="btn btn-secondary">ℹ️ More Details</button>
                    <button className="btn btn-secondary">📍 Get Directions</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Event Types Explanation */}
        <div className="card">
          <h3>Types of Events</h3>
          <div className="card-grid">
            <div className="card">
              <h4>🎭 Festivals</h4>
              <p>Colorful celebrations featuring traditional mask dances, music, and community gatherings. These joyous events showcase Tibetan Buddhist culture and bring communities together.</p>
            </div>
            <div className="card">
              <h4>🙏 Religious Ceremonies</h4>
              <p>Sacred rituals, prayers, and spiritual observances conducted by monks. These solemn events offer opportunities for devotion, merit-making, and spiritual growth.</p>
            </div>
            <div className="card">
              <h4>🧘 Meditation Sessions</h4>
              <p>Guided meditation practices open to visitors. These peaceful gatherings provide instruction in Buddhist meditation techniques and mindfulness practices.</p>
            </div>
          </div>
        </div>

        {/* Participation Guidelines */}
        <div className="card">
          <h3>Participation Guidelines</h3>
          <div className="card-grid">
            <div>
              <h4>📋 What to Expect</h4>
              <ul>
                <li>Respectful and peaceful atmosphere</li>
                <li>Traditional Tibetan music and chanting</li>
                <li>Opportunities for photography (where permitted)</li>
                <li>Cultural exchange with local community</li>
                <li>Vegetarian meals during festivals</li>
                <li>Blessing ceremonies from monks</li>
              </ul>
            </div>
            <div>
              <h4>👕 Dress Code & Etiquette</h4>
              <ul>
                <li>Modest, respectful clothing required</li>
                <li>Remove hats and shoes in prayer halls</li>
                <li>Maintain silence during ceremonies</li>
                <li>Photography restrictions in some areas</li>
                <li>Follow monk's guidance during rituals</li>
                <li>Bring offerings (flowers, incense, khada scarves)</li>
              </ul>
            </div>
          </div>

          <div style={{textAlign: 'center', marginTop: '2rem', padding: '1.5rem', background: '#f8f6f3', borderRadius: '10px'}}>
            <h4>Ready to Join Us?</h4>
            <p>Book your participation in upcoming monastery events and immerse yourself in Sikkim's spiritual heritage.</p>
            <a href="/booking" className="btn">📅 Book Event Participation</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;