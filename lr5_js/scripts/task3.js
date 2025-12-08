let correctCount = 0;
let questionNumber = 0;
let correctAnswer;

// --- Створити нове завдання ---
function nextTask() {
    if (questionNumber >= 10) {
        document.getElementById("result").textContent = "Тест завершено!";
        return;
    }

    questionNumber++;
    document.getElementById("result").textContent = "";

    // Генеруємо множники
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;
    correctAnswer = a * b;

    document.getElementById("task").innerHTML = `<b>${a} × ${b} =</b>`;

    // Генеруємо випадкові варіанти
    let options = new Set();
    options.add(correctAnswer);

    while (options.size < 5) {
        options.add(Math.floor(Math.random() * 90) + 1);
    }

    // Перемішати
    let shuffled = Array.from(options).sort(() => Math.random() - 0.5);

    // Вивести радіокнопки
    let html = "";
    shuffled.forEach(opt => {
        html += `<label><input type="radio" name="ans" value="${opt}" onclick="checkAnswer(${opt})"> ${opt}</label><br>`;
    });

    document.getElementById("answers").innerHTML = html;

    // Оновити рахунок
    updateScore();
}

// --- Перевірка відповіді ---
function checkAnswer(userAnswer) {
    if (userAnswer == correctAnswer) {
        correctCount++;
        document.getElementById("result").style.color = "green";
        document.getElementById("result").textContent = "Правильно!";
    } else {
        document.getElementById("result").style.color = "red";
        document.getElementById("result").textContent =
            `Помилка, правильна відповідь «${correctAnswer}»`;
    }

    updateScore();

    // Заборонити змінювати відповідь
    let radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(r => r.disabled = true);
}

// --- Оновлення рахунку ---
function updateScore() {
    let percent = Math.round((correctCount / questionNumber) * 100);
    if (questionNumber === 0) percent = 0;

    document.getElementById("score").textContent =
        `Загальний рахунок ${percent}% (${correctCount} правильних відповідей з ${questionNumber})`;
}

// Завантажити перше завдання
nextTask();