function testKey(e) {
  console.log(e);
  console.log(`Code - ${e.code}`);
  console.log(`Key method - ${e.key}`);
}

document.addEventListener("keydown", testKey);

//todo: yakov29

// const textEl = document.querySelector('[data-text]');
// const btnEl = document.querySelector('[data-btn]');
// document.addEventListener("keypress", (e) => {
//     textEl.textContent = textEl.textContent + e.key;
// })

// btnEl.addEventListener('click', (e) => {
//     textEl.textContent = "";
// });

//todo: ib13

const refs = {
  parentEl: document.querySelector(".box"),
  childEl: document.querySelector(".inner-box"),
};

const { parentEl, childEl } = refs;

parentEl.addEventListener("mouseover", (evt) => {
  evt.currentTarget.classList.add("box--active");
});
parentEl.addEventListener("mouseout", (evt) => {
  evt.currentTarget.classList.remove("box--active");
});

parentEl.addEventListener('mousemove', e => {
    console.log(e);
});