// const data = require("../../dataDB.json");
// console.log(data);

// function getData() {
//   return fetch("http://localhost:3000/products");
// }
// getData()
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

//?

const listRef = document.querySelector(".products");
// const url = "http://localhost:3000/products";

// fetch(url)
//   .then((resp) => resp.json())
//   .then((data) => {
//     console.log(data);
//     data.map(({ name, price, quality }) =>
//       listRef.insertAdjacentHTML(
//         "beforeend",
//         `<li>
//             <h2>${name}</h2>
//             <p>Price - ${price}. Quality - ${quality}</p>
//         </li>`
//       )
//     );
//   });

//todo: #2

// function fetchData(i = 0) {
//   const params = new URLSearchParams({
//     _limit: 10,
//     _page: i,
//   });
//   fetch(`https://jsonplaceholder.typicode.com/posts?${params}`)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       if (data.length === 0) {
//         document.querySelector("[data-btn]").remove();
//       }
//       data.map((post) => {
//         listRef.insertAdjacentHTML(
//           "beforeend",
//           `<li>
//             <h2>${post.title}</h2>
//             <p>${post.body}</p>
//         </li>`
//         );
//       });
//     });
// }
// fetchData();
// let i = 1;
// document.querySelector("[data-btn]").addEventListener("click", () => {
//   i++;
//   fetchData(i);
// });

//todo: #3

function loadCards(i) {
  const params = new URLSearchParams({
    _pageSize: 10,
    _page: i,
  });
  fetch(
    `https://newsapi.org/v2/everything?q=apple&apiKey=5b0985e2a75d48489dfdb87b8567dccb&${params}`
  )
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      //   data.forEach()
    });
}
loadCards(1 )