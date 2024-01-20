const formEl = document.querySelector("#form");
const localStrgKey = "data";

function saveToLocalStorage(propertyName, obj) {
  return localStorage.setItem(propertyName, JSON.stringify(obj));
}

formEl.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let err = 0;
  document.querySelectorAll("input").forEach((input) => {
    if (input.value === "") {
      err++;
    }
  });
  console.log(err);
  if (err !== 0) return;

  const obj = {
    username: formEl.username.value.trim(),
    surname: formEl.surname.value.trim(),
    email: formEl.email.value.trim(),
    tel: formEl.tel.value.trim(),
    comment: formEl.comment.value.trim(),
  };

  try {
    saveToLocalStorage(localStrgKey, obj);
    formEl.insertAdjacentHTML("beforeend", "<p data-msg>Success!🎊</p>");
  } catch (error) {
    console.log(error);
    formEl.insertAdjacentHTML("beforeend", "<p data-msg>Error!📌</p>");
  }
  // localStorage.removeItem(localStrgKey);
  formEl.reset();
  setTimeout(() => {
    document.querySelector("[data-msg]").remove();
  }, 3500);
});

document.querySelector("[data-view]").addEventListener("click", (e) => {
  try {
    const parsedData = JSON.parse(localStorage.getItem(localStrgKey));
    console.log(parsedData);
  } catch (error) {
    console.log("The field may be empty");
    console.log(error);
  }
});

document.addEventListener("DOMContentLoaded", (e) => {
  let parsedData = {};
  try {
    if (!localStorage.getItem(localStrgKey)) {
      console.log("Local storage is empty");
      return;
    }
    parsedData = JSON.parse(localStorage.getItem(localStrgKey));
  } catch (error) {
    console.log("Your localStorage may be empty");
    console.log(error);
    return;
  }
  Object.keys(parsedData).forEach((key) => {
    formEl[key].value = parsedData[key];
  });
});

//todo theme

document.querySelector('[data-switch]').addEventListener("change", (evt) => {
  
});