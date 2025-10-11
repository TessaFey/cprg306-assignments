// called by week 5 landing page
"use client";

import { useState } from "react";


export default function NewItem() {
  const [name, setName] = useState(""); 
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("produce"); 

  
  // increment
  const increment = () => {
    setQuantity((q) => Math.min(q + 1, 20));
  };

  // decrement
  const decrement = () => {
    setQuantity((q) => Math.max(q - 1, 1));
  };

  // Handle form submission
  const handleSubmit = () => {

    

    // Create item object
    const item = { name, quantity, category };

    // Log item to console
    console.log(item);

    // Doesn't make sense for a user to be able to add negative items
    if (quantity < 1) {
    alert("Quantity must be at least 1.");
    return;
  }
    // Alert
    alert(`Item added:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);


    // Reset state values
    setName("");
    setQuantity("");
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-black p-6 rounded-2xl shadow-lg space-y-4 border-blue-700"
    >
      <div>
        <label className="block mb-1 font-semibold text-white">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      
      <div className="bg-black">
      <div>
        <label className="block mb-1 font-semibold text-white">Quantity:</label>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-2 py-2 border text-lg text-white
            ${quantity === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-300"}`}
        >
          −
        </button>

        <div className="min-w-[56px] text-center text-white">
          <span className="text-2xl font-bold">{quantity}</span>
          
        </div>

        <button
          onClick={increment}
          disabled={quantity === 20}
          className={`px-2 py-2 border text-lg text-white
            ${quantity === 20 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-300"}`}
        >
          +
        </button>
      </div>
    </div>


    
      <div>
        <label className="block mb-1 font-semibold text-white">Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="  w-full bg-black text-white border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      {}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Add Item
      </button>
    </form>
  );
}