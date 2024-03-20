// const endpoint = "https://api.github.com/users";
// async function fetchData() {
//   const data = await fetch(endpoint + "/m1xture");
//   const resp = await data.json();
// }
// fetchData();

// const listRef = document.querySelector("[data-list]");
// const url = "https://api.github.com/users";

// function createMarkup(data) {
//   data.forEach((user) => {
//     listRef.insertAdjacentHTML(
//       "beforeend",
//       `<li class="gh-card"><img src="${user.avatar_url}" alt="${user.login}" /> <h2>${user.login}</h2> </li>`
//     );
//   });
// }

// function fetchUsers(path) {
//   const data = fetch(path);
//   return data;
// }
// fetchUsers(url)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     createMarkup(data);
//   })
//   .catch((err) => {
//     console.log(err);
//     throw new Error(err.status);
//   });
//todo: mon api
// async function getCurrency() {
//   const fetchData = await fetch(
//     "https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5"
//   );
//   const data = await fetchData.json();
//   console.log(data);
// }
// getCurrency();

//todo: #3

const blockEl = document.querySelector(".rectangle");

const card = document.querySelector(".weather");
document.querySelector("[data-input]").addEventListener("change", (evt) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${evt.currentTarget.value}&appid=9a6c5b632623b9a0c279060fc1b94b4d&units=metric`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const dayTime = new Date().getHours();
      if (dayTime >= 21 || dayTime <= 5) {
        blockEl.classList.add("night-theme");
      } else if (dayTime >= 6 && dayTime <= 16) {
        blockEl.classList.add("day-theme");
      } else if (dayTime >= 17 && dayTime <= 20) {
        blockEl.classList.add("evening-theme");
      }

      card.insertAdjacentHTML("beforeend", `<h2>Weather in ${data.name}</h2>`);
      card.insertAdjacentHTML(
        "beforeend",
        `<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" />`
      );
      card.insertAdjacentHTML(
        "beforeend",
        `<p class=main-temp>${Math.round(data.main.temp)}°C</p> <p>${
          data.weather[0].description
        }</p> <p>Feels Like: ${Math.round(data.main.feels_like)}°C</p>`
      );
      card.insertAdjacentHTML(
        "beforeend",
        `<div class=info><p>Humidity: ${
          data.main.humidity
        }%</p> <p>Wind: ${data.wind.speed.toFixed(1)} km/h</p> </div>`
      );
    })
    .catch((err) => console.log(err));
});
