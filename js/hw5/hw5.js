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