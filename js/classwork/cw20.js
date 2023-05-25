// const showNumber = function () {
//    console.log(arguments);
//    const args = Array.from(arguments);
// //    console.log(args);
// // }

// //todo: #2


// const showArgs = function (num1, num2, ...nums) {
//     console.log(num1, num2);
//     console.log(nums);
//     return
// }

// showArgs(445, 29);
// showArgs(23, 2424, 82);
// showArgs(768, 298, 612, 192837465, 0, 0, 7);


//?write a func with sum of args

// let sum = 0;
// function findSum () {
//     for (let arg of arguments) {
//         sum += arg;
//     }
//     console.log(sum);
//     return sum;
// }
// findSum(123, 123)


function filterAlikeNums (nums, ...args) {
    console.log(nums);
    const newArr = [];
    for (let number of nums) {
        if (args.includes(number)) {
            newArr.push(number);
        }
    }
    console.log(newArr);
    return newArr;
};


filterAlikeNums([23, 233, 1]);
filterAlikeNums(['dsa', 233, 1]);
filterAlikeNums([23, 2]);
