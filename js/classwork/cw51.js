// document.querySelector("input").addEventListener("focus", (e) => {
//   e.currentTarget.style.border = "1px solid red";
// });
// document.querySelector("input").addEventListener("blur", (e) => {
//   e.currentTarget.style.border = "1px solid green";
// });
// document.querySelector("input").style.border = "1px solid yellow";

// const inputEl = document.querySelector("input");
// const textEl = document.querySelector("[data-text]");
// inputEl.addEventListener("input", (e) => {
//   textEl.textContent = e.currentTarget.value;
// });
// inputEl.addEventListener("change", (e) => {
//   textEl.textContent = e.currentTarget.value + "change";
// });

// document.querySelector("#checkbox").addEventListener("change", (e) => {
//   console.log("checkbox change");
//   console.log(e.currentTarget.checked);
//   if (e.currentTarget.checked) {
//     e.currentTarget.style.boxShadow = "1px 2px 1px 2px red";
//   } else {
//     e.currentTarget.style.boxShadow = "none";
//   }
// });

// //#

// document.addEventListener("submit", (e) => {
//   e.preventDefault();
// });

const refs = {
  openBtnEl: document.querySelector("[data-open-btn]"),
  closeBtnEl: document.querySelector("[data-close-btn]"),
  backdropEl: document.querySelector(".backdrop"),
  formEl: document.querySelector("[data-form]"),
};

function toggleModal(e) {
  refs.backdropEl.classList.toggle("is-hidden");
}

refs.openBtnEl.addEventListener("click", toggleModal);

refs.closeBtnEl.addEventListener("click", toggleModal);
