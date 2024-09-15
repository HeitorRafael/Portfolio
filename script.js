document.addEventListener('DOMContentLoaded', () => {
    const coffeIcon = document.getElementById('coffe');
    const whiskyIcon = document.getElementById('whisky');
    const body = document.body;

    function toggleTheme() {
        body.classList.toggle('dark-mode');
        if (whiskyIcon.style.display === 'none') {
            whiskyIcon.style.display = 'block';
            coffeIcon.style.display = 'none';
        } else {
            whiskyIcon.style.display = 'none';
            coffeIcon.style.display = 'block';
        }
    }

    coffeIcon.addEventListener('click', toggleTheme);
    whiskyIcon.addEventListener('click', toggleTheme);

    // Gerador de receitas
    const recipeButton = document.getElementById('generate-recipe-btn');
    const recipeOutput = document.getElementById('recipe-output');

    const recipes = [
        'Receita de Panqueca de Banana',
        'Receita de Omelete de Espinafre',
        'Receita de Salada Caprese',
        'Receita de Shimeji ao Molho Shoyu'
    ];

    recipeButton.addEventListener('click', () => {
        const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
        recipeOutput.textContent = randomRecipe;
    });
});
