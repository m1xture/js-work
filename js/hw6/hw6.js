//todo: #1

if ("0") {
  console.log("Привіт");
}
//todo #2

const question = prompt("Яка “офіційна” назва JavaScript?");
if (question === "ECMAScript") {
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

//todo: #7

const maximAge = 55;
if (0 <= maximAge && maximAge <= 16) {
  console.log("Макс еще ребенок");
} else if (17 <= maximAge && maximAge <= 60) {
  console.log("Макс уже взролый");
} else if (61 <= maximAge && maximAge <= 100) {
  console.log("Максу пора на пенсию");
} else {
  console.log("Макс уже не с нами...");
}
// const children = 0 <= maximAge <= 16;
// const adult = 17 <= maximAge <= 60;
// const pension = 61 <= maximAge <= 100;
// if (children == true) {
//   console.log("Макс еще ребенок");
// } else if (adult == true) {
//   console.log("Макс уже взрослый, но всё еще не умеет оплачивать коммуналку");
// } else if (pension == true) {
//   console.log("Максу пора на пенсию");
// } else {
//   console.log("Скорее всего, Макс не человек, а его возраст измеряется не в годах");
// }

//todo: #8

const nameLenght = "Михайло".length;
const lastnameLenght = "Іванов".length;
if (nameLenght >= 4 && lastnameLenght >= 5) {
  const summaryQuantity = nameLenght + lastnameLenght;
  console.log(summaryQuantity);
} else {
  console.log("ОЙ, неможливо виконати умову");
}

//todo: #9

//? Змінна = умова ? Правда (true) : Неправда, хибне значення

// let result;

// if (a + b < 4) {
//   result = "Нижче";
// } else {
//   result = "Вище";
// }

let result;
const a = 19;
const b = 5;
result = a + b < 4 ? (result = "Нижче") : (result = "Вище");

//todo: #10

const mathRandomNumber = Math.round(Math.random() * (5 - 1) + 1);
if (mathRandomNumber === 5) {
  console.log("it is five");
} else if (mathRandomNumber === 4) {
  console.log("It is four");
} else if (mathRandomNumber === 3) {
  console.log("it is three");
} else if (mathRandomNumber === 2) {
  console.log("it is two");
} else if (mathRandomNumber === 1) {
  console.log("it is one");
} else if (mathRandomNumber === 0) {
  console.log("it is zero");
} else {
  console.log("Це не число");
}

//! 1. У Завданні 3 - це одна перевірка числа на входження у відрізок, а не чотири окремі перевірки.
