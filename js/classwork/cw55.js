
const options = {
  root: null,
  rootMargin: "-300px 0px",
  threshold: 0,
};

// const targetElem = document.querySelector("");

const callbackFn = (entries, observer) => {
  entries.forEach((entry) => {
    const listItem = entry.target;
    const imageEl = listItem.querySelector("img");
    const title = listItem.querySelector("h3");
    if (entry.isIntersecting) {
      imageEl.classList.add("in-viewport-img");
      title.classList.add("in-viewport-text");
    } else {
      imageEl.classList.remove("in-viewport-img");
      title.classList.remove("in-viewport-text");
    }
  });
};

const observer = new IntersectionObserver(callbackFn, options);

document.querySelectorAll("li").forEach((item) => {
  observer.observe(item);
});
