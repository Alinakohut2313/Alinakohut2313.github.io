const burgerMenu = document.getElementById('burgerMenu');
const headerNav = document.getElementById('headerNav');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('open');      
    headerNav.classList.toggle('show');       
});
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let index = 0;

function showSlide() {
  slider.style.transform = `translateX(${-index * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  showSlide();
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide();
});

showSlide();