const friends = ["boom", "boom", "bakudan"];
console.log(friends);
console.table(friends);
friends[5] = "fish";
console.table(friends);
const friendsLenght = friends.length; 
console.log(friendsLenght);
const lastIndex = friends.length - 1;
console.log(lastIndex);

//todo

const a = 5;
const b = a;
console.log(a, b);

//? in a hard data types the value are connecting as a link

const c = [1, 2, 3];
const d = c;
console.log("it is C ", c);
console.log("it is D ", d);

c[1] = " 388";

console.log("it is C ", c);
console.log("it is D ", d);
console.log(c === d);

//? примітивні типи даних порівнюються по значенню, а складні - по лінку