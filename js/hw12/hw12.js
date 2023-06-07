//todo: #1

const makePizza = () =>  "Your pizza is being prepared, please wait.";
const result = makePizza();
const pointer = makePizza;

//todo: #2

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// };

const deliverPizza = (pizzaName) => `Delivering ${pizzaName} pizza.`;

// function madePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// };

const madePizza = (pizzaName) => `Pizza ${pizzaName} is being prepared, please wait...`;

// function makeMessage(pizzaName, callback) {
//   return `Pizza ${pizzaName} is prepared`;
// };

const makeMessage = (pizzaName, callback) => `Pizza ${pizzaName} is prepared`;

const res = makeMessage("Royal Grand", madePizza);
console.log(res);




//todo: #3

const res1 = madePizza("Ultracheese", function eatPizza(pizzaName) {
  return `Eating pizza ${pizzaName}`;
});

console.log(res1);

//todo: #4

const btnRef = document.querySelector("[data-hero-btn]");
const resultRef = document.querySelector("[data-result]");
let result1 = "Hello world!";

// function writeAnswer() {
//   // const resultValue = result1.value;
//   resultRef.textContent = result1;
// };

const writeAnswer = () => {
  resultRef.textContent = result1;
};

btnRef.addEventListener("click", writeAnswer);

//Todo #5

const clickedBtn = document.querySelector("button");
const strNums = document.querySelector("[data-nums");
let clicks = 0;

// function writeNums() {
//   clicks += 1;
//   strNums.textContent = clicks;
// };

const writeNums = () => {
  clicks += 1;
  strNums.textContent = clicks;
};

clickedBtn.addEventListener("click", writeNums);

//todo: #6

const applyCallbackToEachElement = (arr, callback) => {
  return squareCallback(arr);
};
const arr = [1, 2, 3, 4, 5];
const squareCallback = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= arr[i]
  };
  return arr;
};
const result2 = applyCallbackToEachElement(arr, squareCallback);
console.log(result2); // [1, 4, 9, 16, 25]

//todo: #7

const calculateDiscountedPrice = (price, discount, callback) => {
  const discountedPrice = price - discount;
  callback(discountedPrice);
};
const showDiscountedPrice = (discountedPrice) => {
  console.log(discountedPrice);
  return discountedPrice;
};
calculateDiscountedPrice(1000, 10, showDiscountedPrice); // Discounted price: 990