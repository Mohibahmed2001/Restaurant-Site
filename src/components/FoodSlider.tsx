import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import './FoodSlider.css';

interface FoodItem {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
}

const FoodSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { addToCart } = useCart();

  const featuredItems: FoodItem[] = [
    {
      id: 'steak',
      name: 'Grilled Steak',
      price: '$29.99',
      description: 'Premium cut steak with seasonal vegetables',
      image: '/images/menu/steak.jpg'
    },
    {
      id: 'pasta',
      name: 'Pasta Carbonara',
      price: '$18.99',
      description: 'Creamy pasta with pancetta and parmesan',
      image: '/images/menu/pasta1.jpeg'
    },
    {
      id: 'pizza',
      name: 'Margherita Pizza',
      price: '$16.99',
      description: 'Fresh mozzarella, tomatoes, and basil',
      image: '/images/menu/pizza.webp'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === featuredItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredItems.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === featuredItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="food-slider">
      <div className="slider-container">
        <button className="slider-button prev" onClick={handlePrev}>❮</button>
        <div className="slider-content">
          <div className="slider-item">
            <img src={featuredItems[currentIndex].image} alt={featuredItems[currentIndex].name} />
            <div className="slider-item-info">
              <h3>{featuredItems[currentIndex].name}</h3>
              <p>{featuredItems[currentIndex].description}</p>
              <div className="slider-item-price">{featuredItems[currentIndex].price}</div>
              <button 
                className="add-to-cart-button"
                onClick={() => addToCart(featuredItems[currentIndex])}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <button className="slider-button next" onClick={handleNext}>❯</button>
      </div>
      <div className="slider-dots">
        {featuredItems.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodSlider; 