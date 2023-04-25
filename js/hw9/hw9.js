//todo: #1 right

const nums = [1, 3, 67];
nums[1] = 10;
console.log(nums);

//todo: #2 right

const strs = ["jfhdj", "dsdf", "retrhm"];
strs.push("fgdfg");
console.log(strs);

//todo: #3 error, NaN

const arrs = [];
let arrSum;
for (let i = 1; i <= 7; i += 1) {
    const arr = Number(Math.round(Math.random() * (200 - 1) + 1));
    arrs.push(arr);
    arrSum += arr;
}
console.log(arrSum);

//todo: #4 right

const array2 = [4, 5, 8, 3, 2];
for (let i = 0; i <= 4; i += 1) {
    console.log(array2[i]);
}

//todo: #5 error but right

// const arrayStr = ["df", "fdsfgdfgsdfgfgdfgf", "gvfdgdffgd", "fghdf", "qwerty"];
// let arrayStrLenght;
// for (let i = 0; i <= 5; i += 1) {
//     arrayStrLenght = arrayStr[i].length;
//     if (arrayStrLenght >= 5) {
//         console.log(arrayStr[i]);
//     }
// };

//todo: #6 right

const arrayNumber = [
  939, 3737, 13356, 432423, 0, -48, 38, 122222, 7897329385, -87912313,
];
const arrayMax = Math.max.apply(null, arrayNumber);
console.log(arrayMax);

//todo: #7 right

const arrNum = [-1, -23, -87, 88, 324839, 45534234, -32023, -1330, 45432, 777];
const arrNumLenght = arrNum.length;
for (let i = 1; i <= arrNumLenght; i += 1) {
  if (arrNum[i] % 2 === 0) {
    console.log(arrNum[i]);
  }
}
