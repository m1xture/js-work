//todo: #1

function makePizza () {
    return "Your pizza is being prepared, please wait.";
  };  
const result = makePizza();
const pointer = makePizza;

//todo: #2

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// };

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// };

// function makeMessage(pizzaName, callback) {
//   return;
// };

// makeMessage("Royal Grand", makePizza);

//todo: #4

const btnRef = document.querySelector("[data-hero-btn]");
const resultRef = document.querySelector("[data-result]");
let result1 = "Hello world!";

function writeAnswer () {
  // const resultValue = result1.value;
  resultRef.textContent = result1;
};

btnRef.addEventListener("click", writeAnswer);