import MealIdea from "./meal-idea";

function MealIdeas({ ideas=[], goods, selectedMealVal, mealText, onMealSelectedFunc }) {
    if (goods !== "") {
      return (
        <div className="meal-ideas">
          <h2>Meal Ideas</h2>
          <div>{mealText}</div>
          {ideas.map((meal) => (
            <MealIdea
              key={meal.idMeal}
              meal={meal}
              isSelected={selectedMealVal === meal.idMeal}
              onMealSelected={onMealSelectedFunc}
            />
          ))}
        </div>
      );
    }
  }

export default MealIdeas;