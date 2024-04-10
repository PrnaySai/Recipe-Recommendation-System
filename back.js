const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Mock recipes data (replace this with your actual data source)
const recipes = [
    { 
        title: 'Spaghetti Carbonara',
        ingredients: ['spaghetti', 'eggs', 'bacon', 'parmesan cheese'],
        instructions: '1. Cook spaghetti according to package instructions... (example instructions)'
    },
    { 
        title: 'Chicken Curry',
        ingredients: ['chicken', 'curry powder', 'coconut milk', 'onion'],
        instructions: '1. Marinate chicken with curry powder... (example instructions)'
    },
    // Add more recipes as needed
];

// Endpoint to handle recipe recommendations
app.post('/recommendations', (req, res) => {
    const { preference } = req.body;
    
    // Example: Filtering recipes based on preference (you can modify this logic as needed)
    const filteredRecipes = recipes.filter(recipe =>
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(preference))
    );

    res.json(filteredRecipes);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
