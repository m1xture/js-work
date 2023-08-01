const nums12 = [23456, 43, 12, 9];
// const totalSum = nums.reduce((acc, num) => acc += num, 0);
// console.log(totalSum);

// let acc = 0;
// function reduce(acc, nums) {
//     for (const num of nums) {
//         acc += num;
//     }
//     console.log(acc);
//     return acc;
// }
// reduce(acc, nums);

// const allHomeworks = {
//   homework1: 8,
//   homework2: 3,
//   homework3: 9,
//   homework4: 7,
// };

// const marks = Object.values(allHomeworks);
// const totalMark = marks.reduce((acc, mark) => acc += mark, 0);
// console.log(totalMark);


// const players = [
//   {
//     id: "player-1",
//     name: "Mango",
//     timePlayed: 310,
//     points: 54,
//     online: false,
//   },
//   {
//     id: "player-2",
//     name: "Poly",
//     timePlayed: 470,
//     points: 92,
//     online: true,
//   },
//   {
//     id: "player-3",
//     name: "Kiwi",
//     timePlayed: 230,
//     points: 48,
//     online: true,
//   },
//   {
//     id: "player-4",
//     name: "Ajax",
//     timePlayed: 150,
//     points: 71,
//     online: false,
//   },
//   {
//     id: "player-5",
//     name: "Chelsy",
//     timePlayed: 80,
//     points: 48,
//     online: true,
//   },
// ];

// const totalPoints = players.reduce((acc, player) => acc += player.points, 0);
// console.log(totalPoints);

// const timePlaying = players.reduce((acc, {timePlayed, points}) => acc + timePlayed + points, 0);


const cart = [{ label: 'Apples', price: 100, quantity: 2 },
  { label: 'Bananas', price: 120, quantity: 3 },
  { label: 'Lemons', price: 70, quantity: 4 },
];
const cartPrice = cart.reduce((acc, { label, price, quantity }) => acc + (price * quantity), 0);
console.log(cartPrice);