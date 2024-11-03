import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import foodImage from '../components/food.jpg';

const Home = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
    navigate('/results'); 
  };

  return (
    <div className="homepage">
      
      <div className="content">
        <div className="text-content">
          <h1>Welcome To The Home of Recipes</h1>
          <p>Chef's special freshness in every bite.</p>
          <form onSubmit={handleSubmit} className="search-bar">
            <input
              type="text"
              placeholder="Search recipes"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>

          <div className="image-container">
          
          <img src={foodImage} alt="Delicious Food" className="food-image" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
