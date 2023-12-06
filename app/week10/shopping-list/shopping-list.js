"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import { useState, useEffect } from "react";
import MealIdeas from "./meal-ideas";
import Link from "next/link";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function ShoppingList() {
  const [items, setItems] = useState([]);
  const [goods, setGoods] = useState("");
  const [mealIdeas, setMealIdeas] = useState([]);
  const [mealInfo, setMealInfo] = useState("");
  const [selectedMeal, setSelectedMeal] = useState(null);

  const { user, firebaseSignOut } = useUserAuth();
  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
      // Handle sign-out success
    } catch (error) {
      // Handle sign-out error
    }
  };

  async function loadItems() {
    if (user && user.uid) {
      const items = await getItems(user.uid);
      setItems(items);
    }
  }

  useEffect(() => {
    loadItems();
  }, [user]);

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

  //add item
  async function handleAddItem(newItem) {
    try {
      const newItemId = await addItem(user.uid, newItem);
      setItems((prevItems) => [...prevItems, { ...newItem, id: newItemId }]);
    } catch (error) {
      console.error("Error when trying to write to Firestore:", error);
    }
    
    alert(
      `Added item: ${newItem.name}, quantity: ${newItem.quantity}, category: ${newItem.category}`
    );
  }

  if (user === null) {
    return (
      <p>
        not login, go back to
        <Link className="hover:bg-blue-200" href="/week10">
          {" "}
          week 10
        </Link>
      </p>
    );
  } else {
    return (
      <main>
        <div className="flex">
          <h1 className="m-2 flex-none">Shopping List</h1>
          <button
            className="m-2 p-1 rounded bg-blue-500 flex-none"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
        <div className="flex">
          <div className="flex-1 max-w-sm m-2">
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemClicked={handleItemClicked} />
          </div>
          <div className="flex-1 max-w-sm m-2">
            <MealIdeas
              ideas={mealIdeas}
              goods={goods}
              selectedMealVal={selectedMeal}
              mealText={mealInfo}
              onMealSelectedFunc={handleMealSelected}
            />
          </div>
        </div>
      </main>
    );
  }
}
