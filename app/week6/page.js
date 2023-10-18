"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json"
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    alert(`Added item: ${newItem.name}, quantity: ${newItem.quantity}, category: ${newItem.category}`);
    setItems([...items, newItem]);
  }

    return (
      <main>
        <h1 className="m-2 p-2">Shopping List</h1>
        <NewItem onAddItem = {handleAddItem}/>
        <ItemList items={items}/>
      </main>
    );
  }