document.addEventListener('DOMContentLoaded', () => {
    const coffeIcon = document.getElementById('coffe');
    const whiskyIcon = document.getElementById('whisky');
    const body = document.body;

    const arrozFeijao = document.getElementById('arrozFeijao');
    const hamburguer = document.getElementById('hamburguer');
    const descriptionTxt = document.getElementById('descriptionTxt');

    const textPT = {
        description: "- Heitor Rafael B. Delfino, Muito prazer. <br>" +
                     "- Ex-chef de cozinha, atual Analista e Desenvolvedor de Software <br>" +
                     "- Conhecimentos: HTML, CSS, JavaScript, Node.js <br>" +
                     "- Soft Skills: Relacionamento interpessoal, espirituoso, engajado, proativo, com alto senso de responsabilidade, flexível e conciliador. <br>" +
                     "- Cursando ADS 2023/2026 <br>" +
                     "- Em busca de uma oportunidade na área tech para desenvolver e aprimorar meus conhecimentos."
    };

    const textEN = {
        description: "- Heitor Rafael B. Delfino, Nice to meet you. <br>" +
                     "- Former chef, current Software Developer <br>" +
                     "- Skills: HTML, CSS, JavaScript, Node.js <br>" +
                     "- Soft Skills: Interpersonal relationships, witty, engaged, proactive, highly responsible, flexible, and conciliatory. <br>" +
                     "- Studying ADS 2023/2026 <br>" +
                     "- Seeking an opportunity in the tech field to develop and improve my knowledge."
    };

    function toggleLanguage() {
        if (hamburguer.style.display === 'none') {
            hamburguer.style.display = 'block';
            arrozFeijao.style.display = 'none';
            descriptionTxt.innerHTML = textEN.description;
        } else {
            hamburguer.style.display = 'none';
            arrozFeijao.style.display = 'block';
            descriptionTxt.innerHTML = textPT.description;
        }
    }

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

    // Evento para alternar entre os idiomas
    arrozFeijao.addEventListener('click', toggleLanguage);
    hamburguer.addEventListener('click', toggleLanguage);

    

    // Gerador de receitas
    const recipeButton = document.getElementById('generate-recipe-btn');
    const recipeOutput = document.getElementById('recipe-output');

    const recipes = [
        'Receita de Panqueca de Banana:',
        'Receita de Omelete de Espinafre:',
        'Receita de Salada Caprese:',
        'Receita de Shimeji ao Molho Shoyu:'
    ];

    recipeButton.addEventListener('click', () => {
        const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
        recipeOutput.textContent = randomRecipe;
    });
});
