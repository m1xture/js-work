// // function showInfo (x, y) {
// //     console.log(x);
// //     console.log(y);
// // };
// // showInfo(2, 10);
// // const showInfo1 = function (x, y) {
// //     console.log(x);
// //     console.log(y);
// // };
// // showInfo1(2, 10);
// // const result = showInfo1(2, 10);
// // console.log(result);
// function showInfo1(x, y) {
//     console.log(`${x}`);
//     console.log(`${y}`);
// };

// showInfo1(2, 10);

// const sumNumbers = function (x, y) {
// const sum = x + y;
// if (x === 2) {
// console.log(x);    
// }
//     return sum;

// };

// sumNumbers(2, 10);

// const result = sumNumbers(2, 10);
// console.log(result);


// const result2 = sumNumbers(7, 3);
// console.log(result2);


// const a = function (num1, num2) {
//     console.log(num1, num2);
//     b(num2);
// };

// function b (num3) {
//     console.log(num3);
// };

// a(4, 40);

// function test(num) {
// console.log(num);
// if (num < 58) {
//     console.log("less than 58");
//     return 'less than 58';
// } else {
//     console.log("more than 58");
//     console.log("more 58");
//     return 'more than 58';
// };
// };

// test(49);

// const word = "JavaScript";
// // function changeRegister(string) {
// //     for (const letter of lettersArray) {
// //         drow += letter === letter.toLowerCase() ?
// //             letter.toUpperCase() :
// //             letter.toLowerCase()
// //     };
// //     return drow;
// // };

// const changeRegister = function (string) {
//     let drow = "";
//     let letters = string.split('');
//     for (const letter of lettersArray) {
//         drow += letter === letter.toLowerCase() ?
//             letter.toUpperCase() :
//             letter.toLowerCase()
//     };
//     return drow;
// };

// console.log(changeRegister("GoIT"));
// console.log(changeRegister(word));
// const newStr = changeRegister(word);
// console.log(newStr);



//?

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let totalSum = 0;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         console.log(`Парне число = ${numbers[i]}`);
//         totalSum += numbers[i];
//     };
// };


// function sumEvenNums(numbersArr) {
//     let totalSum = 0;
//     for (let i = 0; i < numbersArr.length; i++) {
//         if (numbersArr[i] % 2 === 0) {
//             console.log(`Парне число = ${numbersArr[i]}`);
//             totalSum += numbersArr[i];
//         };
//     };
//     return totalSum;
// }

// console.log(sumEvenNums([6, 8, 88743, 786767, 78790, 3435]));


// const sumEvenNums = function (numbersArr) {
//     let totalSum = 0;
//     for (let i = 0; i < numbersArr.length; i++) {
//         if (numbersArr[i] % 2 === 0) {
//             console.log(`Парне число = ${numbersArr[i]}`);
//             totalSum += numbersArr[i];
//         };
//     };
//     return totalSum;
// }

// console.log(sumEvenNums([6, 8, 88743, 786767, 78790, 3435]));
// console.log(sumEvenNums([354, 122568, -97, -9, 7657]));


// const showInfo = function (fruitsArray) {
//     for (let fruit of fruits) {
//         console.log(fruit);
//     }
//     return fruit;
// }
// showInfo(["sadfs", "asfsdsdfdsfsdtrer"]);
// showInfo([8, 0, -246, -998798776, 101111110]);

//? 18.05

//todo:
//todo:
//todo:


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


// //? Updating

// const cardToUpdate = "card2";
// const cardUpdating = trelloCards.splice(4, 1, cardToUpdate);
// console.table(trelloCards);

// const cardsArray = ["card2", "card5", "card9", "card12", "card13"];
// deleteCard(cardsArray, cardsArray[1]);


// function deleteCard (cardsArray, cardToDelete) {
//     const indexDeleteCard = cardsArray.indexOf(cardToDelete);
//     // console.table(indexDeleteCard);
//     const deletedCard = cardsArray.splice(indexDeleteCard, 1);
//     // console.table(cardsArray);
//     return cardsArray;
// };

// // cardToDelete(cardsArray[1]);
// console.log(cardsArray);


// appendCard(cardsArray, "sdfsdf");

// function appendCard (cardsArray, cardToAppend) {
//     const cardsArrayLastIndex = cardsArray.length;
//     const cardToSplice = cardsArray.splice(
//           cardsArrayLastIndex,
//           0,
//           cardToAppend
//         );
//         return cardsArray;
// };

// console.log(cardsArray);

// updateCard(cardsArray, "kokokok");

// function updateCard (cardsArray, cardToUpdate) {
//     const cardUpdating = cardsArray.splice(4, 1, cardToUpdate);
//     return cardsArray; 
// };

// console.log(cardsArray);


// appendCard(cardsArray, "dsfdsfdsfsd");
// console.log(cardsArray);

//??????????????????????????????

// const numbers = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 ,9 , 10];
// let maxNumber = numbers[0]
// for (const number of numbers ) {
//     if (number > maxNumber) {
//         maxNumber = number
//     }
// }
// console.log(maxNumber);


// const ArrayOfNumbers = [132, -132, 0, 1324565476, 10101010];

// const FindMaxNumber = function (ArrayOfNumbers) {
//     let maxNumber = ArrayOfNumbers[0];
//     for (const number of ArrayOfNumbers) {
//         if (number > maxNumber) {
//             maxNumber = number;
//         }
//     }
//     console.log(maxNumber);
//     return maxNumber;
// }
// console.log(maxNumber);


//todo: psevdoArray


// const numbers = [1, 2, 3, 4, 5];
// let minNumber = numbers[0];
// for(let i = 0; i < numbers.length; i++); {
//    if (minNumber > numbers[i]); {
//        minNumber = numbers[i]
// };
// };
// console.log(minNumber);

// const numbers = [1, 1, 2, 565, 0];
const findNum = function(a, b, ...numArr) {
    // const numArr = Array.from(arguments);
    let minNumber = numArr[0];
    for (let i = 0; i < numArr.length; i++) {
        if (minNumber > numArr[i]) {
            minNumber = numArr[i];
        };
    };
    // console.log(minNumber);
    return minNumber;
};
findNum(2,2,2,2,2,2,2,22,2);
console.log(findNum);