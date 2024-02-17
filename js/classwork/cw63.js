// const date = new Date();
// const mins = date.getMinutes();
// const seconds = date.getSeconds();
// const hours = date.getHours();
// const day = date.getDay();
// console.log(
//   `Day - ${
//     ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][day]
//   }, hours - ${hours}, minutes - ${mins}, seconds - ${seconds}`
// );

// const date2 = Date.now();

// console.log(date2);

// setInterval(() => {
//   console.log(Date.now() - date2);
// }, 1000);

//todo: #1
// const textEl = document.querySelector("[data-date]");
// function timer() {
//   const date = new Date();
//   const hours = date.getHours();
//   const minutes = date.getMinutes();
//   const seconds = date.getSeconds();
//   textEl.textContent = `${hours < 10 ? "0" + hours : hours}:${
//     minutes < 10 ? "0" + minutes : minutes
//   }:${seconds < 10 ? "0" + seconds : seconds}`;
// }
// setInterval(timer, 1000);
// const refs = {
//   yearElem: document.querySelector("[data-year]"),
//   monthElem: document.querySelector("[data-month]"),
//   weekdayElem: document.querySelector("[data-weekday]"),
//   dayElem: document.querySelector("[data-day]"),
// };

// const date = new Date();
// const year = date.toLocaleDateString("Ug-UA", { year: "numeric" });
// const month = date.toLocaleDateString("Ug-UA", { month: "long" });
// const weekday = date.toLocaleDateString("Ug-UA", { weekday: "long" });
// const day = date.toLocaleDateString("Ug-UA", { date: "numeric" });

// refs.yearElem.textContent = year;
// refs.monthElem.textContent = month;
// refs.weekdayElem.textContent = weekday;
// refs.dayElem.textContent = day;

//todo: #2
// Створіть функцію getSecondsToTomorrow(), що повертає кількість секунд до завтра.
// Наприклад, якщо зараз є 23:00, то: getSecondsToTomorrow() === 3600
// P.S. Функція повинна працювати в будь-який день, “сьогодні” не є жорстко закодованим.

// function getSecondsToTomorrow() {
//   const date = new Date();
//     const milisecodns = new Date(`${} December 2019 14:48`);
// }
// getSecondsToTomorrow();

//todo: #3
// Напишіть функцію getLastDayOfMonth(year, month), що повертає останній день місяця. Іноді це 30-е, 31-ше або навіть 28/29-е для лютого.
// Параметри:
// year – чотиризначний рік, наприклад 2012.
// month – місяць, від 0 to 11.
// Наприклад, getLastDayOfMonth(2012, 1) = 29 (високосний рік, лютий).

function getLastDayOfMonth(year, month) {
  const date = new Date();
  // if (month % 2 && month !== 1 && )
  if (month === 1 && year % 4 === 0) {
    //   console.log("High year, feb, 29");
    return 29;
  } else if (month === 1) {
    return 28;
  }
  if (month % 2 !== 0) {
    return 30;
  } else {
    return 31;
  }
}

console.log(getLastDayOfMonth(2025, 3));

//todo: #3

const getAge = (year) => new Date().getFullYear() - year;
console.log(getAge(1783));

//todo: #4

function isIntercalaryYear(year) {
  return (year % 400 === 0 && year % 100 === 0) ||
    (year % 4 === 0 && year % 100 !== 0)
    ? "yes"
    : "no";
}
console.log(isIntercalaryYear(2024));

//todo: #6
// Напишіть функцію, яка обчислює кількість
// робочих днів між двома заданими датами(не включаючи вихідні та святкові дні).
const d1 = new Date("2030/03/16");
const d2 = new Date("2030/04/20");
function getDays(day1, day2) {
  const date = new Date();
  console.log(day2);
  console.log(day2.getDay());
  if (day1 === 7 || day1 === 0 || day2 === 0 || day2 === 7) return "lalala";
  return Math.floor((Date.parse(day2) - Date.parse(day1)) / 86400000);
}
console.log(getDays(d1, d2));
