// const listRef = document.querySelector(".site-nav");

// listRef.style.backgroundColor = "orange";
// listRef.children[0].children[0].classList.add("site-nav__link");

//todo: #2

const linkRef = document.querySelector("[name=list]");

linkRef.style.color = 'orange';

//? #2

const listRef = document.querySelectorAll("li");
console.log(listRef);

listRef[0].firstElementChild.classList.add("req9");
listRef[listRef.length -1].classList.add("req9");

//todo: #3

const titleEl = document.querySelector("h1");

titleEl.classList.add("req9");
titleEl.textContent = "Titiitle";

titleEl.classList.replace("req9", "titile");

console.log(titleEl.classList.contains("list"));

//todo: #3 true

const tableRef = document.getElementById("age-table");

// console.log(tableRef);

const labelsRefs = tableRef.querySelectorAll("label");
console.log(labelsRefs);
const firstTdRef = tableRef.querySelector("td");
console.log(firstTdRef);

const formEl = document.querySelector("form[name=search-person]");
console.log(formEl);

const firstInputEl = formEl.querySelector("input");
console.log(firstInputEl);

const inputsEls = formEl.querySelectorAll("input");
const lastInp = inputsEls[inputsEls.length - 1];
console.log(lastInp);
