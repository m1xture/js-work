// todo: Оператор розгалуження if, else

// let age = 13;
// if (age >= 18) {
//     console.log("You can smoke");
// } else {
//     console.log("You cannot smoke");
// }


// if (5 > 30) {
//     console.log("Five is more than thirty");
// } else {
//     console.log("Five is less than thirty");
// }
// // todo: Else if

// let salary = 50000;
// if (salary > 14987) {
//     console.log("Your salary is more than minimum");
// } else if (salary === 14987) {
//     console.log("Your salary is minimum");
// } else if (salary < 40000) {
//     console.log("Your salary is 3lvl");
// } else {
//     console.log("Without salary");
// }


// if (salary > 9500) {
//     console.log("salary = 1lvl");
// };
// if (salary > 15000) {
//     console.log("salary = 2lvl");
// };
// if (salary > 20000) {
//     console.log("salary = 3lvl");
// };

/*
 * Напиши скрипт обробки покупки в магазині.
 *
 * - Баланс користувача зберігається в змінній balance
 * - Сума покупки зберігається в змінній payment
 *
 * - Перед перевіркою вивести повідомлення:
 * «Загальная вартість замовлення [число] кредитів. Перевіряємо кіл-ть доступних грошей на рахунку
 *
 * - Якщо сума покупки не перевищує баланс:
 *    - Вирахувати з балансу суму покупки
 *    - Вивести повідомлення «На рвхунку залишилось [число] кредитів»
 * - Якщо сума покупки перевищує баланс:
*    - Вивести повідомлення «На рахунку недостатньо грошей для проведення операції!»
 * - В кінці вивести повідомлення «Операція завершена»
 */

let balance = 10000;
const payment = 2000;
const message = `Загальная вартість замовлення ${payment} кредитів. Перевіряємо кіл-ть доступних грошей на рахунку`;
if (payment >= balance) {
    balance = balance - payment;
    console.log(`На рaхунку залишилось ${balance} кредитів`);
} else if (payment > balance) {
    console.log("На рахунку недостатньо грошей для проведення операції!");
};
const secondMessage = "Операція завершена, ";
// 'Все добре, знімаємо гроші... Дякую за покупку!'