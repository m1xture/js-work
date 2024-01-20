const switcher = document.getElementById("theme-switch");
const body = document.body;

switcher.checked = false;

switcher.addEventListener("click", (evt) => {
  if (switcher.checked) {
    body.classList.replace("light", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.replace("dark", "light");
    localStorage.setItem("theme", "light");
  }
});
document.addEventListener("DOMContentLoaded", loadTheme);
function loadTheme() {
  //   localStorage.setItem("theme", "light");
  //   body.classList.add(localStorage.getItem)
  const theme = localStorage.getItem("theme");
  if (theme === "light") {
    body.classList.replace("dark", "light");
    switcher.checked = false;
  } else {
    body.classList.replace("light", "dark");
    switcher.checked = true;
  }
}
