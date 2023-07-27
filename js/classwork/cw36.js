//todo: Array.prototype.reduce()
//? Поелементно перебирає масив
//? Слишком непредсказуемый. Возвращает что захочет. То сам массив, то его елемент

const defaultArray = [213, 8, 12, 1429];

// let totalSum = 0;

// for (const num of defaultArray) {
//     totalSum += num;
//     console.log(totalSum);
// }

const sum = defaultArray.reduce((accum, value) => accum += value, 0);

console.log(sum);