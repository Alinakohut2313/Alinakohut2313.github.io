let correctCount = 0;
let totalCount = 0;
let currentAnswer = 0;

const scoreDiv = document.getElementById('score');
const taskDiv = document.getElementById('task');
const resultDiv = document.getElementById('result');
const answerInput = document.getElementById('answer');
const nextTaskBtn = document.getElementById('nextTask');
const checkBtn = document.getElementById('check');

function generateTask() {
  const a = Math.floor(Math.random() * 10) + 1; 
  const b = Math.floor(Math.random() * 10) + 1; 
  currentAnswer = a * b;
  taskDiv.textContent = `${a} × ${b} =`;
  answerInput.value = '';
  resultDiv.textContent = '';
}

function updateScore() {
  const percent = totalCount === 0 ? 0 : Math.round((correctCount / totalCount) * 100);
  scoreDiv.textContent = `Загальний рахунок: ${percent}% (${correctCount} правильних відповідей з ${totalCount})`;
}

nextTaskBtn.addEventListener('click', () => {
  generateTask();
});

checkBtn.addEventListener('click', () => {
  const userAnswer = parseInt(answerInput.value);
  totalCount++;
  if (userAnswer === currentAnswer) {
    correctCount++;
    resultDiv.textContent = 'Правильно!';
    resultDiv.style.color = 'green';
  } else {
    resultDiv.textContent = `Помилка, правильна відповідь «${currentAnswer}»`;
    resultDiv.style.color = 'red';
  }
  updateScore();
});
  

generateTask();
updateScore();