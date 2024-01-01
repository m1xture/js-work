const refs = {
  subBtnEl: document.querySelector("#btn"),
  openBtnEl: document.querySelector("[data-openBtn]"),
  closeBtnEl: document.querySelector("[data-close]"),
  overlayElem: document.querySelector(".overlay"),
  formEl: document.querySelector(".form"),
  changeSubtitle() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((resp) => resp.json())
      .then((resp) => {
        // console.log(resp);
        document.querySelector(".subtitle").textContent = resp.title;
      });
  },
  toggleModal() {
    return this.overlayElem.classList.toggle("is-hidden");
  },
  validateForm(validationEmail) {
    let errors = 0;
    switch ("") {
      case this.formEl.fname:
        errors++;
        break;
      case this.formEl.lname:
        errors++;
        break;
      case this.formEl.email:
        errors++;
        break;
      case validationEmail(this.formEl.email.value):
        errors++;
        break;
      default:
        break;
    }
    if (!this.formEl.agree.checked) {
      errors++;
    }
    if (errors === 0) {
      document.querySelector(".modal__title").textContent = "Welcome!";
      this.toggleModal();
    } else {
      document.querySelector(".modal__title").textContent = "Error!";
    }
  },
};

function validateEmail(email) {
  const regExp =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  const result = regExp.test(email);
  if (result) {
    return result;
  } else {
    return "";
  }
}

const {
  subBtnEl,
  openBtnEl,
  closeBtnEl,
  formEl,
  toggleModal,
  changeSubtitle,
  validateForm,
} = refs;

//todo

document.querySelector(".block").addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    if (e.target.dataset.openbtn === "open") {
      return toggleModal.call(refs);
    } else {
      return changeSubtitle();
    }
  } else {
    return;
  }
});

closeBtnEl.addEventListener("click", toggleModal.bind(refs));
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm.call(refs, validateEmail);
});
