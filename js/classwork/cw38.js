// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];
// const allTags = tweets.reduce((acc, { tags }) => {
//     // console.log(acc);
//     acc.push(tags);
//     return acc;
// }, []);
// console.log(allTags);

//? spread и снова он тут...

// const allTags = tweets.reduce((acc, { tags }) => {
//   acc.push(...tags);
//   return acc;
// }, []);
// console.log(allTags);

//? flatMap

// const flat = tweets.flatMap((tweet) => tweet.tags);
// console.log(flat);

//todo: Нужно с массива тегов создать статистику в виде обьекта
// {
//     js: 2,
//     html: 2,
//     css: 5,
// }
// console.log(allTags);
// const sortedTags = allTags.reduce((tagsStats, tag) => {
//     if (tagsStats[tag]) {
//         tagsStats[tag] += 1;
//         return tagsStats;
//     } else {
//         tagsStats[tag] = 1;
//         return tagsStats;
//         // tag = 'js';
//         // tagsStats[tag] = 1;
//         // {
//         //     js: 1,
//         // }
//     }
// }, {});
// console.log(sortedTags);

// const user = { name: "Matviy", }
// const key = "name";
// console.log(user[key]);
// console.log(user[key] === user.name);

// const sortedTags = allTags.reduce(
//   (tagsStats, tag) =>
//     tagsStats[tag]
//       ? { ...tagsStats, [tag]: tagsStats[tag] + 1 }
//       : { ...tagsStats, [tag]: 1 },
//   {}
// );
// console.log(sortedTags);

// const sortedTags = allTags.reduce(
//     (tagsStats, tag) => ({
//         ...tagsStats, [tag]: tagsStats[tag] ? tagsStats[tag] + 1 : 1
//     })
//         // tagsStats[tag]
//         //     ? { ...tagsStats, [tag]: tagsStats[tag] + 1 }
//         //     : { ...tagsStats, [tag]: 1 }
//     ,
//   {}
// );
// console.log(sortedTags);

//todo:

// const stats = tweets.reduce((acc, { tags }) => { acc.push(...tags); return acc; }, []).reduce(
//     (tagsStats, tag) => ({
//       ...tagsStats,
//       [tag]: tagsStats[tag] ? tagsStats[tag] + 1 : 1,
//     }),
//     {}
// );
// console.log(stats);

//todo: Array.prototype.sort(callback(currentEl, nextEl){})
//? Сортує та змінює ориг. масив. По дефолту сортує по зростанню
//? Приводить елем. до рядка і сортує по unicode
// console.log('1'.charCodeAt());
// const numbers = [356, 3, 7, 90, 73];
// console.log(numbers.sort());

//? Нужна функция CompareFunction
//? Елементы масиву сортуються у відповідності за значенням що повторюються
//? Якщо CompareFunc(a, b) менше 0, то сортування поставить знач а перед b
//?  3. Якщо compareFunction(a, b) поверне 0,
//? то сортування залишить а та b незмінними по відгошенню одне до одного
//?але відсортує це значення по відношенню до всіх елементів

// console.log(numbers.sort((CurrentNumber, NextNum) => {
//     return nextNumber - CurrentNumber;
// }));

// const copyNums = [...numbers];
// console.log(copyNums);

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
const sortPlayersByName = [...players];
console.log(sortPlayersByName);
const sortedPlayersByName = sortPlayersByName.sort((CurrPlayer, NextPlayer) => NextPlayer.points === CurrPlayer.points)