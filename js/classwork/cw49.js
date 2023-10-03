const refs = {
  clickBtnEL: document.querySelector("[data-btn-click]"),
  addBtnEl: document.querySelector("[data-add-me]"),
  removeBtnEl: document.querySelector("[data-remove-btn]"),
};

const { clickBtnEL, addBtnEl, removeBtnEl } = refs;

const keysBtns = Object.keys(refs);

const click = function (event) {
  if (this.hasAttribute("data-btn-click")) {
    console.log("My name is cliick!");
  }
  if (this.hasAttribute("data-add-me")) {
    console.log("Strange things sometimes happen");
  }
  if (this.hasAttribute("data-remove-btn")) {
    this.classList.toggle("hidden");
  }
};

keysBtns.map((key) => refs[key].addEventListener("click", click));

//todo: Синтаксис інлайнового коллбека
//* () => {}
console.log(refs.clickBtnEL.dataset);