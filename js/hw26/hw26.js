//todo: #1 я его не особо понял

const categories = document.querySelector("#categories");
console.log(`У списку ${categories.children.length} категорій`);
console.log(`Category: ${ document.querySelector("[data-hw25-title]").textContent }`);


//todo: #2

const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const ingredientsRefs = document.querySelector("#ingredients");

console.log(ingredientsRefs);

// for (const str of ingredients) {
//     let newEl = document.createElement("li");
//     newEl.textContent = str;
//     ingredientsRefs.append(newEl);
// };

const newLi = ingredients.map(str => {
    let newEl = document.createElement("li");
    newEl.textContent = str;
    ingredientsRefs.append(newEl);
});


//todo: #3

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallryRefs = document.querySelector("#gallery");

//? В процессе разработки...

//todo: #4


const refsCount = {
    decrementBtn: document.querySelector("[data-action=decrement]"),
    incrementBtn: document.querySelector("[data-action=increment]"),
    counterEl: document.querySelector("#value"),
};
const { decrementBtn, incrementBtn, counterEl } = refsCount;

let numValue = 0;

decrementBtn.addEventListener("click", () => {
    numValue -= 1;
    counterEl.textContent = numValue;
});

incrementBtn.addEventListener("click", () => {
  numValue += 1;
  counterEl.textContent = numValue;
});
