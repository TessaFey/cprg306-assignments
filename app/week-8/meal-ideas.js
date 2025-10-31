"use client";
import { useState } from "react";
import { useEffect } from "react";

async function getIdeas(ingredient) {
    if (!ingredient)
        return [];
    
const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
const response = await fetch(url);
const data = await response.json();
return data.meals || [];
}



export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

async function loadIdeas() {
    const listOfMeals = await getIdeas(ingredient); 
    setMeals(listOfMeals);
}

useEffect(function changeIngredient() {
    loadIdeas();
}, [ingredient]);

return (
    <div className="p-4 bg-black text-white rounded-lg w-full max-w-md">
      <h2>Meal Ideas</h2>
      {!ingredient && <p>Select an item to see meal ideas.</p>}
      {ingredient && meals.length === 0 && <p>No meals found for {ingredient}.</p>}
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    </div>
  );
}