const refs = {
  inputElem: document.querySelector(".slider__input"),
  imgElem: document.querySelector(".slider__image"),
};
const { inputElem, imgElem } = refs;

inputElem.addEventListener(
  "input",
  _.debounce((e) => {
    console.log(e);
    const indexOfEnd = imgElem.src.indexOf("m/") + 2;
    const link = imgElem.src.split("");
    link.splice(
      indexOfEnd,
      imgElem.src.length - indexOfEnd,
      `${inputElem.value * 2}x${inputElem.value * 2}`
    );
    imgElem.src = link.join("");
  }, 300)
);

//todo: #2

const boxEl = document.querySelector("#box");

document.addEventListener(
  "mousemove",
  _.debounce((evt) => {
    boxEl.style.top = `${evt.pageY}px`;
    boxEl.style.left = `${evt.pageX}px`;
  }, 100)
);
