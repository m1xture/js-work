// const a = 5;
// console.log(a);

// function timeout() {
//   console.log("la");
// }

// function timeout2() {
//   console.log("lala");
// }
// function timeout3() {
//   console.log("lalala");
// }

// const time1 = setTimeout(timeout, 1000);
// const time2 = setTimeout(timeout2, 2000);
// const time3 = setTimeout(timeout3, 3000);

// console.log("test msg");

// function deleteTime() {
//   if (Math.random() * 1 - 0) {
//     clearTimeout(time3);
//   }
// }

// deleteTime();
// // setTimeout(() => {}, 1500);

//todo setInterval method
// const username = prompt("Enter your name");

// setInterval(sendMsg, 2000);
// function sendMsg(username) {
//   alert(username);
// }

// const timeEl = document.querySelector("[data-time]");
// let i = 0;
// setInterval(() => {
//   i++;
//   timeEl.textContent = i;
// }, 1000);

//todo: 21

// const blockEl = document.querySelector(".block");
// // console.log(blockEl);
// function getColor() {
//   const red = Math.round(Math.random() * 255 - 0);
//   const green = Math.round(Math.random() * 255 - 0);
//   const blue = Math.round(Math.random() * 255 - 0);
//   //   console.log(red, green, blue);
//   return `rgb(${red} ${green} ${blue})`;
// }

// setInterval(() => {
//   //   console.log(getColor());
//   blockEl.style.backgroundColor = getColor();
// }, 3000);

//todo: 3

// const textEl = document.querySelector("[data-greet]");

// setInterval(
//   (...args) => {
//     const text = args[Math.round(Math.random() * args.length - 0)];
//     textEl.textContent = text;
//   },
//   2000,
//   "morning!",
//   "доброго ранку",
//   "Guten Morgen"
// );

//todo: 4

// const titleEl = document.querySelector("[data-msg]");

// const message = "You successfully logged into your account!🎊";
// setTimeout(
//   (msg) => {
//     titleEl.textContent = msg;
//   },
//   3000,
//   message
// );

//todo: 5

// const messageEl = document.querySelector("[data-message]");

// const id = setTimeout(() => {
//   messageEl.classList.add("is-hidden");
// }, 3000);

// messageEl.addEventListener("click", () => {
//   messageEl.classList.add("is-hidden");
//   clearTimeout(id);
// });

//todo: 6

const items = document.querySelectorAll(".slide");
console.log(items);
// items.forEach((item) => {
//   console.log(item);
//   setTimeout(() => {
//     const indexOfCurrElem = Array.from(items).findIndex(
//       (itemI) => itemI === item
//     );
//     console.log(indexOfCurrElem);
//     if (indexOfCurrElem !== 0) {
//       items[indexOfCurrElem - 1].classList.remove("shown-slide");
//     }
//     item.classList.remove("shown-slide");
//   }, 2000);
// });
let i = 0;
setInterval(() => {
  if (i === items.length) {
    items[i - 1].classList.remove("shown-slide");
    i = 0;
  }
  items[i].classList.add("shown-slide");
  if (i !== 0) {
    items[i - 1].classList.remove("shown-slide");
  }

  i++;
}, 3000);
