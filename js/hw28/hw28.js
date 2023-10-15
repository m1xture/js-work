const galleryRefs = {
  galleryList: document.querySelector(".gallery"),
  galleryItems: Array.from(document.querySelector(".gallery").children),
};

console.log(galleryRefs.galleryItems);

const { galleryList, galleryItems } = galleryRefs;

const hiddenItems = galleryItems.slice(0, galleryItems.length - 1);
console.log(hiddenItems);

let i = 1;
document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowRight") {
    if (i >= galleryItems.length) {
      galleryItems[i - 1].classList.remove("visible");
      i = 1;
    }

    galleryItems[i - 1].classList.remove("visible");
    galleryItems[i].classList.add("visible");
    i++;
  }
  // console.log(e.code);
  if (e.code === "ArrowLeft") {
    if (i - 1 < 0) {
      galleryItems[i].classList.remove("visible");

      i = galleryItems.length - 1;
    }
    // i = 1;
    galleryItems[i].classList.remove("visible");
    galleryItems[i - 1].classList.add("visible");
    i--;
  }
});

//todo: #2

let redFilter = 0;
let greenFilter = 0;
let blueFilter = 0;
let bgColor = "";

function createRandomBg() {
  redFilter = Math.round(Math.random() * 255 - 0);
  greenFilter = Math.round(Math.random() * 255 - 0);
  blueFilter = Math.round(Math.random() * 255 - 0);
  bgColor = `rgb(${redFilter}, ${greenFilter}, ${blueFilter})`;
  return bgColor;
}

let elemWidth = 30;
let elemHeight = 30;

const refs = {
  inputAmountEl: document.querySelector("[data-amount]"),
  btnCreateEl: document.querySelector("[data-action=render]"),
  btnClearEl: document.querySelector("[data-action=destroy]"),
  itemsBlockEl: document.querySelector(".boxes"),
};

const { inputAmountEl, btnClearEl, btnCreateEl, itemsBlockEl } = refs;
btnCreateEl.addEventListener("click", (e) => {
  for (let i = 0; i < inputAmountEl.value; i++) {
    console.log(inputAmountEl.value);
    itemsBlockEl.insertAdjacentHTML("beforeend", "<li class=box></li>");
  }
  console.log(document.querySelectorAll(".box"));
  document.querySelector("[data-error]").textContent = "";
  console.log(refs.itemsBlockEl.innerHTML);
  if (!refs.itemsBlockEl.innerHTML) {
    elemHeight = 30;
    elemWidth = 30;
  }

  document.querySelectorAll(".box").forEach((item) => {
    item.style.backgroundColor = createRandomBg();
    item.style.width = `${elemWidth}px`;
    item.style.height = `${elemHeight}px`;
    elemWidth += 10;
    elemHeight += 10;
    if (elemHeight > 300) {
      elemHeight = 30;
      elemWidth = 30;
    }
  });
  // document.querySelector('.boxes').style.display = "flex";
});

function clearItems() {
  // console.log(refs.itemsBlockEl.innerHTML);
  if (refs.itemsBlockEl.innerHTML) {
    refs.itemsBlockEl.innerHTML = "";
  } else {
    document.querySelector("[data-error]").textContent =
      "There are not any items";
  }
  if (refs.itemsBlockEl.innerHTML === "") {
    elemHeight = 30;
    elemWidth = 30;
  }
}
refs.btnClearEl.addEventListener("click", clearItems);

// console.log(refs.btnCreateEl);
