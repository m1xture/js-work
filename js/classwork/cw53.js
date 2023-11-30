// const userList = document.querySelector("#userlist");

// function deleteCard(e) {
//   if (e.target.nodeName !== "BUTTON") {
//     return;
//   }
//   e.target.parentNode.remove();
// }

// userList.addEventListener("click", deleteCard);

//?

const tasksListEl = document.querySelector("#taskList");

const formEl = document.querySelector("#form");
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  if (formEl.task.value !== "") {
    tasksListEl.insertAdjacentHTML(
      "afterbegin",
      `<li><p>${formEl.task.value}</p>
        <input type=checkbox>
        <button type=button data-delete>delete</button>
      </li>`
    );
  }
});
tasksListEl.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    e.target.parentNode.remove();
  }
  if (e.target.nodeName === "INPUT") {
    e.target.parentNode.style.backgroundColor = "checked";
  }
});
