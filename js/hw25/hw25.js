//todo: #1

const refs = {
  inputRef: document.querySelector("#data-hw25-field"),
  btnRef: document.getElementById("data-hw25-btn"),
};

const { inputRef, btnRef } = refs;

inputRef.addEventListener("input", (e) => {
  e.preventDefault;
  btnRef.textContent = inputRef.value;
  if (inputRef.value === "") {
    btnRef.textContent = "La-la-la";
  }
});

//todo: #3

document
  .querySelector("[data-hw25-img]")
  .addEventListener("click", function () {
    this.src =
      "https://64.media.tumblr.com/3a0da2e885a449b01f03e3dbd8a5e448/cc68fc454aa7bd1f-32/s1280x1920/f36f4dd8d13a1aa82c8f204dd21f686840bf0595.png";
  });

//todo: #3

document.querySelector("[data-hw25-link]").href =
  "https://github.com/ritwickdey/vscode-live-server/blob/master/docs/faqs.md";

document.querySelector("[data-hw25-img2]").alt = "newmeme";

//todo: #4

document.querySelector("[data-hw25-list]").children[0].textContent = "Angular";
