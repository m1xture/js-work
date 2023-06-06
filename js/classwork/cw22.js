//todo: Замыкание это когда функция возвращает функцию.
//todo: функція яка повертається під час виклику буде мати доступ  до всіх локальних змінних батьківської функції

// const a = function (param) {
//     const b = 3;

//     const c = function () {

//         console.log(b);

//         const d = param + b;

//         console.log(d);

//         console.log(param);
//         return d;
//     };
//     return c;
// };

// const res = a(2);
// console.log(res());

//todo: #2

// const callWaiter = function (waiterName) {
//     const message = 'Hello welcome in our restaurant';
//     const cookDish = function (dish) {
//         console.log(`Your ${dish} is ready`);
//     }
//     return cookDish;
// };

// const callRoman = callWaiter('Roman');
// console.log(callRoman("Borsh"), callRoman("PElmeni"), callRoman("Ice"));

// const callAnya = callWaiter("Anya");
// console.log(callAnya("Ice cream"), callAnya("Cola"), callAnya(Water));

//? 2 variation

const cookDish = function (nameWaiter, myDish) {
    console.log(`${nameWaiter} bring me ${myDish}`);
    return myDish;
};

const cookBorshByRoman = cookDish("Roman", "Borsh");
const cookIceByRoman = cookDish("Roman", "Ice");
const cookWaterByAnya = cookDish("Anya", "Water");

console.log(cookBorshByRoman);
console.log(cookIceByRoman);
console.log(cookWaterByAnya);


//todo: #2

// const roundNumber = function (number, points) {
//     return number.toFixed(points);
// };

// console.log(roundNumber(45.232123949865, 2));

//? 2 variation

const roundNumber = function (number, points) {
    return function (number, points) {
        return number.toFixed(points);
    };
};

//!roundNumber(12.384723708215);
//!roundNumber(12.384723708215);

const r2 = roundNumber(3);
r2(676.9246);