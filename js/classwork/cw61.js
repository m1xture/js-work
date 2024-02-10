// const textEl = document.querySelector("[data-time]");
// // let time = 300;
// let mins = 4;
// let seconds = 60;
// // setTimeout(() => {}, time);
// const timerFn = () => {
//   seconds--;
//   //   textEl.textContent = time;

//   if (seconds === 0) {
//     // clearInterval(id);
//     seconds = 59;
//     mins--;
//   }
//   if (mins === 0 && seconds === 0) {
//     clearInterval(id);
//     alert("Your time is over!");
//   }
//   textEl.textContent = `${mins}:${seconds < 10 ? "0" + seconds : seconds}`;
// };
// let id = setInterval(timerFn, 1000);

// let clickedStop = 0;
// document.querySelector("[data-stop]").addEventListener("click", (e) => {
//   clearInterval(id);
//   clickedStop++;
// });

// document.querySelector("[data-continue]").addEventListener("click", () => {
//   if (clickedStop > 0) {
//     id = setInterval(timerFn, 1000);
//   }
// });

//todo: 2

// const textElem = document.querySelector("[data-time2]");
// let seconds = 10;
// let miliseconds = 0;

// const id = setInterval(() => {
//   miliseconds--;
//   if (miliseconds < 0) {
//     miliseconds = 100;
//     seconds--;
//   }
//   if (miliseconds === 0 && seconds === 0) {
//     clearInterval(id);
//   }
//   if (seconds === 5) {
//     document.body.style.backgroundColor = "red";
//   }
//   textElem.textContent = `${seconds}:${miliseconds}`;
// }, 1);

//todo: #3

// const blockEl = document.querySelector(".block");
//
// setInterval(() => {
//   if (blockEl.classList.contains("zoomed")) {
//     blockEl.classList.remove("zoomed");
//   } else {
//     blockEl.classList.add("zoomed");
//   }
// }, 1500);

//todo: #4
const textElem = document.querySelector("[data-form-time]");
const formEl = document.querySelector("form");
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  let seconds = Number(formEl.seconds.value);
  let minutes = 0;

  function updateMinutes() {
    minutes = Math.floor(seconds / 60);
  }

  function renderTime() {
    textElem.textContent = `${minutes}:${seconds % 60}`;
  }
  formEl.lastElementChild.setAttribute("disabled", "");
  const intevalId = setInterval(() => {
    seconds--;
    updateMinutes();

    renderTime();
  }, 1000);
});
