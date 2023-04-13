//todo: Цикл For

// for (let i = 1; i <= 10; i += 1) {
// console.log(i);
// }
// console.log("dfkdjfgjrfioj");

//? Напиши скрипт який підрахує загальну суму зарплат працівників.
// ?  Кіл-ть працівників зберігається в змінній employees.
//  ? Зарплата кожного працівника це випадкове число овід 500 до 5000
// ?  Записати суму в змінну totalSalary та вивести в консоль
// let totalSalary = 0;
// let minSalary = 5000;
// let maxSalary = 15000;
// let employees = 50;
// // const salary = Math.round(Math.random() + maxSalary - minSalary + minSalary);
// // console.log(salary);
// for (let i = 1; i <= employees; i += 1) {
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary
//     );
//     console.log(`Salary of worker # ${i} is ${salary}`);
//     // totalSalary = totalSalary + salary;
//     totalSalary += salary;
//     console.log(totalSalary);
// };

//todo: Напиши скрипт який підрахує суму всіх парних чисел, які входять в діапазон чисел в змінних від min до max.
//  Наприкад, якщо min=0 та max=5, то діапазон 0-5, та в ньому два парні числа - 2 та 4, їх сума 6.
// const min = 0;
// const max = 5;
// for (let i = min; i <= 5; i += 1) {
//   if (i % 2 === 0) {
//     console.log(`${i} є парним числом`);
//   } else if (i % 2 !== 0) {
//     console.log(`${i} не є парним числом`);
//   } else {
//     console.log("NaN");
//   }
// }

// const start = 1;
// const end = 10;
// let result = 0;
// for (let i = start; i <= end; i += 1) {
//   if (i % 2 !== 0) {
//     // console.log(`${i} is not`);
//     continue;
//   }
//   console.log(`${i} is`);
//   result += i;
// };
// console.log(result);

const min = 0;
for (let i = 5; i <= 30; i += 1) {
  console.log(i);
  if (i === 18) {
    continue;
  }
}