"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: Math.random().toString(36).substring(2, 9),
      name: name.trim(),
      quantity: parseInt(quantity),
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
      className="flex flex-col gap-3 bg-black p-4 rounded shadow"
    >
      <input
        className="border rounded p-2 bg-black text-white hover:bg-black"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Item name"
        required
      />

      <input
        className="border rounded p-2 bg-black text-white hover:bg-black"
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />

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
