//todo: Напиши скрипт, який змінює регістр
//todo: кожного символу в рядкуна протилежний.
//todo: Наприклад, якщо рядок «JavaScript»,
//todo: то в результаті буде рядок «jAVAsCRIPT»

// const word = "JavaScript";
// const letters = word.split();
// for (let i = 0; i < letters.length; i += 1) {
//     // console.log(letters[i]);
// }

//todo: Напиши скрипт пошуку логіну
//  - Якщо логика ні, вивести повідомлення 'Користува [логін] не знайдений.'
//  - Якщо знайшли логін, вивести повідомлення 'Користува [логін] знайдений.'
//  - Спочатку через for
//  - Потім через for...of
//  - Логіка break
//  - Метод includes() з тернарним оператором

let friends = [
  "Semen",
  "Illya",
  "met25",
  "Matthew",
  "Misha",
  "Yakov",
  "Vitaly",
  "Ruslan",
];
let findFriend = "vasya";
const isinclude = friends.includes(findFriend);
const res = isinclude ? findFriend : friends.push(findFriend);
console.table(res);
console.log(friends[friends.length -1]);

// for (let i = 0; i < friends.length; i++) {
//     let friend = friends[i];
//     console.log(friends[i]);
//   if (friend === findFriend) {
//     console.log("We found him!");
//     console.log(friends);
//   }
//   else if (findFriend === "Тетяна") {
//       continue;
// }  else {
//       friends.push(findFriend);
//       console.log(friends);
//     break;
//   }
// }

// for (let i = 0; i < friends.length; i++) {
//   let friend = friends[i];
//     console.log(friends[i]);
    
    
//   //   if (friend === findFriend) {
//   //     console.log("We found him!");
//   //     console.log(friends);
//   //   } else {
//   //     friends.push(findFriend);
//   //     console.log(friends);
//   //     break;
//   //   }
//     // friend === findFriend
//     //     ? console.log("we found it")
//     // break;
//     //     : friends.push(findFriend);
//     // console.log(friends); break;
// }
