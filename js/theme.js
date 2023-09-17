const refs = {
  openBtn: document.querySelector("[data-modal-open]"),
  closeBtn: document.querySelector("[data-modal-close]"),
  backdropElem: document.querySelector("[data-modal-backdrop]"),
};

const { openBtn, closeBtn, backdropElem } = refs;

openBtn.addEventListener("click", function () {
  backdropElem.classList.toggle("is-hidden");
});

backdropElem.addEventListener("click", function (e) {
  if (e.target === document.querySelector(".modal")) {
    return;
  }
  if (e.target === closeBtn) {
    console.log(e.target);
    this.classList.toggle("is-hidden");
  }
  if (e.target === backdropElem) {
    console.log(e.target);
    this.classList.toggle("is-hidden");
  }
  console.log(e.target);
  console.log(this);
});


