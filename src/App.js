import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import RecipeList from './components/RecipeList';
import axios from 'axios';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (query) => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      setRecipes(response.data.meals || []);
    } catch (error) {
      console.error( error);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home onSearch={fetchRecipes} />} />
        <Route path="/results" element={<RecipeList recipes={recipes} />} />
      </Routes>
    </Router>
  );
};

export default App;
