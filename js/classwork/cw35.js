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

//todo: Array.prototype.filter()
//? перебирает поелементно массив
//? Проверяет лемент на условие
//? Если тру, записывает в новый массив
//? Возвращает новый массив и добавляет в него елементы
//? которые соответствуют условию каллбек функции

//todo: Array.prototype.find()
//? Перебирает поелементно оригинальный массив.
//? И возвращает первый елемент который соотвествует условию
//? Если никто не соответствует, то undefined

const find4 = nums.find((num) => num === 4);

//todo: Array.prototype.every()
//?Перебирає поелементно оригінальний  массив
//?Вертає true якщо всі елементи задовільняють умову

//todo: Array.prototype.some()
//? Поелементно перебирає массив
//? Вертає true якщо хоча б один елемент відповідає умові

//todo: Players

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

//todo:  Отримати масив імен всіх гравців

// const names = players.map(player => player.name);

//todo: Збільшити кількість поінтів кожного гравця на 10% (розпорошуємо старий об'єкт)

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

//todo: Збільшити кількість годин гравця по id. Переписати на тернарник

const updateHours = players.map((player) => {
  const player4 = "player-4";
  player.id === player4
    ? { ...player, timePlayed: player.timePlayed + 2 }
    : player;
});

// console.log(updateHours);

//todo:  Отримати масив всіх гравців онлайн

const onlinePlayers = players.filter((player) => player.online);
console.log(onlinePlayers);

//todo: Отримати масив всіх гравців офлайн

const offlinePlayers = players.filter(({ online }) => !online);
console.log(offlinePlayers);

//todo: Отримати масив всіх хардкорних гравців з часом більше 250

const hardcorePlayers = players.filter((player) => player.timePlayed >= 250);
console.log(hardcorePlayers);

//todo: Знайти гравця по id

const findPlayerById = (collection, id) => {
  const foundPlayer = collection.find((player) => player.id === id);
  console.log(foundPlayer);
  return foundPlayer;
};
findPlayerById(players, "player-3");

//todo: Знайти гравця по імені

const findPlayerByName = (collection, playerName) => {
  const foundPlayer = collection.find(({ name }) => name === playerName);
  console.log(foundPlayer);
  return foundPlayer;
};
findPlayerByName(players, "Chelsy");

//todo: Перевірити чи всі гравці мають час більше 200

const isEveryoneHardcore = players.every(({ timePlayed }) => timePlayed >= 250);
console.log(isEveryoneHardcore);

//todo: Перевірити чи всі гравці онлайн

const isEveryoneOnline = players.every((player) => player.online === true);
console.log(isEveryoneOnline);

//todo: Напишіть функцію, яка отримує масив рядків і
//todo: повертає новий масив, в якому кожен з рядків складається
//todo: з першої та останньої букви відповідної строки вхідного масиву.

const array2 = [
  "apple",
  "banana",
  "orange",
  "banana",
  "grape",
  "apple",
  "kiwi",
];

const editStr = (arrayOfStr) => {
  const mapArray = arrayOfStr.map(str => {
    const findLastIndexOfStr = str.length - 1;
    const slicedStr = str.slice(0, 1);
    const slicedStr2 = str.slice(findLastIndexOfStr, findLastIndexOfStr + 1);
    // console.log(slicedStr2);
    return slicedStr + slicedStr2;
  })
  console.log(mapArray);
  return mapArray;
};

editStr(array2);


