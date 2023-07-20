//todo: Array.prototype.forEach(callback(currentValue, index, array), thisArg)
//?  цей метод поелементно перебирає оригінальний масив і нічого не вертає. Оригінальний масив може мутувати.
//? Можна використовувати замість for крім випадків коли потрібно перервати цикл.

const nums = [4, 10, 234, 27890, 44];
// const numsForEach = nums.forEach(function (num) {
//     console.log(num + num);
// });
// console.log(numsForEach);
// console.log(nums);

//todo: Array.prototype.map()
//? Перебирає ориг. масив НЕ зміює його Ветає новий масив такої ж довжини як орігінал

// const newNums = nums.map(num => {
//     return num + num;
// });

// console.log(newNums);

//todo: Yakov29

// Отримати масив імен всіх гравців
// Збільшити кількість поінтів кожного гравця на 10% (розпорошуємо старий об'єкт)
// Збільшити кількість годин гравця по id. Переписати на тернарник
// Отримати масив всіх гравців онлайн
// Отримати масив всіх гравців офлайн
// Отримати масив всіх хардкорних гравців з часом більше 250
// Знайти гравця по id
// Знайти гравця по імені
// Перевірити чи всі гравці мають час більше 200
// Перевірити чи всі гравці онлайн

const players = [
  {
    id: "player-1",
    name: "Mango",
    timePlayed: 310,
    points: 54,
    online: false,
  },
  {
    id: "player-2",
    name: "Poly",
    timePlayed: 470,
    points: 92,
    online: true,
  },
  {
    id: "player-3",
    name: "Kiwi",
    timePlayed: 230,
    points: 48,
    online: true,
  },
  {
    id: "player-4",
    name: "Ajax",
    timePlayed: 150,
    points: 71,
    online: false,
  },
  {
    id: "player-5",
    name: "Chelsy",
    timePlayed: 80,
    points: 48,
    online: true,
  },
];

// const names = players.map(player => player.name);

const updatePoints = players.map(
  (player) => ({ ...player, points: player.points * 1.1 })
  //   ({
  //     id: "player-1",
  //     name: "Mango",
  //     timePlayed: 310,
  //     points: 54,
  //     online: false,
  //     points: player.points * 1.1,
  //   })
);

console.log(updatePoints);

// const updateHours = players.map((player) => {
//     const player4 = "player-4";
//     if (player.id === player4) {
//         return { ...player, timePlayed: player.timePlayed + 2 };
//     }
//     return player;
// });

// console.log(updateHours);

const updateHours = players.map((player) => {
  const player4 = "player-4";
  player.id === player4
    ? { ...player, timePlayed: player.timePlayed + 2 }
    : player;
});

console.log(updateHours);
