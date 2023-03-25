// todo: №1

const myName = "Michael";
console.log(myName.replace("M", "@"));

// todo: №2

const fullName = "Ivanov Michael";
const indexResult = fullName.indexOf(" ");
console.log(indexResult);


// todo: №3

const text = "Ваш баланс поповнено на 1";
console.log(text.padEnd(40, "0"));
console.log(text.padEnd(40, "0").length);

// todo: №4

const result = 5 + 5 + "5";
console.log(result);
console.log(typeof (result));

// todo: №5

const pricePerItem = 3500;
const orderedQuantity = 4;
const totalPrice = pricePerItem * orderedQuantity;
console.log(totalPrice);

// todo: №6

const productName = "Droid";
const pricePerItem1 = 3500;
const message = `You picked ${productName}, price per item is ${pricePerItem1} credicts`;
console.log(message);

// todo: №7

const pricePerDroid = 800;
const orderedQuantity1 = 6;
const deliveryFee = 50; 
const totalPrice2 = pricePerDroid * orderedQuantity1 + deliveryFee;
const message2 = `You ordered droids worth ${totalPrice2} credits. Delivery ${deliveryFee} credits is included in total price`;

// todo: №8

const age = 13;
const adulthood = age > 18;
console.log("is user more than 17 y.o.?", adulthood);

// todo: №9

const SAVED_PASSWORD = "FGHJKHKD9875"
let password = prompt("Type ur password");
const isMatch = SAVED_PASSWORD === password;
console.log(isMatch);

// todo: №10

let a = 5;
let b = 10;
let c = 15;
let d = 20;
// a = a + 2;
a += 2;
// b = b - 4;
b -= 4
// c = c * 3;
c *= 3
// d = d / 10;
d /= 10
console.log(a, b, c, d);

// todo: №11

const courseTopic = "JavaScript essentials";
const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];
const course = courseTopicLength + " " + firstElement + " " + lastElement;
console.log(course);

// todo: №12

let strData;
let subStrLength;
strData = "Never gonna give you up!";
subStrLength = 20;
const subString = strData.slice(0, subStrLength);
console.log(subString);

// todo: №13

const number = 78;
const start = 112;
const end = 221;
const isInRange = number > start && number < end;
const isNotInRange = !isInRange;
console.log(isInRange, isNotInRange);