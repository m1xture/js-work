const url = "https://web-production-32d8.up.railway.app/api/card";

// Parameters for the fetch request
const requestOptions = {
  method: "POST",
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ uid: 757562748 }), // Assuming 757562748 is your UID
};

// Fetching data
fetch(url, requestOptions)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log("API is working:", data);
  })
  .catch((error) => {
    console.error("Error during fetch:", error);
  });

//* API end

// const options = {
//   root: null,
//   rootMargin: "-300px 0px",
//   threshold: 0,
// };

// // const targetElem = document.querySelector("");

// const callbackFn = (entries, observer) => {
//   entries.forEach((entry) => {
//     const listItem = entry.target;
//     const imageEl = listItem.querySelector("img");
//     const title = listItem.querySelector("h3");
//     if (entry.isIntersecting) {
//       imageEl.classList.add("in-viewport-img");
//       title.classList.add("in-viewport-text");
//     } else {
//       imageEl.classList.remove("in-viewport-img");
//       title.classList.remove("in-viewport-text");
//     }
//   });
// };

// const observer = new IntersectionObserver(callbackFn, options);

// document.querySelectorAll("li").forEach((item) => {
//   observer.observe(item);
// });
