import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import './Home.css';

const Home = () => {
  const [location, setLocation] = useState('');
  const [distance, setDistance] = useState('');
  const [maxPeople, setMaxPeople] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/tour?location=${location}&distance=${distance}&maxPeople=${maxPeople}&priceRange=${priceRange}`);
  };

  return (
    <div className="home-container">
      {/* <nav className="navbar">
        <div className="navbar-left">
          <Link to="/" className="navbar-brand">TakeOff</Link>
        </div>
        <div className="navbar-right">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/tour">Tour</Link>
          <Link to="/book">Book</Link>
          <Link to="/login">login</Link>
        </div>
      </nav> */}

      <div className="home-background">
        <div className="home-content">
          <h1>Travel Around the World with Us</h1>
          <p>Travel to your favourite city with respect to the environment!</p>
          <ScrollLink to="popular-destinations" smooth={true} duration={500}>
            <button className="explore-button">Explore Now</button>
          </ScrollLink>
        </div>
      </div>

    
      <div className="search-section">
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Location" 
            className="search-input" 
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <input 
            type="text" 
            placeholder="Distance" 
            className="search-input" 
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          />
          <input 
            type="text" 
            placeholder="Max-People" 
            className="search-input" 
            value={maxPeople}
            onChange={(e) => setMaxPeople(e.target.value)}
          />
          <input 
            type="text" 
            placeholder="Price range" 
            className="search-input" 
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>Search</button>
        </div>
      </div>

    
      <div className="popular-destinations">
        <h2>Popular Destinations</h2>
        <div className="destinations-container">
          <div className="destination-card">
            <img src="lon.jpg" alt="London" />
            <h3>Trip in London</h3>
            <p>Explore the historic landmarks of London, from the majestic Tower of London to the lively streets of Camden.</p>
          </div>
          <div className="destination-card">
            <img src="mal.jpg" alt="Malaysia" />
            <h3>Trip in Malaysia</h3>
            <p>Discover Malaysia's stunning beaches and lush rainforests. Immerse yourself in its diverse culture.</p>
          </div>
          <div className="destination-card">
            <img src="del.webp" alt="Delhi" />
            <h3>Trip in Delhi</h3>
            <p>Experience the rich history of Delhi with visits to the Red Fort and Qutub Minar.</p>
          </div>
          <div className="destination-card">
            <img src="par.jpg" alt="Paris" />
            <h3>Trip in Paris</h3>
            <p>Stroll through the romantic streets of Paris and marvel at the Eiffel Tower.</p>
          </div>
          <div className="destination-card">
            <img src="tok.jpg" alt="Tokyo" />
            <h3>Trip in Tokyo</h3>
            <p>Dive into the bustling energy of Tokyo, from its towering skyscrapers to its serene temples.</p>
          </div>
        </div>
      </div>

      {/* Why Should You Choose Us Section */}
      <div className="why-choose-us">
        <h2>Why Should You Choose Us?</h2>
        <div className="why-choose-container">
          <div className="why-choose-text">
            <div className="why-choose-item">
              <h3>Safety and Support</h3>
              <p>Our top priority is the safety and well-being of our clients. We maintain high safety standards and have emergency support available during the trip.</p>
            </div>
            <div className="why-choose-item">
              <h3>Diverse Range of Destinations</h3>
              <p>Whether it's a domestic tour or an international adventure, we cover a wide range of destinations to cater to different interests and preferences.</p>
            </div>
            <div className="why-choose-item">
              <h3>24/7 Customer Support</h3>
              <p>Our dedicated customer support team is available round the clock to address any queries or concerns before, during, and after the trip.</p>
            </div>
          </div>
          <div className="why-choose-images">
            <img src="safety.avif" alt="Safety" className="why-choose-image" />
            <img src="support.jpg" alt="Support" className="why-choose-image tall-image" />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer>
        <div className="footer-container">
          <div className="footer-column">
            <img src="logo.jpg" alt="Travel World Logo" className="footer-logo" />
            <p>The biggest ADVENTURE you can take is to live the life of your Dreams..</p>
            <div className="social-icons">
              <a href="#"><img src="you.jpg" alt="YouTube" /></a>
              <a href="#"><img src="fac.jpg" alt="Facebook" /></a>
              <a href="#"><img src="twi.jpg" alt="Twitter" /></a>
              <a href="#"><img src="ins.jpg" alt="Instagram" /></a>
            </div>
          </div>
          <div className="footer-column">
            <h3>Discover</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/tour">Tour</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact</h3>
            <ul>
              <li><span>Address:</span> Sylhet, Bangladesh</li>
              <li><span>Email:</span> dev.muhib01@gmail.com</li>
              <li><span>Phone:</span> 01234567890</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024, design and developed by TakeOff.. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
