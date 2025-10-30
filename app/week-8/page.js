"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

//handler
  function addItem(newItem) {
    setItems([...items, newItem]);
  }

//handler
function itemSelect(item) {
  let cleanedName = item.name
    .split(",")[0]
    .replace(/\(.*?\)/g, "")
    .trim();

  setSelectedItemName(cleanedName);
}
  return (
    <main className="min-h-screen flex flex-col items-center bg-black border-2 border-blue-500 p-4 rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Shopping List</h1>
      <div className="mb-6 w-full max-w-md">
        <NewItem onAddItem={addItem} />
      </div>

      <ItemList items={items} onItemSelect={itemSelect} />
    </main>
  );
}

