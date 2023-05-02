const inputElem = document.querySelector("input[data-input]");
console.log(inputElem);
const btnElem = document.querySelector("button[data-btn]");
console.dir(btnElem);
const totalSumElem = document.querySelector("[data-sum");

let totalSum = 0;

btnElem.addEventListener("click", function (e) {
  e.preventDefault();
  const inputValue = Number(inputElem.value);
  totalSum += inputValue;
  // console.log(totalSum);
  totalSumElem.textContent = totalSum;
    console.log(totalSum);
    inputElem.value = "";
  // console.log(inputValue.currentTarget);
});
