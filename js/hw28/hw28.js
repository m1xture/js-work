const galleryElems = {
  previewEl: document.querySelector("[data-preview]"),
  galleryListEl: document.querySelector(".gallery"),
  galleryImgs: document.querySelectorAll(".image"),
  backdropEl: document.querySelector(".backdrop"),
};

const { previewEl, galleryListEl, galleryImgs, backdropEl } = galleryElems;
// console.log(galleryImgs);
previewEl.addEventListener("click", (e) => {
  backdropEl.classList.toggle("is-hidden");
  let i = 0;
  // let currentImg = galleryElems[i];
  document.addEventListener(
    "keydown",
    _.throttle((evt) => {
      // console.log(evt.code);
      if (evt.code === "Escape") {
        backdropEl.classList.toggle("is-hidden");
      }
      if (evt.code === "ArrowRight") {
        if (i === galleryImgs.length - 1) {
          galleryImgs[i].classList.remove("full-image");
          galleryImgs[i].parentNode.classList.remove("full-image-container");
          galleryImgs[i].parentNode.classList.add("gallery__item");
          i = 0;
          galleryImgs[i].classList.add("full-image");
          galleryImgs[i].parentNode.classList.add("full-image-container");
          galleryImgs[i].parentNode.classList.remove("gallery__item");

          return;
        }
        galleryImgs[i].classList.remove("full-image");
        galleryImgs[i].parentNode.classList.remove("full-image-container");
        galleryImgs[i].parentNode.classList.add("gallery__item");
        galleryImgs[i + 1].classList.add("full-image");
        galleryImgs[i + 1].parentNode.classList.add("full-image-container");
        galleryImgs[i + 1].parentNode.classList.remove("gallery__item");
        i++;
      }
      if (evt.code === "ArrowLeft") {
        if (i === 0) {
          galleryImgs[i].classList.remove("full-image");
          // galleryImgs[i].classList.remove("full-image-animation");

          galleryImgs[i].parentNode.classList.remove("full-image-container");
          galleryImgs[i].parentNode.classList.add("gallery__item");
          i = galleryImgs.length - 1;
          galleryImgs[i].classList.add("full-image");
          // galleryImgs[i].classList.add("full-image-animation");

          galleryImgs[i].parentNode.classList.add("full-image-container");
          galleryImgs[i].parentNode.classList.remove("gallery__item");

          return;
        }
        galleryImgs[i].classList.remove("full-image");
        galleryImgs[i].parentNode.classList.remove("full-image-container");
        galleryImgs[i].parentNode.classList.add("gallery__item");
        // galleryImgs[i].classList.remove("full-image-animation");
        galleryImgs[i - 1].classList.add("full-image");
        // galleryImgs[i - 1].classList.add("full-image-animation");
        // galleryImgs[i - 1].style.animationName = apperPhotoLeft;
        galleryImgs[i - 1].parentNode.classList.add("full-image-container");
        galleryImgs[i - 1].parentNode.classList.remove("gallery__item");
        i--;
      }
    }, 180)
  ); //? ael document
}); //? global

backdropEl.addEventListener("click", (e) => {
  if (e.target.classList.contains("full-image-container")) {
    backdropEl.classList.toggle("is-hidden");
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
