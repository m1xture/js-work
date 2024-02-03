//todo: Завдання "Таймер інтервалу": Створіть програму, яка виводить повідомлення кожну секунду за допомогою setInterval.
//todo Після 5 повідомлень зупиніть виконання інтервалу за допомогою clearInterval.

let i = 0;

function sendMsg() {
  console.log(`it is ${i} message`);
}

const intervalId = setInterval((num) => {
  if (i === 5) {
    clearInterval(intervalId);
  }
  sendMsg();
  i++;
}, 1000);

//todo: #2

const blockEl = document.querySelector(".block");
setInterval(() => {
  blockEl.style.transform = `translate(${Math.round(
    Math.random() * (100 + 100) + -100
  )}%, ${Math.round(Math.random() * (100 + 100) + -100)}%)`;
}, 2500);

//todo: #3

const refs = {
  listEl: document.querySelector(".game__list"),
  scoresEl: document.querySelector("[data-score]"),
  clicksEl: document.querySelector("[data-clicks]"),
};
let score = 0;
let clicks = 0;
const gameDuration = 10000;
const startGamebtnEl = document.querySelector("[data-start]");

function renderScoreAndClicks() {
  refs.scoresEl.textContent = score;
  refs.clicksEl.textContent = clicks;
}

function click(e) {
  if (e.target.nodeName === "LI") {
    score++;
    clicks++;
    renderScoreAndClicks();
  } else {
    clicks++;
    renderScoreAndClicks();
  }
}

function startGame() {
  refs.listEl.addEventListener("click", click);
  setTimeout(() => {
    refs.listEl.removeEventListener("click", click);
  }, gameDuration);
}

startGamebtnEl.addEventListener("click", startGame);
