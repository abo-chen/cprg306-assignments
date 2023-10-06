"use client";

import Item from "./item";
import { useState } from "react";
import Items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

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
    //console.log(groupedItems);
    //const categories = [...new Set(Items.map(item => item.category))];
    //console.log(categories);
    return (
      <>
        <div className="w-1/2">
          <label>Sort by:</label>
          <button
            className="m-4 p-1 rounded"
            onClick={() => setSortBy("name")}
            style={{ backgroundColor: sortBy === "name" ? "blue" : "grey" }}
          >
            name
          </button>
          <button
            className="m-4 p-1 rounded"
            onClick={() => setSortBy("category")}
            style={{ backgroundColor: sortBy === "category" ? "blue" : "grey" }}
          >
            category
          </button>
          <button
            className="m-4 p-1 rounded"
            onClick={() => setSortBy("groupedCategory")}
            style={{
              backgroundColor: sortBy === "groupedCategory" ? "blue" : "grey",
            }}
          >
            Grouped Category
          </button>
        </div>
        <div className="w-1/2">
          {Object.keys(groupedItems).map((category) => (
            //console.log(category),
            <div key={category}>
              <h2>{category}</h2>
              {groupedItems[category].map((item,index) => (
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
        <div className="w-1/2">
          <label>Sort by:</label>
          <button
            className="m-4 p-1 rounded"
            onClick={() => setSortBy("name")}
            style={{ backgroundColor: sortBy === "name" ? "blue" : "grey" }}
          >
            name
          </button>
          <button
            className="m-4 p-1 rounded"
            onClick={() => setSortBy("category")}
            style={{ backgroundColor: sortBy === "category" ? "blue" : "grey" }}
          >
            category
          </button>
          <button
            className="m-4 p-1 rounded"
            onClick={() => setSortBy("groupedCategory")}
            style={{
              backgroundColor: sortBy === "groupedCategory" ? "blue" : "grey",
            }}
          >
            category
          </button>
        </div>

        <div className="w-1/2">
          {Items.map((item,index) => (
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
