const users = [
  { balance: 1000, friend: "Dog", name: "Jason" },
  { balance: 10, friend: "Vova", name: "Jack" },
  { balance: 1429, friend: "", name: "John" },
  { balance: 500, friend: "Anya", name: "Json" },
];

//todo: Отримати загальну суму балансу (поле balance) всіх користувачів.

const totalBalance = users.reduce((acc, user) => acc + user.balance, 0);
console.log(totalBalance);

//todo: Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.

const findUsersWithFriend = (array, friend) => {
  const usersWithThatFriend = array.reduce((acc, user) => {
    if (user.friend === friend) {
      console.log(acc);
      return acc.push(user.name);
    } else {
      return acc;
    }
  }, []);
};

console.log(findUsersWithFriend(users, "Dog"));

//todo: Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends).

//todo: Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.
