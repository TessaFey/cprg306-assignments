"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <main className="min-h-screen flex flex-col items-center bg-black border-2 border-blue-500 p-4 rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Shopping List</h1>
      {/* Add Item Form */}
      <div className="mb-6 w-full max-w-md">
        <NewItem onAddItem={handleAddItem} />
      </div>

      {/* Item List */}
      <ItemList items={items} />
    </main>
  );
}
