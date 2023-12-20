//todo: Вытягиваю все фото и задаю значение атрибуту src

function downloadImg(imgEl) {
  imgEl.src = imgEl.dataset.src;
  imgEl.style.border = "5px solid #ff8e3c";
}
function shownPreloader(isShow, preloaderElem) {
  if (isShow) {
    preloaderElem.classList.add("visible--preloader");
    return;
  }

  preloaderElem.classList.remove("visible--preloader");

  return;
}
function resetImg(imgEl) {
  imgEl.src = "";
  imgEl.style.border = "none";
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
      downloadImg(entry.target); //? показываем фото
      // console.log(entry);
      shownPreloader(false, entry.target.nextElementSibling); //? скрываем прелоадер
      observer.unobserve(entry.target);
    } else {
      resetImg(entry.target); //? скрываем фото (src="")
      shownPreloader(true, entry.target.nextElementSibling); //? показываем прелоадер
    }
  });
};

const observer = new IntersectionObserver(callbackFn, options);

document.querySelectorAll("img[data-src]").forEach((item) => {
  observer.observe(item); //? начинаем отслеживать все img с атрибутом data-src
});
