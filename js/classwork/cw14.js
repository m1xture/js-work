// Напиши скрипт який підрахує суму всіх парних чисел в масиві.

const arr = [
  4, 2, 8, 54645, 324, 8823, 235, 4324, 434, 84, 1,
];
let sum = 0;
// for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] % 2 === 0) {
//         sum += arr[i];
//         console.log(arr[i]);
//     }
// }
// console.log(sum);

// for (let evenNumber of arr) {
//     if (evenNumber % 2 === 0) {
//       sum += evenNumber;
//       console.log(evenNumber);
//     }
// }
// console.log(sum);

//todo: #1

// for (let element of arr) {
//   if (element % 2 !== 0) {
//       sum += element;
//       console.log(element);
//   }
// }
// console.log(sum);

// //todo: #2

// for (let element2 of arr) {
//     if (element2 % 2 === 0) {
//         continue;
//     }
//         sum += element2;
//         console.log(element2);
// }
// console.log(sum);

// //todo: #3

// for (let element3 of arr) {
//     if (element3 === 324) {
//         console.log("we found it!" + " " + element3);
//         break;
//     }
// }

//todo: #4

// let numb = 35;
// if (numb < 0) {
//     console.log("ok");
// } else if ( numb >= 0) {
//     numb = -numb;
//     console.log(numb);
//     const sum = numb + 1;
//     console.log(sum);
// }
