document.querySelector(".input--theme").addEventListener("click", () => {
  document.body.classList.toggle("isDark");
});

let clicks = 0;
window.addEventListener("click", () => {
  clicks++;
  document.querySelector("[data-text]").textContent = clicks;
});


