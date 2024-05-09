document.addEventListener('DOMContentLoaded', (event) =>{
    
    const coffeIcon = document.getElementById('coffe');
    const whiskyIcon = document.getElementById('whisky');

    function toggleIcons() {
        if (coffeIcon.style.display === 'none') {
            coffeIcon.style.display = 'block';
            whiskyIcon.style.display ='none';
        } else{
            coffeIcon.style.display = 'none';
            whiskyIcon.style.display ='block';
        }
    }

    toggleIcons();

    coffeIcon.addEventListener('click', toggleIcons);
    whiskyIcon.addEventListener('click', toggleIcons);

    // botões pt - en

    const hamburguer = document.getElementById('hamburguer');
    const arrozFeijao = document.getElementById('arrozFeijao');

    function togglePtEn() {
        if (hamburguer.style.display === 'none') {
            hamburguer.style.display = 'block';
            arrozFeijao.style.display = 'none';
        } else {
            hamburguer.style.display = 'none';
            arrozFeijao.style.display = 'block'
        }
    }

   togglePtEn();

   hamburguer.addEventListener('click', togglePtEn);
   arrozFeijao.addEventListener('click', togglePtEn);
   
});