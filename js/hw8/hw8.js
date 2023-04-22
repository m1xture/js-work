//! lost task
// let named = prompt("Type ur favourite hero`s name here");
// for (let namedLenght = named.length; namedLenght < 6; namedLenght += 1) {
//     console.log(named);
// }

//todo: #1

const numberd = 7;
for (let i = 1; i <= 10; i += 1) {
  const tab = numberd * i;
  console.log(`${numberd} * ${i} = ${tab}`);
}

//todo: #2

let sum = 0;
for (let i = 12; i <= 27; i += 1) {
  sum += i;
  console.log(sum);
}

//todo: #3

const min = 3;
const max = 9;
let product = 1;
for (let i = min; i <= max; i += 1) {
  if (i % 2 === 0) {
    console.log("Число парне");
  } else {
    product *= i;
    console.log(product);
  }
}

//todo: #4

for (let i = 1; i <= 100; i += 1) {
  if (i === 49) {
    console.log("49 is detected!");
    break;
  }
}

//todo: #5

for (let i = 10; i <= 30; i += 1) {
  if (i === 15) {
    continue;
  }
  console.log(i);
}

//todo: #6

// let summary;
let totalPrice = 0;
let price = 0;
const goods = 8;
for (let i = 1; i <= goods; i += 1) {
  price = Math.round(Math.random() * (5000 - 500) + 500);
  console.log(`The price for ${i} item is ${price}`);
  totalPrice += price;
}
console.log(`The total price is ${totalPrice}`);

//todo: #7

//? for

for (let i = 1; i <= 5; i += 1) {
  console.log(i);
}

//? while

let n = 0;
while (n < 5) {
  n++;
  console.log(n);
}

//? do while

let n2 = 0;
do {
  n2++;
  console.log(n2);
} while (n2 < 5);

//todo: #8

// const marks = [
//   Math.round(Math.random() * (12 - 1) + 1),
//   Math.round(Math.random() * (12 - 1) + 1),
//   Math.round(Math.random() * (12 - 1) + 1),
//   Math.round(Math.random() * (12 - 1) + 1),
//   Math.round(Math.random() * (12 - 1) + 1),
//   Math.round(Math.random() * (12 - 1) + 1),
//   Math.round(Math.random() * (12 - 1) + 1),
//   Math.round(Math.random() * (12 - 1) + 1),
//   Math.round(Math.random() * (12 - 1) + 1),
// ];
// const marksLenght = marks.length;
// let averageMark = Math.round(
//   (marks[0] +
//     marks[1] +
//     marks[2] +
//     marks[3] +
//     marks[4] +
//     marks[5] +
//     marks[6] +
//     marks[7] +
//     marks[8]) /
//     marksLenght
// );
// if (averageMark < 7) {
//   console.log("You have got quite bad mark, so it is better to not hear it");
// } else {
//   console.log("Ur parents are proud with you!");
// }
let marks = [];
let averageMark = 0;  //todo: Створили змінні
let totalSumMarks = 0;

for (let i = 1; i <= 10; i += 1) {
  const mark = Number(Math.round(Math.random() * (12 - 1) + 1));
  marks.push(mark);
  // console.log(marks);
  totalSumMarks += mark;
  // console.log(totalSumMarks);
  const marksLenght = marks.length;
  averageMark = Number(Math.round(totalSumMarks / marksLenght));
}

console.log(marks);
console.log(averageMark);

if (averageMark <= 7) {
  console.log(
    `You have got quite bad average mark - ${averageMark}, so it is better to not hear it`
  );
} else {
  console.log(`Ur parents are proud with you! ${averageMark}`);
}

//todo: #9

let  askNumber = 0;
do {
  askNumber = prompt("Type number from 100 in the bottom");
  askNumber = Number(askNumber);
} while (askNumber >= 100);

//todo: #10

let num5 = Number(prompt("Type number"));

while (num5 < 100) {
  num5 = Number(prompt("Type number "));
}
if (num5 > 100) {
  console.log("right, so right the information about ur credit card now");
}
