//todo: Вытягиваю все фото и задаю значение атрибуту src

// const listEl = document.querySelector(".gallery__list");
function downloadImg(imgEl) {
  imgEl.src = imgEl.dataset.src;
}
function resetImg(imgEl) {
  imgEl.src = "";
}
//todo: observer

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2,
};

const callbackFn = (entries, observer) => {
  entries.forEach((entry) => {
    const listItem = entry.target;
    const imageElem = listItem.querySelector("img");
    if (entry.isIntersecting) {
      downloadImg(imageElem);
    } else {
      resetImg(imageElem);
    }
  });
};

const observer = new IntersectionObserver(callbackFn, options);

document.querySelectorAll("li").forEach((item) => {
  observer.observe(item);
});
