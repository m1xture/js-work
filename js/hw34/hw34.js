const refs = {
  cityBackdropEl: document.querySelector("[data-city-backdrop]"),
};
// console.log(refs);
document.addEventListener("DOMContentLoaded", () => {
  let dayTime = new Date().getHours();
  console.log(dayTime);
  if (dayTime >= 21 || dayTime <= 5) {
    console.log("kldfs");
    refs.cityBackdropEl.classList.add("night-theme");
  } else if (dayTime >= 6 || dayTime <= 16) {
    refs.cityBackdropEl.classList.add("day-theme");
  } else if (dayTime >= 17 || dayTime <= 20) {
    refs.cityBackdropEl.classList.add("evening-theme");
  }
});
console.log("dsgs");
