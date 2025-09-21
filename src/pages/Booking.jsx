import React, { useState } from 'react';

const Booking = () => {
  const [formData, setFormData] = useState({
    eventType: 'festival',
    monastery: '',
    preferredDate: '',
    numberOfPeople: '1',
    fullName: '',
    email: '',
    phone: '',
    nationality: '',
    specialRequests: '',
    accommodation: 'none',
    transportation: 'own',
    dietaryRestrictions: '',
    previousExperience: 'first-time'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const events = {
    festival: [
      { id: 'losar', name: 'Losar - Tibetan New Year', date: '2024-02-10' },
      { id: 'pang-lhabsol', name: 'Pang Lhabsol', date: '2024-08-15' },
      { id: 'drupka-kunley', name: 'Drupka Kunley Festival', date: '2024-09-28' }
    ],
    religious: [
      { id: 'buddha-jayanti', name: 'Buddha Jayanti', date: '2024-05-23' },
      { id: 'saga-dawa', name: 'Saga Dawa', date: '2024-06-21' },
      { id: 'drukpa-teshi', name: 'Drukpa Teshi', date: '2024-07-19' }
    ],
    meditation: [
      { id: 'full-moon', name: 'Full Moon Meditation', date: '2024-03-25' },
      { id: 'avalokiteshvara', name: 'Avalokiteshvara Puja', date: '2024-04-14' }
    ]
  };

  const monasteries = [
    { id: 'rumtek', name: 'Rumtek Monastery', location: 'East Sikkim' },
    { id: 'enchey', name: 'Enchey Monastery', location: 'Gangtok' },
    { id: 'pemayangtse', name: 'Pemayangtse Monastery', location: 'Pelling, West Sikkim' },
    { id: 'tashiding', name: 'Tashiding Monastery', location: 'West Sikkim' },
    { id: 'dubdi', name: 'Dubdi Monastery', location: 'Yuksom, West Sikkim' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="page-section">
        <div className="container">
          <div className="card" style={{textAlign: 'center', border: '2px solid #4CAF50'}}>
            <div style={{fontSize: '4rem', marginBottom: '1rem'}}>✅</div>
            <h2 style={{color: '#4CAF50', marginBottom: '1rem'}}>Booking Confirmed!</h2>
            <p style={{fontSize: '1.1rem', marginBottom: '2rem'}}>
              Thank you for your booking request. We have received your application and will contact you within 24 hours with confirmation details and further instructions.
            </p>
            
            <div style={{background: '#f8f6f3', padding: '2rem', borderRadius: '10px', marginBottom: '2rem'}}>
              <h3>Booking Summary</h3>
              <div style={{textAlign: 'left', maxWidth: '400px', margin: '0 auto'}}>
                <p><strong>Name:</strong> {formData.fullName}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Event:</strong> {formData.eventType}</p>
                <p><strong>Monastery:</strong> {formData.monastery}</p>
                <p><strong>Date:</strong> {formData.preferredDate}</p>
                <p><strong>People:</strong> {formData.numberOfPeople}</p>
              </div>
            </div>

            <div style={{display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap'}}>
              <button 
                className="btn"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    eventType: 'festival',
                    monastery: '',
                    preferredDate: '',
                    numberOfPeople: '1',
                    fullName: '',
                    email: '',
                    phone: '',
                    nationality: '',
                    specialRequests: '',
                    accommodation: 'none',
                    transportation: 'own',
                    dietaryRestrictions: '',
                    previousExperience: 'first-time'
                  });
                }}
              >
                📅 Book Another Event
              </button>
              <a href="/" className="btn btn-secondary">🏠 Return Home</a>
              <a href="/events" className="btn btn-secondary">📋 View All Events</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-section">
      <div className="container">
        <h1>Book Monastery Event</h1>
        <p>Reserve your participation in Sikkim's authentic monastery events and spiritual experiences.</p>

        <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', alignItems: 'start'}}>
          {/* Booking Form */}
          <form onSubmit={handleSubmit} className="card">
            <h2>Event Booking Form</h2>

            {/* Event Selection */}
            <div className="form-group">
              <label htmlFor="eventType">Event Category *</label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleInputChange}
                required
              >
                <option value="festival">Festival Celebrations</option>
                <option value="religious">Religious Ceremonies</option>
                <option value="meditation">Meditation Sessions</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="monastery">Select Monastery *</label>
              <select
                id="monastery"
                name="monastery"
                value={formData.monastery}
                onChange={handleInputChange}
                required
              >
                <option value="">Choose a monastery...</option>
                {monasteries.map(monastery => (
                  <option key={monastery.id} value={monastery.name}>
                    {monastery.name} - {monastery.location}
                  </option>
                ))}
              </select>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
              <div className="form-group">
                <label htmlFor="preferredDate">Preferred Date *</label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="numberOfPeople">Number of People *</label>
                <select
                  id="numberOfPeople"
                  name="numberOfPeople"
                  value={formData.numberOfPeople}
                  onChange={handleInputChange}
                  required
                >
                  {[...Array(20)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'person' : 'people'}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Personal Information */}
            <h3>Personal Information</h3>

            <div className="form-group">
              <label htmlFor="fullName">Full Name *</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Your full name as per ID"
                required
              />
            </div>

            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 98765 43210"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="nationality">Nationality *</label>
              <input
                type="text"
                id="nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleInputChange}
                placeholder="Your nationality"
                required
              />
            </div>

            {/* Additional Services */}
            <h3>Additional Services</h3>

            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
              <div className="form-group">
                <label htmlFor="accommodation">Accommodation</label>
                <select
                  id="accommodation"
                  name="accommodation"
                  value={formData.accommodation}
                  onChange={handleInputChange}
                >
                  <option value="none">Not Required</option>
                  <option value="monastery">Monastery Guesthouse</option>
                  <option value="nearby">Nearby Hotel</option>
                  <option value="homestay">Local Homestay</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="transportation">Transportation</label>
                <select
                  id="transportation"
                  name="transportation"
                  value={formData.transportation}
                  onChange={handleInputChange}
                >
                  <option value="own">Own Arrangement</option>
                  <option value="taxi">Taxi Service</option>
                  <option value="bus">Local Bus</option>
                  <option value="guide">With Tour Guide</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="dietaryRestrictions">Dietary Requirements</label>
              <input
                type="text"
                id="dietaryRestrictions"
                name="dietaryRestrictions"
                value={formData.dietaryRestrictions}
                onChange={handleInputChange}
                placeholder="Vegetarian, vegan, allergies, etc."
              />
            </div>

            <div className="form-group">
              <label htmlFor="previousExperience">Previous Experience</label>
              <select
                id="previousExperience"
                name="previousExperience"
                value={formData.previousExperience}
                onChange={handleInputChange}
              >
                <option value="first-time">First time visitor</option>
                <option value="few-times">Visited a few times</option>
                <option value="regular">Regular visitor</option>
                <option value="experienced">Very experienced</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="specialRequests">Special Requests or Questions</label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleInputChange}
                rows="4"
                placeholder="Any special requirements, accessibility needs, or questions..."
              />
            </div>

            {/* Terms and Submit */}
            <div style={{margin: '2rem 0'}}>
              <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <input type="checkbox" required />
                I agree to follow monastery guidelines and respect local customs and traditions
              </label>
            </div>

            <button
              type="submit"
              className="btn"
              disabled={isSubmitting}
              style={{
                width: '100%',
                padding: '1rem',
                fontSize: '1.1rem',
                opacity: isSubmitting ? 0.7 : 1,
                cursor: isSubmitting ? 'not-allowed' : 'pointer'
              }}
            >
              {isSubmitting ? '🔄 Submitting Booking...' : '📅 Submit Booking Request'}
            </button>
          </form>

          {/* Booking Information Sidebar */}
          <div>
            <div className="card">
              <h3>Booking Information</h3>
              
              <div style={{marginBottom: '1.5rem'}}>
                <h4>📋 What's Included</h4>
                <ul style={{fontSize: '0.9rem'}}>
                  <li>Event participation</li>
                  <li>English-speaking guide</li>
                  <li>Cultural orientation</li>
                  <li>Photography permissions</li>
                  <li>Blessing ceremonies</li>
                  <li>Traditional meal (for festivals)</li>
                </ul>
              </div>

              <div style={{marginBottom: '1.5rem'}}>
                <h4>💰 Pricing</h4>
                <div style={{fontSize: '0.9rem'}}>
                  <div style={{display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0'}}>
                    <span>Festival Events:</span>
                    <strong>₹1,500/person</strong>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0'}}>
                    <span>Religious Ceremonies:</span>
                    <strong>₹800/person</strong>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0'}}>
                    <span>Meditation Sessions:</span>
                    <strong>₹500/person</strong>
                  </div>
                </div>
              </div>

              <div style={{marginBottom: '1.5rem'}}>
                <h4>⏰ Booking Process</h4>
                <ol style={{fontSize: '0.9rem', paddingLeft: '1.2rem'}}>
                  <li>Submit booking form</li>
                  <li>Receive confirmation email</li>
                  <li>Make payment (within 48 hours)</li>
                  <li>Get detailed event information</li>
                  <li>Enjoy your monastery experience!</li>
                </ol>
              </div>

              <div style={{background: '#f8f6f3', padding: '1rem', borderRadius: '8px'}}>
                <h4 style={{marginBottom: '0.5rem'}}>📞 Need Help?</h4>
                <p style={{fontSize: '0.9rem', margin: '0 0 0.5rem 0'}}>
                  Contact our booking team:
                </p>
                <p style={{fontSize: '0.9rem', margin: '0'}}>
                  📧 bookings@monastery360.org<br/>
                  📱 +91 98765 43210<br/>
                  🕐 9 AM - 6 PM (Mon-Sat)
                </p>
              </div>
            </div>

            <div className="card">
              <h3>📝 Important Guidelines</h3>
              <ul style={{fontSize: '0.9rem'}}>
                <li>Advance booking required (minimum 3 days)</li>
                <li>Valid ID required for all participants</li>
                <li>Inner Line Permit needed for non-Sikkimese</li>
                <li>Respectful attire mandatory</li>
                <li>Photography restrictions in some areas</li>
                <li>Cancellation 24 hours before event</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;