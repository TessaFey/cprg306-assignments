"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");
function increment() {
  if (quantity < 20) setQuantity(quantity + 1);
}

function decrement() {
  if (quantity > 1) setQuantity(quantity - 1);
}

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: Math.random().toString(36).substring(2, 9),
      name: name.trim(),
      category,
    };
    onAddItem(newItem);
    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 bg-black text-white p-4 rounded shadow"
    >
      <input
        className="border rounded p-2 bg-black text-white hover:bg-black"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Item name"
        required
      />

      <div className="flex items-center justify-center gap-2">
        <button
          type="button"
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-2 py-2 border text-lg ${
            quantity === 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-800"
          }`}
        >
          −
        </button>

        <div className="min-w-[56px] text-center">
          <span className="text-2xl font-bold">{quantity}</span>
        </div>

        <button
          type="button"
          onClick={increment}
          disabled={quantity === 20}
          className={`px-2 py-2 border text-lg ${
            quantity === 20
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-800"
          }`}
        >
          +
        </button>
      </div>

      <select
        className="border rounded p-2 bg-black text-white hover:bg-black"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="produce">Produce</option>
        <option value="dairy">Dairy</option>
        <option value="bakery">Bakery</option>
        <option value="meat">Meat</option>
        <option value="dry goods">Dry Goods</option>
        <option value="canned goods">Canned Goods</option>
        <option value="household">Household</option>
      </select>

      <button
        type="submit"
        className="bg-black text-white py-2 rounded hover:bg-black"
      >
        Add Item
      </button>
    </form>
  );
}
