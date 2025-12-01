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
    async function loadData() {
    const servicesContainer = document.getElementById('services-container');
    const projectsContainer = document.getElementById('projects-container');

  
    if (!servicesContainer && !projectsContainer) return;

    try {
        
               const response = await fetch('./assets/data/projects.json');

        
       
        const data = await response.json();

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

        // 4. Рендер Проєктів (якщо ми на сторінці проєктів)
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
            
            // Запускаємо автоскрол після того, як картки додалися
          
            if (typeof initAutoScroll === 'function') {
                initAutoScroll();
            }
        }

    } catch (error) {
        console.error('Помилка завантаження даних:', error);
    }
}


document.addEventListener('DOMContentLoaded', loadData);
// ==========================================
// АВТОМАТИЧНИЙ СКРОЛ ПРОЄКТІВ (Нескінченна стрічка)
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('projects-container');
    
    
    if (!container) {
        console.log("Помилка: Контейнер #projects-container не знайдено!");
        return;
    } 
    console.log("Контейнер знайдено, запускаємо скрол...");

   
    const cards = Array.from(container.children);
    if (cards.length === 0) return; 
    
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        container.appendChild(clone);
    });


    let scrollPos = 0;
    const speed = 1; 
    let isPaused = false;

    function animateScroll() {
        if (!isPaused) {
            scrollPos += speed;
            
           
            if (scrollPos >= container.scrollWidth / 2) {
                scrollPos = 0;
            }
            
            container.scrollLeft = scrollPos;
        }
        requestAnimationFrame(animateScroll);
    }

    
    container.addEventListener('mouseenter', () => isPaused = true);
    container.addEventListener('mouseleave', () => isPaused = false);

    animateScroll();
});
//модальне вікно
document.addEventListener('DOMContentLoaded', () => {
    
    const modal = document.getElementById("myModal");
    const btn = document.getElementById("openModalBtn");
    const closeSpan = document.querySelector(".close-modal");

   
    if (!modal || !btn || !closeSpan) return;

   
    btn.addEventListener('click', (e) => {
        e.preventDefault(); 
        modal.classList.add("show");
    });

    // 2. Закрити при кліку на хрестик
    closeSpan.addEventListener('click', () => {
        modal.classList.remove("show");
    });

    // 3. Реалізація "Miss Click" (закриття при кліку на темний фон)
    window.addEventListener('click', (event) => {
        
        if (event.target === modal) {
            modal.classList.remove("show");
        }
    });

   
    document.addEventListener('keydown', (event) => {
        if (event.key === "Escape" && modal.classList.contains("show")) {
            modal.classList.remove("show");
        }
    });

});
