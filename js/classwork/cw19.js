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


function sumEvenNums(numbersArr) {
    let totalSum = 0;
    for (let i = 0; i < numbersArr.length; i++) {
        if (numbersArr[i] % 2 === 0) {
            console.log(`Парне число = ${numbersArr[i]}`);
            totalSum += numbersArr[i];
        };
    };
    return totalSum;
}

console.log(sumEvenNums([6, 8, 88743, 786767, 78790, 3435]));