import React from 'react';
import './RecipeList.css';

const RecipeList = ({ recipes }) => {
  if (!recipes.length) {
    return (
      <p style={{ textAlign: "center", fontSize: '2.5rem', fontWeight: "bold" }}>
        No recipes found. Try another search!
      </p>
    );
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.idMeal} className="recipe">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h2>{recipe.strMeal}</h2>
         
          <a href={recipe.strSource} target="_blank" rel="noopener noreferrer">
            View Recipe
          </a>
          
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
