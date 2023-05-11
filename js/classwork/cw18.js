// //todo: Працюємо з колекцією карточок в trello
// //todo: Метод splice() - міняє масив
// //- Видалити
// //- Додати
// //- Оновити

// const trelloCards = ["card1", "card2", "card3", "card4", "card5"];
// console.table(trelloCards);

// //? Deleting cards

// const cardToDelete = "card3";
// const indexDeleteCard = trelloCards.indexOf(cardToDelete);
// // const trelloCardDelete = trelloCards.indexOf();
// console.table(indexDeleteCard);

// //? Результат методу splice повертає видаленний елемент

// const deletedCard = trelloCards.splice(indexDeleteCard, 1);
// console.table(deletedCard);
// console.table(trelloCards);

// //? Add

// const cardToAdd = "card7";
// const trelloCardsLastIndex = trelloCards.length - 1;
// const cardToSplice = trelloCards.splice(
//   trelloCardsLastIndex,
//   0,
//   cardToAdd
// );
// console.table(trelloCards);

// //! масив.splice(індекс з якого видаляємо/додаємо,
// //! кількість елементів до видалення, що додати)

// //? Updating

// const cardToUpdate = "card2";
// const cardUpdating = trelloCards.splice(4, 1, cardToUpdate);
// console.table(trelloCards);

//todo: javascript methods types

// const sentence = "JS methods types";
// const slug = sentence.toLowerCase().split(" ").join("-");
// console.log(slug);
// // const smallSentence = sentence.toLowerCase();
// console.log(smallSentence);
// const arraySentence = smallSentence.split(" ");
// const slug = arraySentence.join("-");
// console.log(slug);

// const array1 = ["32", "dsf", "sdf", "fdsarf", "sdfsd0f", "ewrtw3"];
// array1.push("we look for something");
// console.log(array1);
// array1.pop();
// console.log(array1);
// array1.shift("we look for");
// console.log(array1);
// array1.unshift("we look");
// console.log(array1);

// const friends = ["Ruslan", "Semen", "Michael"];
// const friends2 = ["Illya", "Yakov", "Vitaliy"];
// // let group = [];
// // for (let i = 0; i < friends.length; i++) {
// //     group.push(friends[i]);
// // }
// // console.log(group);

// // for (let i = 0; i < friends2.length; i++) {
// //     group.push(friends2[i]);
// // }
// const friendsGroup = friends.concat(friends2);

const a = [1, 2, 54, 3243, 9439];
const b = [2, 2345, 345, 435, 4354];
const c = a.concat(b);
let sum = 0;
for (let i = 0; i < c.length; i++) {
    sum += c[i];
}