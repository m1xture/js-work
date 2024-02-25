const refs = {
  daysEl: document.querySelector("[data-value=days]"),
  hoursEl: document.querySelector("[data-value=hours]"),
  minsEl: document.querySelector("[data-value=mins]"),
  secondsEl: document.querySelector("[data-value=secs]"),
  formEl: document.querySelector("[data-form]"),
};

const { daysEl, hoursEl, minsEl, secondsEl } = refs;

console.log();

// document.addEventListener("DOMContentLoaded", () => {
//   refs.formEl.endDate.setAttribute("min", new Date().toISOString());
// });

function setDateInterval(time) {
  function renderTimer({ days, hours, mins, seconds }) {
    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minsEl.textContent = mins;
    secondsEl.textContent = seconds;
  }
  const id = setInterval(() => {
    time -= 1000;
    const timeObj = {
      days: Math.round(time / (1000 * 60 * 60 * 24)),
      hours: Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      mins: Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((time % (1000 * 60)) / 1000),
    };
    // console.log(timeObj);
    renderTimer(timeObj);
  }, 1000);
}

refs.formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  if (refs.formEl.endDate.value === "") {
    console.log("INput is empty!");
    return;
  }
  const time =
    new Date(refs.formEl.endDate.value).getTime() - new Date().getTime();

  const timeObj = {
    days: Math.floor(time / (1000 * 60 * 60 * 24)),
    hours: Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    mins: Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((time % (1000 * 60)) / 1000),
  };
//   console.log(timeObj);
  setDateInterval(time);
});

//? given

// new CountdownTimer({
//   selector: "#timer-1",
//   targetDate: new Date("Jul 17, 2019"),
// });
