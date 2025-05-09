import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <div className="container">
        <h1 className="section-title">About Us</h1>
        
        <div className="about-content">
          <div className="about-section">
            <h2>Our Story</h2>
            <p>
              Founded in 2010, our restaurant has been serving exceptional cuisine
              to our valued customers for over a decade. We take pride in creating
              memorable dining experiences through our carefully crafted dishes and
              warm hospitality.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Philosophy</h2>
            <p>
              We believe in using only the finest, locally-sourced ingredients to
              create dishes that are both innovative and rooted in tradition. Our
              commitment to quality and sustainability drives everything we do.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Team</h2>
            <p>
              Our team of experienced chefs and dedicated staff work together to
              ensure that every visit to our restaurant is special. We're passionate
              about food and committed to providing excellent service to all our
              guests.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 