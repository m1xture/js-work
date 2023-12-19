//todo: Вытягиваю все фото и задаю значение атрибуту src

// const listEl = document.querySelector(".gallery__list");
function downloadImg(imgEl) {
  imgEl.src = imgEl.dataset.src;
  imgEl.style.border = "5px solid #ff8e3c";
  // imgEl.classList.add("visible--img");
}
function shownPreloader(isShow, preloaderElem) {
  if (isShow) {
    // preloadersElems.forEach((preloader) => {
    //   preloader.classList.add("visible--preloader");
    // });
    preloaderElem.classList.add("visible--preloader");
    return;
  }
  // preloadersElems.forEach((preloader) => {
  //   preloader.classList.remove("visible--preloader");
  // });
  preloaderElem.classList.remove("visible--preloader");

  return;
}
function resetImg(imgEl) {
  imgEl.src = "";
  imgEl.style.border = "none";
  // imgEl.classList.remove("visible--img");
}
//todo: observer

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

const preloadersElems = document.querySelectorAll(
  ".loadingio-spinner-pulse-u7z729k4z6l"
);



const callbackFn = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      downloadImg(entry.target);
      console.log(entry);
      shownPreloader(false, entry.target.nextElementSibling);
      observer.unobserve(entry.target);
    } else {
      resetImg(entry.target);
      shownPreloader(true, entry.target.nextElementSibling);
    }
  });
};

const observer = new IntersectionObserver(callbackFn, options);

document.querySelectorAll("img[data-src]").forEach((item) => {
  observer.observe(item);
});
