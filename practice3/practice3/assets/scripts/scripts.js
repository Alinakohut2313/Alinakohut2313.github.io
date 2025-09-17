// --- Бургер ---
const burgerMenu = document.getElementById('burgerMenu');
const headerNav = document.getElementById('headerNav');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('open');      
  headerNav.classList.toggle('show');       
});

// --- Слайдер ---
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const dots = document.querySelectorAll(".dot");

let index = 0;


function slidesPerView() {
  return window.innerWidth >= 1024 ? 3 : 1;
}


function renderSlider() {
  const spv = slidesPerView();
  slider.style.transform = `translateX(${-index * (100 / spv)}%)`;

  dots.forEach(dot => dot.classList.remove("dot-active"));
  let activeDot = Math.floor(index / spv);
  if (dots[activeDot]) {
    dots[activeDot].classList.add("dot-active");
  }
}

// Кнопка "вперед"
nextBtn.addEventListener("click", () => {
  const spv = slidesPerView();
  index += spv; 
  if (index > slides.length - spv) {
    index = 0; 
  }
  renderSlider();
});

// Кнопка "назад"
prevBtn.addEventListener("click", () => {
  const spv = slidesPerView();
  index -= spv; 
  if (index < 0) {
    index = Math.floor((slides.length - 1) / spv) * spv; 
  }
  renderSlider();
});

// Клік по крапці
dots.forEach((dot, dotIndex) => {
  dot.addEventListener("click", () => {
    index = dotIndex * slidesPerView();
    renderSlider();
  });
});

// Ресайз вікна
window.addEventListener("resize", renderSlider);

// Старт
renderSlider();
