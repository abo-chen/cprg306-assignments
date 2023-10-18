"use client";

import Item from "./item";
import { useState } from "react";

export default function ItemList({ items }) {
  const Items = items;
  const [sortBy, setSortBy] = useState("name");

  const renderButton = (buttonName, sortName) => {
    return (
      <button
        className="m-4 p-1 rounded"
        onClick={() => setSortBy(sortName)}
        style={{ backgroundColor: sortBy === sortName ? "blue" : "grey" }}
      >
        {buttonName}
      </button>
    );
  };

  const SortButtons = () => {
    return (
      <div className="w-1/2">
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

  if (sortBy === "groupedCategory") {
    const groupedItems = Items.reduce((accumulator, item) => {
      if (accumulator[item.category]) {
        accumulator[item.category].push(item);
      } else {
        accumulator[item.category] = [item];
      }
      return accumulator;
    }, {});
    console.log(groupedItems);
    //const categories = [...new Set(Items.map(item => item.category))];
    //console.log(categories);
    return (
      <>
        <SortButtons />
        <div className="w-1/2">
          {Object.keys(groupedItems).map((category) => (
            //console.log(category),
            <div key={category}>
              <h2>{category}</h2>
              {groupedItems[category].map((item, index) => (
                <Item
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
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
        <div className="w-1/2">
          {Items.map((item, index) => (
            <Item
              name={item.name}
              quantity={item.quantity}
              category={item.category}
              key={index}
            />
          ))}
        </div>
      </>
    );
  }
}
