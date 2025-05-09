import React from 'react';
import { useCart } from '../context/CartContext';
import './Menu.css';

// Import menu images
import oysterImg from '../assets/menu/oyster.jpg';
import saladImg from '../assets/menu/salad.jpg';
import italyImg from '../assets/menu/italy.jpg';
import steakImg from '../assets/menu/steak.jpg';
import chickenImg from '../assets/menu/Chicken.webp';
import pastaImg from '../assets/menu/pasta.jpg';
import burgerImg from '../assets/menu/burger-banner.jpg';
import pizzaImg from '../assets/menu/pizza.webp';
import pasta1Img from '../assets/menu/pasta1.jpeg';

const Menu: React.FC = () => {
  const { addToCart } = useCart();

  const menuItems = [
    {
      category: 'Appetizers',
      items: [
        { 
          id: 'oyster',
          name: 'Fresh Oysters', 
          price: '$12.99', 
          description: 'Fresh oysters served with lemon and cocktail sauce',
          image: oysterImg
        },
        { 
          id: 'salad',
          name: 'Caesar Salad', 
          price: '$10.99', 
          description: 'Crisp romaine lettuce with parmesan and croutons',
          image: saladImg
        },
        { 
          id: 'antipasto',
          name: 'Italian Antipasto', 
          price: '$14.99', 
          description: 'Selection of Italian cured meats and cheeses',
          image: italyImg
        }
      ]
    },
    {
      category: 'Main Courses',
      items: [
        { 
          id: 'steak',
          name: 'Grilled Steak', 
          price: '$29.99', 
          description: 'Premium cut steak with seasonal vegetables',
          image: steakImg
        },
        { 
          id: 'chicken',
          name: 'Chicken Marsala', 
          price: '$22.99', 
          description: 'Chicken breast in marsala wine sauce',
          image: chickenImg
        },
        { 
          id: 'pasta',
          name: 'Pasta Primavera', 
          price: '$19.99', 
          description: 'Fresh pasta with seasonal vegetables',
          image: pastaImg
        }
      ]
    },
    {
      category: 'Specialties',
      items: [
        { 
          id: 'burger',
          name: 'Classic Burger', 
          price: '$15.99', 
          description: 'Angus beef patty with special sauce',
          image: burgerImg
        },
        { 
          id: 'pizza',
          name: 'Margherita Pizza', 
          price: '$16.99', 
          description: 'Fresh mozzarella, tomatoes, and basil',
          image: pizzaImg
        },
        { 
          id: 'carbonara',
          name: 'Pasta Carbonara', 
          price: '$18.99', 
          description: 'Creamy pasta with pancetta and parmesan',
          image: pasta1Img
        }
      ]
    }
  ];

  return (
    <div className="menu-page">
      <div className="container">
        <h1 className="section-title">Our Menu</h1>
        {menuItems.map((category, index) => (
          <div key={index} className="menu-category">
            <h2>{category.category}</h2>
            <div className="menu-items">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="menu-item">
                  <div className="menu-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="menu-item-content">
                    <div className="menu-item-header">
                      <h3>{item.name}</h3>
                      <span className="price">{item.price}</span>
                    </div>
                    <p>{item.description}</p>
                    <button 
                      className="add-to-cart-button"
                      onClick={() => addToCart(item)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu; 