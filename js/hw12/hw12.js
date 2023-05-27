//todo: #1

function makePizza () {
    return "Your pizza is being prepared, please wait.";
  };  
const result = makePizza();
const pointer = makePizza;

//todo: #2

function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
};

function madePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
};

function makeMessage(pizzaName, callback) {
  return `Pizza ${pizzaName} is prepared`;
};

const res = makeMessage("Royal Grand", madePizza);
console.log(res);




//todo: #3

const res1 = madePizza("Ultracheese", function eatPizza (pizzaName) {
  return `Eating pizza ${pizzaName}`;
});

console.log(res1);

//todo: #4

const btnRef = document.querySelector("[data-hero-btn]");
const resultRef = document.querySelector("[data-result]");
let result1 = "Hello world!";

function writeAnswer () {
  // const resultValue = result1.value;
  resultRef.textContent = result1;
};

btnRef.addEventListener("click", writeAnswer);

//Todo #5

const clickedBtn = document.querySelector("button");
const strNums = document.querySelector("[data-nums");
let clicks = 0;

function writeNums () {
  clicks += 1;
  strNums.textContent = clicks;
}

clickedBtn.addEventListener("click", writeNums);