//todo: Напиши скрипт пошуку найменшого числа в масиві,
//todo: при умові що числа є унікальними(не повторяються).

// const arr = [];
// for (let i = 0; i < 10; i++) {
//     let arrNum = Number(Math.round(Math.random() * (10000 - 1) + 1));
//     arr.push(arrNum);
//     console.log(arrNum);
// };

// let min = arr[0];

// for (let elem of arr) {
//     if (elem < min) {
//         min = elem;
//     }
// };

// console.log("Minimum -" + " " + min);


//todo: Напиши скрипт, який обʼєднує всі елементи масиву в одне рядкове значення.
//todo: Елементів може бути довільна кіл-ть.
//todo: Нехай елементи масиву  в рядку будуть розділені комою.

// const fruits = ["apple", "grapefruit", "orange", "strawberry", "plum"];
// let fruitsStr = "";

// for (let i = 0; i < fruits.length; i++) {
//   fruitsStr += fruits[i];
// }
// // console.log(fruitsStr);

// // for (let fruit of fruits) {
// //     fruitsStr += fruit + ", ";
// //     console.log(fruitsStr);
// // }


// // fruitsStr = fruits.join(" 🎵 ");
// // console.log(fruitsStr);

// fruitsStr = fruitsStr.slice(0, fruitsStr.length - 2);
// console.log(fruitsStr);

//todo: Напиши скрипт який замінить регістр кожного символу в рядку на протилежний.
//todo: Наприклад, якщо рядок «JavaScript», то в підсумку рядок має бути «jAVAsCRIPT».

const word = "JavaScript";
let normalWord = "";
const lettersArray = word.split("");
console.log(lettersArray);

// for (let i = 0; i < lettersArray.length; i++) {
//     if (lettersArray[i] === lettersArray[i].toLowerCase()) {
//         normalWord += lettersArray[i].toUpperCase();
//     } else {
//         normalWord += lettersArray[i].toLowerCase();
//     }
// }

for (const elem of lettersArray) {
    normalWord += elem === elem.toLowerCase() ?
        elem.toUpperCase() :
        elem.toLowerCase()
}

console.log(normalWord);
