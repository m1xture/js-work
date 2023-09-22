const refs = {
  inputEl: document.querySelector("[data-hw27-inputtext]"),
  textEl: document.querySelector("[data-textshow]"),
};

const { inputEl, textEl } = refs;

if (inputEl.value === "") {
  textEl.textContent = "незнайомець";
}

inputEl.addEventListener("input", function () {
  if (this.value === "") {
    return (textEl.textContent = "незнайомець");
  }
  return (textEl.textContent = this.value);
});
