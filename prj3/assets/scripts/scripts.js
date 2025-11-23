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

if (slider && slides.length > 0 && prevBtn && nextBtn) {

  let index = 0;

  function slidesPerView() {
    return window.innerWidth >= 1024 ? 3 : 1;
  }

  function renderSlider() {
    const spv = slidesPerView();
    slider.style.transform = `translateX(${-index * (100 / spv)}%)`;

    dots.forEach(dot => dot.classList.remove("dot-active"));
    let activeDot = Math.floor(index / spv);
    if (dots[activeDot]) dots[activeDot].classList.add("dot-active");
  }

  nextBtn.addEventListener("click", () => {
    const spv = slidesPerView();
    index += spv;
    if (index > slides.length - spv) index = 0;
    renderSlider();
  });

  prevBtn.addEventListener("click", () => {
    const spv = slidesPerView();
    index -= spv;
    if (index < 0) index = Math.floor((slides.length - 1) / spv) * spv;
    renderSlider();
  });

  dots.forEach((dot, dotIndex) => {
    dot.addEventListener("click", () => {
      index = dotIndex * slidesPerView();
      renderSlider();
    });
  });

  window.addEventListener("resize", renderSlider);

  renderSlider();
}
// ==========================================
    // 4. FAQ АКОРДЕОН (Safe Mode)
    // ==========================================
const faqItems = document.querySelectorAll('.faq-item');

    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const header = item.querySelector('.faq-question-header');
            if (header) {
                header.addEventListener('click', () => {
                    item.classList.toggle('active');
                });
            }
        });
    }
  // ==========================================
    // 5. ДИНАМІЧНИЙ ВИВІД JSON (Load Data)
    // ==========================================
    function loadData() { // Прибираємо async, бо fetch більше немає
    const servicesContainer = document.getElementById('services-container');
    const projectsContainer = document.getElementById('projects-container');

    if (!servicesContainer && !projectsContainer) return;


    const data = {
        "services": [
            {
                "iconId": "#icon-dev",
                "title_uk": "Розробка",
                "desc_uk": "Створюй платформи найвищої якості разом із нами."
            },
            {
                "iconId": "#icon-uiux",
                "title_uk": "UI/UX Дизайн",
                "desc_uk": "Ми надаємо UI/UX дизайн найвищого рівня."
            },
            {
                "iconId": "#icon-graphic",
                "title_uk": "Графічний дизайн",
                "desc_uk": "Наші професійні дизайнери створять унікальні рішення."
            },
            {
                "iconId": "#icon-motion",
                "title_uk": "Моушн-графіка",
                "desc_uk": "Розробляємо анімації найвищої якості."
            },
            {
                "iconId": "#icon-photo",
                "title_uk": "Фотографія",
                "desc_uk": "Ми пропонуємо професійну фотозйомку для вашого бренду."
            },
            {
                "iconId": "#icon-video",
                "title_uk": "Відеографія",
                "desc_uk": "Знімаємо відео з найкращою якістю та креативом."
            }
        ],
        "projects": [
            {
                "img": "./assets/images/main-images/image-29.png",
                "title_uk": "Брендинг та веб‑розробка",
                "desc_uk": "Айдентика, UX/UI дизайн і створення сучасного сайту."
            },
            {
                "img": "./assets/images/main-images/image-28.png",
                "title_uk": "Мобільний застосунок",
                "desc_uk": "Функціональний додаток з анімаціями."
            },
             {
                "img": "./assets/images/main-images/image-30.png",
                "title_uk": "Корпоративний сайт",
                "desc_uk": "Розробка платформи для внутрішньої комунікації."
            },
             {
                "img": "./assets/images/main-images/image-29.png",
                "title_uk": "Анімаційний проморолик",
                "desc_uk": "Комплексна motion‑графіка для рекламної кампанії."
            },
             {
                "img": "./assets/images/main-images/image-28.png",
                "title_uk": "Редизайн інтернет‑магазину",
                "desc_uk": "Оновлений UX, покращена структура."
            },
             {
                "img": "./assets/images/main-images/image-30.png",
                "title_uk": "Фото‑проєкт",
                "desc_uk": "Професійні зйомки для бренду одягу."
            }
        ]
    };


    
    // Рендер Послуг
    if (servicesContainer && data.services) {
        servicesContainer.innerHTML = ''; 
        data.services.forEach(item => {
            const article = document.createElement('article');
            article.innerHTML = `
                <svg class="service-icon"><use xlink:href="${item.iconId}"></use></svg>
                <span>${item.title_uk}</span>
                <p>${item.desc_uk}</p>
            `;
            servicesContainer.appendChild(article);
        });
    }

    // Рендер Проєктів
    if (projectsContainer && data.projects) {
        projectsContainer.innerHTML = '';
        data.projects.forEach(project => {
            const div = document.createElement('div');
            div.classList.add('project-card');
            div.innerHTML = `
                <img src="${project.img}" alt="${project.title_uk}"/>
                <h3>${project.title_uk}</h3>
                <p>${project.desc_uk}</p>
            `;
            projectsContainer.appendChild(div);
        });
    }
}




