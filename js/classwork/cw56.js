// const json = `{
//         "nickname": "CuteNinja54",
//         "hours": 89
//  }
//  `;
// const objJson = JSON.parse(json);
// console.log(objJson);

// const object = {
//         nickname: "SuperSniper09",
//         hours: 201.5,

// };

// const jsonToObj = JSON.stringify(object);
// console.log(jsonToObj);

//todo: #1

// let xhr = new XMLHttpRequest();
// let objArr = [];
// xhr.overrideMimeType("application/json");
// xhr.open("GET", "../colorpicker.json", true);

// xhr.onreadystatechange = () => {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     objArr = JSON.parse(xhr.responseText);
//     console.log(objArr);
//     showDiv();
//   }
// };
// xhr.send(null);

// const divEl = document.createElement("div");
// divEl.style.backgroundColor = "red";
// document.body.append(divEl);

// function showDiv() {
//   objArr.forEach(({ hex }) => {
//     const div = document.createElement("div");
//     div.style.backgroundColor = HEX;
//     document.body.append(div);
//   });
// }

// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })
//   .then((res) => {
//     console.log(res);
//     console.log(res);
//   });

// 1. Створіть об'єкт JSON з інформацією про книгу. Книга повинна мати наступні поля:

// назва книги
// автор книги
// рік видання
// жанр

// ☝️Перевірте, що ваш JSON є коректним за допомогою методу JSON.parse().

// 2. Запросіть у вашого користувача ім'я та вік за допомогою input.
// Створіть об'єкт JSON з інформацією про користувача,
// використовуючи дані, які ви отримали від користувача.
// Перевірте, що ваш JSON є коректним за допомогою методу JSON.parse().

// const str = `{"title": "Harry Poter", "author": "J. Rowling", "year": 1997, "genre": "fantasy"}`;
// console.log(JSON.parse(str));

const formEl = document.querySelector("form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const str = `{ "name": "${e.currentTarget.fname.value}", "age": ${e.currentTarget.age.value} }`;
  console.log(str);
  console.log(JSON.parse(str));
});
