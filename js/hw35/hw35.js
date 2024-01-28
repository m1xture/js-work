const refs = {
  formElem: document.querySelector("[data-login-form]"),
  addCardFormElem: document.querySelector("[data-add-form]"),
  todoListEl: document.querySelector("[data-todo]"),
  completedListEl: document.querySelector("[data-completed]"),
};

const { formElem, addCardFormElem, todoListEl, completedListEl } = refs;

function register() {
  if (formElem.login.value.length > 3 && formElem.password.value.length >= 5) {
    localStorage.setItem("login", JSON.stringify(formElem.login.value));
    localStorage.setItem("password", JSON.stringify(formElem.password.value));
    console.log("You registered a new account successfully!🎊");
    formElem.parentElement.classList.add("is-hidden");
    sessionStorage.setItem("logged", JSON.stringify(true));
  } else {
    console.log("Too small login or password❌");
  }
}

function enter() {
  if (
    JSON.parse(localStorage.getItem("login")) === formElem.login.value &&
    JSON.parse(localStorage.getItem("password")) === formElem.password.value
  ) {
    console.log("You have logged into your account!");
    formElem.parentElement.classList.add("is-hidden");
    sessionStorage.setItem("logged", JSON.stringify(true));
  } else {
    console.log("Uncorrect login or password!");
  }
}

function renderAllCards() {
  if (localStorage.getItem("todo")) {
    todoListEl.textContent = "";
    JSON.parse(localStorage.getItem("todo")).forEach((cardObj) => {
      const markup = `<li class="todo__item"><div class="todo-color" style="background-color: ${cardObj.cardBorderColor}"></div><h3>${cardObj.cardTitle}</h3><p>${cardObj.cardDescription}</p></li>`;
      todoListEl.insertAdjacentHTML("afterbegin", markup);
    });
  }
  if (localStorage.getItem("completed")) {
    completedListEl.textContent = "";
    JSON.parse(localStorage.getItem("completed")).forEach((cardObj) => {
      const markup = `<li class="completed__item"><div class="todo-color" style="background-color: ${cardObj.borderColor}"></div><h3>${cardObj.cardTitle}</h3><p>${cardObj.cardDescription}</p></li>`;
      todoListEl.insertAdjacentHTML("afterbegin", markup);
    });
  }
}

class Card {
  constructor(title, description, color) {
    this.cardTitle = title;
    this.cardDescription = description;
    this.cardBorderColor = color;
  }
}
function addCard(title, description, borderColor) {
  if (JSON.parse(localStorage.getItem("todo"))) {
    const card = new Card(title, description, borderColor);
    const currLocalStrg = JSON.parse(localStorage.getItem("todo"));
    currLocalStrg.push(card);
    localStorage.setItem("todo", JSON.stringify(currLocalStrg));
  } else {
    const collection = [new Card(title, description, borderColor)];
    console.log(collection);
    localStorage.setItem("todo", JSON.stringify(collection));
  }
}

formElem.addEventListener("submit", (e) => {
  e.preventDefault();
  if (localStorage.getItem("login") && localStorage.getItem("password")) {
    enter();
  } else {
    register();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  if (JSON.parse(sessionStorage.getItem("logged"))) {
    formElem.parentElement.classList.add("is-hidden");
    if (localStorage.getItem("todo") || localStorage.getItem("completed")) {
      renderAllCards();
    }
  }
  document.querySelector("[data-add]").addEventListener("click", (evt) => {
    addCardFormElem.parentElement.classList.remove("is-hidden");
  });
});

addCardFormElem.addEventListener("submit", (e) => {
  console.log(addCardFormElem);
  e.preventDefault();
  if (
    addCardFormElem.title.value.length > 3 &&
    addCardFormElem.description.value.length > 3 &&
    addCardFormElem.color.value
  ) {
    addCard(
      addCardFormElem.title.value,
      addCardFormElem.description.value,
      addCardFormElem.color.value
    );
    renderAllCards();
    addCardFormElem.parentElement.classList.add("is-hidden");
  }
});
