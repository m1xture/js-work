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

// const sortedArr = [...players].sort((currPlayer, nextPlayer) => currPlayer.timePlayed - nextPlayer.timePlayed);

// const sortedPlayerByName = [...players].sort((currPlayer, nextPlayer) => {
//     return currPlayer.name[0].localeCompare(nextPlayer.anme[0]);
// });

//? Array.prototype.flat(depth)
//? Разглаживает массив до опр. глубины

const entries = [ 27,[
    412,
    0,
    [-19, 44, 789, [62, [1428, "lalala",[[{ nanana: "cola" }, 89]]]], -1],
  ], 996,
];
// const flatArray = entries.flat(7); //? default: 1
// console.log(flatArray);

// const flatMapArray = entries.map(elem => elem).flat(1);
// const flatMapMethod = entries.flatMap(elem => elem);
// console.log(flatMapMethod);

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const flatTweets = tweets.flatMap(tweet => tweet.tags);
console.log(flatTweets);

//? Library lodash

console.log(_.last(['lalala', 5]));
console.log(_.isEmpty(entries));
console.log(_.isEqual(entries));
// console.log(_.now());

//? sortBy

console.log(_.sortBy(players, (player) => player.name));
console.log(_);     