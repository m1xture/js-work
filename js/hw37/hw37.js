//todo: #1

const textElem = document.querySelector("[data-timer1]");
let hours = 1;
let minutes = 0;
let seconds = 5;

function renderTime() {
  textElem.textContent = `${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }:${seconds < 10 ? "0" + seconds : seconds}`;
}

const id = setInterval(() => {
  if (seconds !== -1) {
    seconds--;
  }
  if (seconds <= -1) {
    if (minutes !== 0) {
      seconds = 59;
      minutes--;
    }
  }
  if (minutes <= 0 && seconds <= -1) {
    if (hours !== 0) {
      minutes = 59;
      seconds = 59;
      hours--;
    }
  }
  if (minutes === 59 && seconds === 30) {
    document.body.insertAdjacentHTML(
      "afterbegin",
      `<p data-msg1>it is ${hours < 10 ? "0" + hours : hours}:${
        minutes < 10 ? "0" + minutes : minutes
      }:${seconds < 10 ? "0" + seconds : seconds} now!</p>`
    );
    setTimeout(() => {
      document.querySelector("[data-msg1]").remove();
    }, 3500);
  }
  if (hours <= 0 && minutes <= 0 && seconds <= 0) {
    setTimeout(() => {
      alert("that's all");
    }, 100);
    clearInterval(id);
  }
  renderTime();
}, 1000);

//todo: #2

const timerElem = document.querySelector("[data-timer2]");
const btnEl = document.querySelector("[data-btn]");

btnEl.addEventListener("click", startInteval);
document.addEventListener("DOMContentLoaded", startInteval);

function toggleBtn() {
  btnEl.classList.toggle("is-hidden");
  console.log(1);
}

function startInteval() {
  let time = 1000 * 30;
  // toggleBtn();
  btnEl.classList.add("is-hidden");
  function showAndHideMsg() {
    document.body.insertAdjacentHTML(
      "beforeend",
      "it is the end of second task"
    );
  }

  function animate() {
    timerElem.style.transform = "translate(30vw)";
    setTimeout(() => {
      timerElem.style.transform = "";
    }, 3000);
  }

  function renderTimer() {
    const seconds = Math.round(time / 1000);
    const miliseconds = time % 60;
    if (seconds === 10) {
      animate();
    }
    if (seconds <= 0 && miliseconds <= 0) {
      timerElem.textContent = `00:00`;
      return;
    }
    timerElem.textContent = `${seconds}:${miliseconds}`;
  }

  const id2 = setInterval(() => {
    time -= 7;
    renderTimer();
    if (time <= 0) {
      clearInterval(id2);
      toggleBtn();
    }
  }, 7);
}
