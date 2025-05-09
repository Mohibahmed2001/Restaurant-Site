import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero/hero-bg.jpg';
import FoodSlider from '../components/FoodSlider';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBg})` }}>
        <div className="hero-content">
          <h1>Welcome to Our Restaurant</h1>
          <p>Experience the finest dining with our exquisite menu</p>
          <Link to="/menu" className="btn btn-primary">View Menu</Link>
        </div>
      </section>

      <section className="featured-dishes">
        <div className="container">
          <h2 className="section-title">Featured Dishes</h2>
          <FoodSlider />
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Fresh Ingredients</h3>
              <p>We use only the freshest ingredients sourced locally</p>
            </div>
            <div className="feature-card">
              <h3>Expert Chefs</h3>
              <p>Our experienced chefs create amazing dishes</p>
            </div>
            <div className="feature-card">
              <h3>Great Atmosphere</h3>
              <p>Enjoy your meal in our comfortable setting</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 