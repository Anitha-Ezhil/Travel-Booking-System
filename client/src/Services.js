import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel, faUtensils, faBullhorn, faGlobe, faPlane, faHiking } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <div className="services-container">
      <h2>SERVICES</h2>
      <div className="services-grid">
        <div className="service-card">
          <FontAwesomeIcon icon={faHotel} className="service-icon" />
          <h3>Affordable Hotels</h3>
          <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Culpa Inventore Facilis Consequatur Praesentium Dolor Nulla In, Nobis Aliquid Enim Dolorum?</p>
        </div>
        <div className="service-card">
          <FontAwesomeIcon icon={faUtensils} className="service-icon" />
          <h3>Food And Drinks</h3>
          <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Culpa Inventore Facilis Consequatur Praesentium Dolor Nulla In, Nobis Aliquid Enim Dolorum?</p>
        </div>
        <div className="service-card">
          <FontAwesomeIcon icon={faBullhorn} className="service-icon" />
          <h3>Safety Guide</h3>
          <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Culpa Inventore Facilis Consequatur Praesentium Dolor Nulla In, Nobis Aliquid Enim Dolorum?</p>
        </div>
        <div className="service-card">
          <FontAwesomeIcon icon={faGlobe} className="service-icon" />
          <h3>Around The World</h3>
          <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Culpa Inventore Facilis Consequatur Praesentium Dolor Nulla In, Nobis Aliquid Enim Dolorum?</p>
        </div>
        <div className="service-card">
          <FontAwesomeIcon icon={faPlane} className="service-icon" />
          <h3>Fastest Travel</h3>
          <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Culpa Inventore Facilis Consequatur Praesentium Dolor Nulla In, Nobis Aliquid Enim Dolorum?</p>
        </div>
        <div className="service-card">
          <FontAwesomeIcon icon={faHiking} className="service-icon" />
          <h3>Adventures</h3>
          <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Culpa Inventore Facilis Consequatur Praesentium Dolor Nulla In, Nobis Aliquid Enim Dolorum?</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
