const users = [
  { balance: 1000, friend: ["lalala", "hahaha", "qwerty42"], name: "Jason", skills: ["writing"]},
  { balance: 10, friend: ["Kolya", "Mark"], name: "Jack", skills: ["soft skills"] },
  { balance: 1429, friend: ["Tolya"], name: "John", skills: ["Python language"] },
  { balance: 500, friend: ["Dog"], name: "Json", skills: ["json files"] },
];

//todo: Отримати загальну суму балансу (поле balance) всіх користувачів.

const totalBalance = users.reduce((acc, user) => acc + user.balance, 0);
console.log(totalBalance);

//todo: Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.

let namesOfFriends = [];
const arrOfNames = users.reduce((acc, user) => {
  if (user.friend.find((friend) => friend === "Dog")) {
    return acc.push(user.name);
  };
  return acc;
}, []);
console.log(arrOfNames);

//todo: Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends).

const sortedUsers = users.sort((u1, u2) => u1.friend.length - u2.friend.length);
console.log(sortedUsers);
console.log(users);
//todo: Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.

// const skillsUsers = users.sort((u1, u2) => );