// called by week 4 landing page
"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  // increment
  const increment = () => {
    setQuantity((q) => Math.min(q + 1, 20));
  };

  // decrement
  const decrement = () => {
    setQuantity((q) => Math.max(q - 1, 1));
  };

  return (
    <div className="bg-black">

      <div className="flex items-center gap-2">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-2 py-2 border text-lg
            ${quantity === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"}`}
        >
          −
        </button>

        <div className="min-w-[56px] text-center">
          <span className="text-2xl font-bold">{quantity}</span>
        </div>

        <button
          onClick={increment}
          disabled={quantity === 20}
          className={`px-2 py-2 border text-lg
            ${quantity === 20 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"}`}
        >
          +
        </button>
      </div>
    </div>
  );
}
