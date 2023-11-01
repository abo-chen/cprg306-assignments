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
  const [mealInfo, setMealInfo] = useState("");
  const [selectedMeal, setSelectedMeal] = useState(null);

  //click on item
  const handleItemClicked = (itemName) => {
    const match = itemName.match(/\w+\s?\w+/);
    const extractedName = match ? match[0].trim() : null;
    setGoods(extractedName);
  };

  //click on meal
  function handleMealSelected(mealId) {
    setSelectedMeal(mealId);
  }

  //when goods changes, fetch meal ideas
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
      //console.log(data.meals);
      if (data.meals && data.meals.length > 0)
        setMealInfo("Here are some meal ideas using " + goods + ":");
      else setMealInfo("No meal ideas found for " + goods + ". ");
    };

    fetchData();
  }, [goods]);

  

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
          { MealIdeas({ ideas:mealIdeas, goods, selectedMealVal:selectedMeal, mealText: mealInfo, onMealSelectedFunc:handleMealSelected }) }
          { /*<MealIdeas ideas={mealIdeas} goods={goods} selectedMealVal={selectedMeal} mealText={mealInfo} onMealSelectedFunc={handleMealSelected} /> */}
        </div>
      </div>
    </main>
  );
}
