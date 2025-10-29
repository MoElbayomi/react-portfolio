document.getElementById("recipeForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const ingredientInput = document.getElementById("ingredient").value.trim();
  const diet = document.getElementById("diet").value;
  const resultDiv = document.getElementById("result");

  if (!ingredientInput) {
    resultDiv.innerHTML = "<p>Please enter at least one ingredient.</p>";
    return;
  }

  resultDiv.innerHTML = "<p>Loading recipes...</p>";

  // Split ingredients and clean spaces
  const ingredients = ingredientInput.split(",").map(i => i.trim()).filter(Boolean);
  let allMeals = [];

  try {
    // Fetch recipes for each ingredient separately
    for (const ing of ingredients) {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(ing)}`);
      const data = await res.json();
      if (data.meals) {
        allMeals = allMeals.concat(data.meals);
      }
    }

    // Remove duplicates by meal ID
    const uniqueMeals = Array.from(new Map(allMeals.map(m => [m.idMeal, m])).values());

    if (uniqueMeals.length === 0) {
      resultDiv.innerHTML = "<p>No recipes found. Try different ingredients!</p>";
      return;
    }

    // Optional diet keyword filter
    let filteredMeals = uniqueMeals;
    if (diet && diet !== "Any") {
      filteredMeals = uniqueMeals.filter(m =>
        m.strMeal.toLowerCase().includes(diet.toLowerCase())
      );
    }

    resultDiv.innerHTML = filteredMeals
      .map(
        (meal) => `
      <div class="recipe">
        <h3>${meal.strMeal}</h3>
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <a href="${meal.strSource || meal.strYoutube}" target="_blank">View Recipe</a>
      </div>`
      )
      .join("");
  } catch (err) {
    resultDiv.innerHTML = `<p style="color:red;">Error: ${err.message}</p>`;
  }
});

// Random Recipe button
document.getElementById("randomBtn").addEventListener("click", async () => {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "<p>Fetching random recipe...</p>";

  try {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const data = await res.json();
    const meal = data.meals[0];

    resultDiv.innerHTML = `
      <div class="recipe">
        <h3>${meal.strMeal}</h3>
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <a href="${meal.strSource || meal.strYoutube}" target="_blank">View Recipe</a>
      </div>
    `;
  } catch (err) {
    resultDiv.innerHTML = `<p style="color:red;">Error: ${err.message}</p>`;
  }
});
