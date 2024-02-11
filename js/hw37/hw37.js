//todo: #1
//? Я сделаю таймер не на час, а немного меньше
//? чтобы можно было протестировать

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
