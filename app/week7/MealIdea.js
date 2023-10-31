import React from "react";
import { useState } from "react";

function MealIdea({ meal, isSelected, onMealSelected }) {
  const [ingredients, setIngredients] = useState([]);
  const handleClick = async () => {
    // 
    if (isSelected) {
      onMealSelected(null);
      setIngredients([]);
      return;
    }

    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
    );
    const data = await response.json();
    const mealDetails = data.meals[0];

    const ingredientsList = [];
    for (let i = 1; i <= 20; i++) {
      if (mealDetails[`strIngredient${i}`]) {
        ingredientsList.push(
          mealDetails[`strIngredient${i}`] + " " + mealDetails[`strMeasure${i}`]
        );
      }
    }

    setIngredients(ingredientsList);
    onMealSelected(meal.idMeal); // 当前meal已被选中
  };

  //console.log(meal);
  return (
    <div
      className="m-1 p-1 border-x-cyan-600 border-2 hover:bg-blue-200"
      onClick={handleClick}
    >
      {/* <img src={meal.strMealThumb} alt={meal.strMeal} width="100" height="100" /> */}
      <p>{meal.strMeal}</p>
      {isSelected && ingredients.length > 0 && (
        <div className="text-sm ml-4">
          <h4>Ingredients:</h4>
          <ul className="ml-2">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MealIdea;
