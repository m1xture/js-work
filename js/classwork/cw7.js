/*
 * Напиши скрит підрахунку вартості покупки зі знижкою в залежності від потраченої суми за весь час (партнерська програма).
 *
 * - Загальна сума випотраченого зберігається в змінній totalSpent
 * - Сума поточного платежу зберігається в змінній payment
 * - Скидка зберігається в змінній discount
 *
 * - Якщо витрачено від [100 до 1000) - бронзовий партнер, скидка 2%
 * - Якщо витрачено від [1000 до 5000) - срібний партнер, скидка 5%
 * - Якщо витрачено більше [5000 - золотий партнер, скидка 1
 * - Якщо витрачено більше [5000 - золотий партнер, скидка 10%
 * - Якщо витрачено менше 100) - не партнер, скидка 0%
 *
 * - В результаті вивести повідомлення
 * «Оформляємо замовлення на суму [сума] зі знижкою [знижка]%»
 */

const totalSpent = 50;
let payment = 500;
let discount = 0;
let message;

//todo: looking for discount

if (100 < totalSpent && totalSpent < 1000) {
  discount = 2;
  message = `My greetings, you are bronze partner. Ur discount is - ${discount}`;
} else if (1000 < totalSpent && totalSpent < 5000) {
  discount = 5;
  message = `My greetings, you are silver partner. Ur discount is - ${discount}`;
} else if (5000 <= totalSpent) {
  discount = 10;
  message = `My greetings, you are gold partner. Ur discount is - ${discount}`;
} else {
  discount = 0;
  message = `My greetings, you are not partner. Ur discount is - ${discount}`;
}
console.log(message);

//todo: Inform client about total price and discount
// discount = discount * payment;
payment = payment - (payment / 100) * discount;
const messagePayment = `Оформляємо замовлення на суму ${payment} зі знижкою ${discount}%`;
console.log(messagePayment);

//todo: 2

let balance = 10000;
const m1 = `Zagalna vartist zamovlenya ${payment} credits`;
if (payment >= balance) {
  balance = balance - payment;
  console.log(`Nf rahunky zalyshylos ${balance} credits`);
}
if (balance > 0) {
  m1 = "Pozytiv";
} else {
  m1 = "Negativ";
}

//todo: Ternarnuy operator

message = balance > 0 ? "Pozitiv bal" : "Negativ bal";
console.log(message);

//? Змінна = умова ? Правда (true) : Неправда, хибне значення