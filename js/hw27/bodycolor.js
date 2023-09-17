

document.body.style.backgroundColor = document.querySelector(
  "input[data-radio-inputcolor][checked]"
).value;

//? #1 вариант

// const allInputs = document.querySelectorAll("[data-radio-inputcolor]");
// allInputs.forEach((input) => {
//   input.addEventListener("click", function () {
//       document.body.style.backgroundColor = this.value;
//   });
// });

//? #2 вариант

const form = document.querySelector(".hw27-form");
form.addEventListener("click", function (e) {
    if (e.target.hasAttribute("data-radio-inputcolor")) {
        document.body.style.backgroundColor = e.target.value;
    }
})