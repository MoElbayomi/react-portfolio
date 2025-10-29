import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// GET route for recipe recommendations
app.get("/api/recipes", async (req, res) => {
  const { ingredient, diet } = req.query;

  if (!ingredient) {
    return res.status(400).json({ error: "Ingredient is required." });
  }

  try {
    // Split ingredients into array
    const ingredients = ingredient.split(",").map(i => i.trim()).filter(Boolean);
    let allMeals = [];

    // Fetch recipes for each ingredient
    for (const ing of ingredients) {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(ing)}`);
      const data = await response.json();
      if (data.meals) {
        allMeals = allMeals.concat(data.meals);
      }
    }

    // Remove duplicates by meal ID
    const uniqueMeals = Array.from(new Map(allMeals.map(m => [m.idMeal, m])).values());

    // Apply simple diet keyword filter
    let filteredMeals = uniqueMeals;
    if (diet && diet !== "Any") {
      filteredMeals = uniqueMeals.filter(m =>
        m.strMeal.toLowerCase().includes(diet.toLowerCase())
      );
    }

    if (filteredMeals.length === 0) {
      return res.json({ meals: [] });
    }

    res.json({ meals: filteredMeals });
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ error: "Failed to fetch recipes." });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
