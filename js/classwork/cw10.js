//todo: Цикл For

// for (let i = 1; i <= 10; i += 1) {
// console.log(i);
// }
// console.log("dfkdjfgjrfioj");

//? Напиши скрипт який підрахує загальну суму зарплат працівників.
// ?  Кіл-ть працівників зберігається в змінній employees.
//  ? Зарплата кожного працівника це випадкове число овід 500 до 5000
// ?  Записати суму в змінну totalSalary та вивести в консоль
let totalSalary = 0;
let minSalary = 5000;
let maxSalary = 15000;
let employees = 50;
// const salary = Math.round(Math.random() + maxSalary - minSalary + minSalary);
// console.log(salary);
for (let i = 1; i <= employees; i += 1) {
  const salary = Math.round(
    Math.random() * (maxSalary - minSalary) + minSalary
    );
    console.log(`Salary of worker # ${i} is ${salary}`);
    // totalSalary = totalSalary + salary;
    totalSalary += salary;
    console.log(totalSalary);
};
