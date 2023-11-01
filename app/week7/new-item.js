"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      name,
      quantity,
      category,
    };
    //console.log(newItem);
    onAddItem(newItem);

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <>
    <h2 className="m-1">Add New Item</h2>
    <form
      onSubmit={handleSubmit}
      className="p-2 bg-slate-900 text-black max-w-sm w-full"
    >
      <div className="mb-2">
        <input
          id="name"
          placeholder="Item name"
          required
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
        />
      </div>
      <div className="flex justify-between">
        <input
          id="quantity"
          type="number"
          min="1"
          max="99"
          required
          className="w-20 ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
        />

        <select
          id="category"
          className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="Category" disabled>
            Category
          </option>
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen food">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        +
      </button>
    </form>
    </>
  );
}
