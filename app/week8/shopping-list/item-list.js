"use client";

import Item from "./item";
import { useState } from "react";

export default function ItemList({ items , onItemClicked}) {
  const Items = items;
  const [sortBy, setSortBy] = useState("name");

  const renderButton = (buttonName, sortName) => {
    return (
      <button
        className={`m-2 p-1 rounded ${sortBy === sortName ? 'bg-blue-500' : 'bg-blue-300'}`}
        onClick={() => setSortBy(sortName)}
      >
        {buttonName}
      </button>
    );
  };

  const SortButtons = () => {
    return (
      <div className="max-w-sm w-full">
        <label>Sort by:</label>
        {renderButton("name", "name")}
        {renderButton("category", "category")}
        {renderButton("Grouped Category", "groupedCategory")}
      </div>
    );
  };

  if (sortBy === "name") {
    Items.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    Items.sort((a, b) => a.category.localeCompare(b.category));
  }

  const handleItemClicked = (itemName) => {
    //alert(`You clicked ${itemName}`);
    onItemClicked(itemName);
  }

  if (sortBy === "groupedCategory") {
    const groupedItems = Items.reduce((accumulator, item) => {
      if (accumulator[item.category]) {
        accumulator[item.category].push(item);
      } else {
        accumulator[item.category] = [item];
      }
      return accumulator;
    }, {});
    //console.log(groupedItems);
    //const categories = [...new Set(Items.map(item => item.category))];
    //console.log(categories);

    return (
      <>
        <SortButtons />
        <div className="max-w-sm w-full">
          {Object.keys(groupedItems).map((category) => (
            //console.log(category),
            <div key={category}>
              <h2>{category}</h2>
              {groupedItems[category].map((item, index) => (
                <Item
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                  onItemClicked={handleItemClicked}
                  key={index}
                />
              ))}
            </div>
          ))}
        </div>
      </>
    );
  } else {
    return (
      <>
        <SortButtons />
        <div className="max-w-sm w-full">
          {Items.map((item, index) => (
            <Item
              name={item.name}
              quantity={item.quantity}
              category={item.category}
              onItemClicked={handleItemClicked}
              key={index}
            />
          ))}
        </div>
      </>
    );
  }
}
