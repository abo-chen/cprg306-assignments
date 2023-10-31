"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState, useEffect } from "react";
import MealIdea from "./MealIdea";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [goods, setGoods] = useState("");
  const [mealIdeas, setMealIdeas] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const handleItemClicked = (itemName) => {
    const match = itemName.match(
      /^(.*?)(,.*?|[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}]+)$/u
    );
    const extractedName = match ? match[1].trim() : null;
    setGoods(extractedName);
  };

  function handleMealSelected(mealId) {
    setSelectedMeal(mealId);
    console.log(selectedMeal);
  }

  useEffect(() => {
    if (goods === "") {
      return; // no need to fetch
    }

    const fetchData = async () => {
      //console.log(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(goods)}`);
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(
          goods
        )}`
      );
      const data = await response.json();
      //console.log(data);
      setMealIdeas(data.meals || []);
      //console.log(mealIdeas);
    };

    fetchData();
  }, [goods]);

  

  function MealIdeas({ mealIdeas, goods }) {
    let mealInfo;
    if (mealIdeas.length > 0)
      mealInfo = "Here are some meal ideas using chicken breasts:";
    else mealInfo = "No meal ideas found for " + goods + ". ";

    if (goods !== "") {
      return (
        <div className="meal-ideas">
          <h2>Meal Ideas</h2>
          <div>{mealInfo}</div>
          {mealIdeas.map((meal) => (
            <MealIdea
              key={meal.idMeal}
              meal={meal}
              isSelected={selectedMeal === meal.idMeal}
              onMealSelected={handleMealSelected}
            />
          ))}
        </div>
      );
    }
  }

  function handleAddItem(newItem) {
    alert(
      `Added item: ${newItem.name}, quantity: ${newItem.quantity}, category: ${newItem.category}`
    );
    setItems([...items, newItem]);
  }

  return (
    <main>
      <h1 className="m-2">Shopping List</h1>
      <div className="flex">
        <div className="flex-1 max-w-sm m-2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemClicked={handleItemClicked} />
        </div>
        <div className="flex-1 max-w-sm m-2">
          {MealIdeas({ mealIdeas, goods })}
        </div>
      </div>
    </main>
  );
}
