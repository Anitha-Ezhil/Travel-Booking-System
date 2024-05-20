import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-images">
          <img src="agency.avif" alt="Travel Image 1" className="about-image" />
          <img src="agen2.webp" alt="Travel Image 2" className="about-image" />
        </div>
        <div className="about-text">
          <h2>About Our Travel Agency</h2>
          <p>
            Welcome to TakeOff..! We are dedicated to making your travel dreams come true. 
            Our agency specializes in curating personalized travel experiences that cater to your 
            unique preferences and desires. Whether you're looking for an adventurous hiking trip, 
            a relaxing beach vacation, or an immersive cultural tour, we have something for everyone.
          </p>
          <p>
            With over a decade of experience in the travel industry, our team of experts works tirelessly 
            to provide you with the best travel deals, comprehensive safety guides, and exceptional customer 
            service. We partner with trusted airlines, hotels, and tour operators around the globe to ensure 
            that your journey is seamless and unforgettable.
          </p>
          <p>
            At Wanderlust Travels, we believe that travel is more than just visiting new places—it's about 
            creating memories that will last a lifetime. Let us help you discover the world and experience 
            the joy of travel like never before.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
