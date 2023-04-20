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

for (let i = 1; i <= 5; i += 1) {
  console.log(i);
}

// let num = 0;
// while (num <= 5) {
//   num += 1;
//   console.log(num);
// }
