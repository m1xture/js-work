// // const showNumber = function () {
// //    console.log(arguments);
// //    const args = Array.from(arguments);
// // //    console.log(args);
// // // }

// // //todo: #2


// // const showArgs = function (num1, num2, ...nums) {
// //     console.log(num1, num2);
// //     console.log(nums);
// //     return
// // }

// // showArgs(445, 29);
// // showArgs(23, 2424, 82);
// // showArgs(768, 298, 612, 192837465, 0, 0, 7);


// //?write a func with sum of args

// // let sum = 0;
// // function findSum () {
// //     for (let arg of arguments) {
// //         sum += arg;
// //     }
// //     console.log(sum);
// //     return sum;
// // }
// // findSum(123, 123)


// // function filterAlikeNums (nums, ...args) {
// //     console.log(nums);
// //     const newArr = [];
// //     for (let number of nums) {
// //         if (args.includes(number)) {
// //             newArr.push(number);
// //         }
// //     }
// //     console.log(newArr);
// //     return newArr;
// // };


// // filterAlikeNums([23, 233, 1]);
// // filterAlikeNums(['dsa', 233, 1]);
// // filterAlikeNums([23, 2]);


// const a = function () {
//     console.log('Work fnA');
//     c();
// }

// const b = function () {
//     console.log('work fnB');
//     c();
//     console.log(d);
// }

// const c = function () {
//     console.log('work fnC');
// }

// a();
// console.log('vvvgfgdrdd');
// console.log('2');

// b();

// console.log('after b');
// console.log('before c');

// c();

//? stack

//todo: callback

// function showMessage(message, info) {
//     console.log(message);
//     info("lalala");
// };

// function showInfo (info) {
//     console.log(info);
//     // return info;
// }

// showMessage("lala", showInfo);


//? #2

// const showSum = function (num1, num2, sumNums) {
//     const sum = sumNums(num1, num2);
//     console.log(sum);
//     return sum;
// };

// function findSum(num1, num2) {
//     const sum = num1 + num2;
//     return sum;
// }


// showSum(12, 13, findSum);
// showSum(75, 250, findSum);
// showSum(1, 1, findSum);

//? #3 ВІдкладений вклик, реєстрація подій

// const btnRef = document.querySelector("[data-send]");
// function btnClick () {
//     console.log("Lalala" + Date.now());
// };
// btnRef.addEventListener("click", btnClick);

window.navigator.geolocation.getCurrentPosition(getPositionSuccess, getPositionError);
// document.navigator.geolocation.getCurrentPosition
function getPositionSuccess (position) {
    console.log('We got ur pos');
    console.log(position);
}
function getPositionError () {
    console.log('Errorr');
}