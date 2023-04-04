const balance = 2000;
let message;
if (balance > 0) {
  message = "Balance is positive";
  console.log(message);
} else if (balance < 0) {
  message = "Not enough cash";
  console.log(message);
} else {
  console.log("Nothing...");
}
console.log(message);

//todo: variables scope

let a;
let b;
if (true) {
  a = 5;
  console.log(b);
}

//todo:#2

if (true) {
  b = 9;
  console.log(a);
}
