document.querySelector(".input--theme").addEventListener("click", () => {
  document.body.classList.toggle("isDark");
});

let clicks = 0;
window.addEventListener("click", () => {
  clicks++;
  document.querySelector("[data-text]").textContent = clicks;
});


const refs = {
  backdrop: document.querySelector("[data-backdrop]"),
  openModal: document.querySelector("[data-open]"),
  closeModal: document.querySelector("[data-close]"),
};



refs.openModal.addEventListener("click", () => {
  refs.backdrop.classList.toggle("is-hidden");
});
refs.closeModal.addEventListener("click", () => {
  refs.backdrop.classList.toggle("is-hidden");
});