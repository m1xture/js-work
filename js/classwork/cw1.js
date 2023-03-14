// console.log(Math);
// const num = 17834;
// const powerd = 3;
// const result = num ** powerd;
// // console.log(result);
// const res = Math.pow(num, powerd);
// console.log(res);


// todo: 1) Ask user to enter the number in input


let number = prompt("Enter the number");
console.log(number);
const newNumber = Number(number);
// number = Number(number);
console.log(newNumber);


// todo: 2) Ask user to enter the power in input


let power = prompt("Enter the power");
power = Number(power);


// todo: 3) We need to show the number in console


const result = Math.pow(newNumber, power);
console.log(result);