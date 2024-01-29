const refs = {
  formElem: document.querySelector("[data-login-form]"),
  addCardFormElem: document.querySelector("[data-add-form]"),
  todoListEl: document.querySelector("[data-todo]"),
  completedListEl: document.querySelector("[data-completed]"),
  savedListEl: document.querySelector("[data-saved-list]"),
  savedFormEl: document.querySelector("[data-saved-form]"),
};

const {
  formElem,
  addCardFormElem,
  todoListEl,
  completedListEl,
  savedListEl,
  savedFormEl,
} = refs;

function register() {
  if (formElem.login.value.length > 3 && formElem.password.value.length >= 5) {
    localStorage.setItem("login", JSON.stringify(formElem.login.value));
    localStorage.setItem("password", JSON.stringify(formElem.password.value));
    console.log("You registered a new account successfully!🎊");
    formElem.parentElement.classList.add("is-hidden");
    sessionStorage.setItem("logged", JSON.stringify(true));
    renderAllCards();
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
    renderAllCards();
  } else {
    console.log("Uncorrect login or password!");
  }
}

function renderAllCards() {
  if (localStorage.getItem("todo")) {
    if (localStorage.getItem("todo").length >= 1) {
      todoListEl.textContent = "";
      JSON.parse(localStorage.getItem("todo")).forEach((cardObj) => {
        const markup = `<li class="todo__item"><div class="todo-color" style="background-color: ${cardObj.cardBorderColor}"></div><h3>${cardObj.cardTitle}</h3><p>${cardObj.cardDescription}</p><input type=checkbox data-completed-switch /></li>`;
        todoListEl.insertAdjacentHTML("afterbegin", markup);
      });
    }
  }
  if (localStorage.getItem("completed")) {
    if (localStorage.getItem("completed").length >= 1) {
      completedListEl.textContent = "";
      JSON.parse(localStorage.getItem("completed")).forEach((cardObj) => {
        console.log(cardObj);
        const markup = `<li class="completed__item"><div class="todo-color" style="background-color: ${cardObj.cardBorderColor}"></div><h3>${cardObj.cardTitle}</h3><p>${cardObj.cardDescription}</p></li>`;
        completedListEl.insertAdjacentHTML("afterbegin", markup);
      });
    }
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
    if (localStorage.getItem("links")) {
      renderAllLinks();
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

document.querySelector(".todo__list").addEventListener("change", (e) => {
  if (e.target.nodeName === "INPUT") {
    const checkbox = e.target;
    const clickedCardIndex = JSON.parse(localStorage.getItem("todo")).findIndex(
      ({ cardTitle, cardDescription, cardBorderColor }) => {
        return (
          checkbox.parentElement.innerHTML ===
          `<div class="todo-color" style="background-color: ${cardBorderColor}"></div><h3>${cardTitle}</h3><p>${cardDescription}</p><input type="checkbox" data-completed-switch="">`
        );
      }
    );
    const currArr = JSON.parse(localStorage.getItem("todo"));
    const deletedCard = currArr.splice(clickedCardIndex, 1)[0];
    console.log(deletedCard);
    localStorage.setItem("todo", JSON.stringify(currArr));
    let newCompletedArr = [];
    if (localStorage.getItem("completed")) {
      newCompletedArr = JSON.parse(localStorage.getItem("completed"));
      console.log(newCompletedArr);
      newCompletedArr.push(deletedCard);
    } else {
      newCompletedArr.push(deletedCard);
    }
    console.log(newCompletedArr);
    localStorage.setItem("completed", JSON.stringify(newCompletedArr));
    renderAllCards();
  }
});

function renderAllLinks() {
  if (localStorage.getItem("links").length > 0) {
    try {
      savedListEl.textContent = "";
      const localStorageData = JSON.parse(localStorage.getItem("links"));
      localStorageData.forEach((link) => {
        savedListEl.insertAdjacentHTML(
          "afterbegin",
          `<li><a href=${link.linkPath}>${link.linkTitle}</a></li>`
        );
      });
    } catch (err) {
      console.log(`Parsing error: ${err}`);
    }
  }
  return;
}

document.querySelector("[data-add-link]").addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    e.currentTarget.title.value.length > 2 &&
    e.currentTarget.path.value.length > 4
  ) {
    const linkObj = {
      linkTitle: e.currentTarget.title.value,
      linkPath: e.currentTarget.path.value,
    };

    if (localStorage.getItem("links")) {
      const currArr = JSON.parse(localStorage.getItem("links"));
      currArr.push(linkObj);
      localStorage.setItem("links", JSON.stringify(currArr));
    } else {
      localStorage.setItem("links", JSON.stringify([linkObj]));
    }
    renderAllLinks();
  }
});

savedListEl.addEventListener("click", (e) => {
  // e.preventDefault();
  // console.log(e);
  if (e.target.nodeName === "LI") {
    try {
      const currLocalStrg = JSON.parse(localStorage.getItem("links"));
      const index = currLocalStrg.findIndex((link) => {
        const clickedElem = {
          linkTitle: e.target.firstElementChild.textContent,
          linkPath: e.target.firstElementChild.href,
        };
        console.log(clickedElem);
        console.log(link);
        return (
          clickedElem.linkTitle === link.linkTitle &&
          clickedElem.linkPath === link.linkPath
        );
      });
      console.log(index);
      const askToDo = confirm("Are you sure want to  delete this card?");
      if (askToDo) {
        currLocalStrg.splice(index, 1);
      } else {
        if (confirm("Do you want to change this card?")) {
          savedFormEl.parentElement.classList.remove("is-hidden");
          currLocalStrg[index];
          savedFormEl.newTitle.value = currLocalStrg[index].linkTitle;
          savedFormEl.newPath.value = currLocalStrg[index].linkPath;

          savedFormEl.addEventListener("submit", (e) => {
            e.preventDefault();
            if (
              e.currentTarget.newTitle.value !== "" &&
              e.currentTarget.newPath.value !== ""
            ) {
              currLocalStrg.splice(index, 1, {
                linkTitle: e.currentTarget.newTitle.value.trim(),
                linkPath: e.currentTarget.newPath.value.trim(),
              });
            }
          });
        } else {
          return;
        }
      }
      localStorage.setItem("links", JSON.stringify(currLocalStrg));
      renderAllLinks();
    } catch (err) {
      console.log(`Parsing error: ${err}`);
    }
  }
});
