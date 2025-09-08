const burgerMenu = document.getElementById('burgerMenu');
const headerNav = document.getElementById('headerNav');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('open');      
    headerNav.classList.toggle('show');       
});
