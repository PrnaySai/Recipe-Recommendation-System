// Frontend (app.js)

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('recipe-form');
    const input = document.getElementById('preferences');
    const recommendationsContainer = document.getElementById('recommendations');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const preference = input.value.trim().toLowerCase();

        // Send preference data to backend
        fetch('/recommendations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ preference })
        })
        .then(response => response.json())
        .then(data => {
            // Clear previous recommendations
            recommendationsContainer.innerHTML = '';

            // Display recommendations
            data.forEach(recipe => {
                const recipeCard = document.createElement('div');
                recipeCard.classList.add('recipe-card');
                recipeCard.innerHTML = `
                    <h2>${recipe.title}</h2>
                    <p>Ingredients: ${recipe.ingredients.join(', ')}</p>
                    <p>Instructions: ${recipe.instructions}</p>
                `;
                recommendationsContainer.appendChild(recipeCard);
            });
        })
        .catch(error => {
            console.error('Error fetching recommendations:', error);
        });
    });
});
