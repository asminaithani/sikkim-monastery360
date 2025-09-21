import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Monastery360</h3>
            <p>Preserving and sharing Sikkim's rich monastery heritage through digital innovation.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/virtual-tours">Virtual Tours</a></li>
              <li><a href="/archives">Digital Archives</a></li>
              <li><a href="/events">Events</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: info@monastery360.org</p>
            <p>Phone: +91 98765 43210</p>
            <p>Gangtok, Sikkim, India</p>
          </div>
          
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" aria-label="Facebook">Facebook</a>
              <a href="#" aria-label="Twitter">Twitter</a>
              <a href="#" aria-label="Instagram">Instagram</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Monastery360. All rights reserved. | Built for Sikkim's Digital Heritage</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;