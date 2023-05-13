//todo: #1

//? 1

const arr01 = [1, 2, 3];
for (let i = 3; i <= 6; i++) {
    arr01.push(i);
}
console.log(arr01);

//? 2

const arr02 = [1, 2, 3];
for (let i = 4; i <= 6; i++) {
    arr02.unshift(i);
}
console.log(arr02);

//? 3

const types = ["js", "css", "jq"]
console.log(types[0]);

//? 4

console.log(types[types.length - 1]);

//? 5

const arr03 = [1, 2, 3, 4, 5];
console.log(arr03.slice(0, 3));

//? 6

console.log(arr03.slice(3, 5));

//todo: #2

const fruits = ["apple", "banana", "pear", "plum", "grape"];
const fruitsThird = fruits.splice(2, 1, "ananas", 'watermelon');

//! error ⏫

console.log(`My congratulations you bought ${fruits}`);

//todo: #3

const styles = ["jazz", "Bluzz"];
styles.push("Rock & Roll");
const stylesSecond = styles.splice(1, 1, "Classik");
const shifted = styles.shift();
console.log(shifted);
styles.unshift("Rap", "Perry");
console.log(styles);

