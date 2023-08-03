const users = [
  {
    balance: 1000,
    friend: ["lalala", "hahaha", "qwerty42"],
    name: "Jason",
    skills: ["writing"],
  },
  {
    balance: 10,
    friend: ["Kolya", "Mark"],
    name: "Jack",
    skills: ["soft skills"],
  },
  {
    balance: 1429,
    friend: ["Tolya", "Dog"],
    name: "John",
    skills: ["Python language"],
  },
  { balance: 500, friend: ["Dog"], name: "Json", skills: ["json files"] },
];

//todo: Отримати загальну суму балансу (поле balance) всіх користувачів.

const totalBalance = users.reduce((acc, user) => acc + user.balance, 0);
console.log(totalBalance);

//todo: Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.

let arrOfNames = [];
const findUsersWithDog = users.reduce((acc, user) => {
  if (user.friend.find(friend => friend === "Dog")) {
    acc += 1;
    arrOfNames.push(user.name);
    return user.name;
  }
  return acc;
}, 0);
console.log(arrOfNames);
// console.log(findUsersWithDog);

//todo: Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends).

const copyOfusers = [...users];

const sortedUsers = users.sort((u1, u2) => u1.friend.length - u2.friend.length);
console.log(sortedUsers);
// console.log(users);

//todo: Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.

const usersSkills = [];

const skillsArr = copyOfusers.reduce((acc, { skills }) => {
  acc++;
  if (usersSkills.find(skill => skills[acc] === skill)) {
    return acc;
  } else {
    usersSkills.push(...skills);
    return skills;
  }
}, 0);
const sortedSkills = usersSkills.sort();
console.log(usersSkills);