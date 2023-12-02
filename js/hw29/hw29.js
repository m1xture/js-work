const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const refs = {
  galleryListEl: document.querySelector(".js-gallery"),
  modalEl: document.querySelector(".js-lightbox"),
  bigImgEl: document.querySelector(".lightbox__image"),
  closeBtnEl: document.querySelector("button[data-action='close-lightbox']"),
};
const { galleryListEl, modalEl, bigImgEl, closeBtnEl } = refs;

galleryItems.forEach((img) => {
  galleryListEl.insertAdjacentHTML(
    "beforeend",
    `<li class="gallery__item">
  <a
    class="gallery__link"
   
  >
    <img
      class="gallery__image"
      src=${img.preview}
      data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
      alt=${img.description}
    />
  </a>
</li>`
  );
});

function closeModal(modalPath) {
  modalPath.classList.remove("is-open");
}

galleryListEl.addEventListener("click", (e) => {
  if (e.target.nodeName !== "UL") {
    const indexOfClikedElem = galleryItems.findIndex(
      (elem) => elem.preview === e.target.src
    );
    bigImgEl.src = galleryItems[indexOfClikedElem].original;
    bigImgEl.alt = galleryItems[indexOfClikedElem].description;
    modalEl.classList.add("is-open");
  }
});

modalEl.addEventListener("click", (e) => {
  if (
    e.target.nodeName === "BUTTON" &&
    e.target.classList.contains("lightbox__button")
  ) {
    closeModal(e.currentTarget);
  } else if (
    e.target.nodeName === "DIV" &&
    e.target.classList.contains("lightbox__overlay")
  ) {
    closeModal(e.currentTarget);
  } else {
    return;
  }
});

//todo: extra task try

document.addEventListener(
  "keydown",
  _.throttle((e) => {
    switch (e.code) {
      case "Escape":
        closeModal(modalEl);
        break;
      case "ArrowRight":
      case "ArrowLeft":
        let indexOfElem = galleryItems.findIndex(
          (img) => img.original === bigImgEl.src
        );
        if (e.code === "ArrowRight") {
          if (indexOfElem === galleryItems.length - 1) indexOfElem = -1;
          bigImgEl.src = galleryItems[indexOfElem + 1].original;
          bigImgEl.alt = galleryItems[indexOfElem + 1].description;
          return;
        } else {
          if (indexOfElem === 0) indexOfElem = galleryItems.length;
          bigImgEl.src = galleryItems[indexOfElem - 1].original;
          bigImgEl.alt = galleryItems[indexOfElem - 1].description;
          return;
        }
        break;
    }
  }, 250)
);
