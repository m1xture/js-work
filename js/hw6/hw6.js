//todo: #1

if ("0") {
  console.log("Привіт");
}
//todo #2

const question = prompt("Яка “офіційна” назва JavaScript?");
if ((question === "ECMAScript")) {
  console.log("Правильно!");
} else {
  console.log("Ви не знаєте? ECMAScript!");
}

//todo: #3

const x1 = 10;
const x2 = 30;
const numberd = 45;
if (numberd < x1) {
  console.log("Число входит в отрезок №1");
} else {
  console.log("Число не входит в отрезок №1");
}

if (numberd > x1) {
  console.log("Число входит в отрезок №2");
} else {
  console.log("Число не входит в отрезок №2");
}

if (numberd > x1 || numberd < x2) {
  console.log("Число входит в отрезок №3");
} else {
  console.log("Число не входит в отрезок №3");
}

if (numberd < x1 || numberd > x2) {
  console.log("Число входит в отрезок №4");
} else {
  console.log("Число не входит в отрезок №4");
}

//todo: #4

const isOnline = false;
const isFriend = true;
const isDnd = false;
if (isOnline === true && isFriend === true && isDnd === true) {
  console.log("User can open a chat");
} else {
  console.log("User cannot open a chat");
}

//todo: #5

const free = "free";
const pro = "pro";
const vip = "vip";
let statusUser = pro;
if (statusUser === pro || statusUser === vip) {
  console.log("Access to explore new content");
} else {
  console.log("Not access to explore new content");
}

//todo: #6

const userNumber = prompt("Type any number here");
if (55 < userNumber < 99) {
  console.log("Число потрапляє в діапазон");
} else {
  console.log("Число не потрапляє в діапазон");
}
