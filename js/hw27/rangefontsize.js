const refs = {
    rangeInputEl: document.getElementById("font-size-control"),
    textToChangeFontSize: document.getElementById("text-fsz"),
};

const { rangeInputEl, textToChangeFontSize } = refs;

// rangeInputEl.addEventListener("input", function () {
//     console.log(this.value);
//     textToChangeFontSize.style.fontSize = `${Number(this.value)}px`;
// })

// rangeInputEl.addEventListener("input", _.debounce(function () {
//     console.log(this.value);
//     textToChangeFontSize.style.fontSize = `${Number(this.value)}px`;
// }, 150))

rangeInputEl.addEventListener(
  "input",
  _.throttle(function () {
    // console.log(this.value);
    textToChangeFontSize.style.fontSize = `${Number(this.value)}px`;
  }, 150)
);