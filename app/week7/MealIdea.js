import React from 'react';

function MealIdea({ meal }) {
    console.log(meal);
    return (
        <div className="m-1 p-1 border-x-cyan-600 border-2 hover:bg-blue-200">
            {/* <img src={meal.strMealThumb} alt={meal.strMeal} width="100" height="100" /> */}
            <p>{meal.strMeal}</p>
        </div>
    );
}

export default MealIdea;
