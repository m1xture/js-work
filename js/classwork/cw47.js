// const boxEl = document.querySelector("[data-box-elem]");
// console.log(boxEl.innerHTML);

// // boxEl.innerHTML = boxEl.innerHTML + `<article>Lalala</article>`;

// boxEl.insertAdjacentHTML("beforeend", `<span>gdfgfgdfd</span>`);


const inputsEl = document.querySelectorAll('[data-focus]');

function focusChange () {
    if (inputsEl[0].dataset.focus === "save") {
        console.log("dlf");
        return;
    } else {
        console.log("me");
    }
}

focusChange();
console.log(inputsEl[0].dataset);

