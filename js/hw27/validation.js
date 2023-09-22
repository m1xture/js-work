document
  .getElementById("validation-input")
  .addEventListener("blur", function () {
    const symbolsLength = Number(this.dataset.length);
    // console.log(this.value.length);
    if (this.value.length === symbolsLength) {
      //   console.log(true);
      if (this.classList.contains("invalid")) {
        this.classList.remove("invalid");
      }
      return this.classList.add("valid");
    } else {
      //   console.log(false);
      if (this.classList.contains("valid")) {
        this.classList.remove("valid");
      }
      return this.classList.add("invalid");
    }
  });
