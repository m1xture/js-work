const galleryRefs = {
  galleryList: document.querySelector(".gallery"),
  galleryItems: Array.from(document.querySelector(".gallery").children),
};

console.log(galleryRefs.galleryItems);

const { galleryList, galleryItems } = galleryRefs;

const hiddenItems = galleryItems.slice(0, galleryItems.length - 1);
console.log(hiddenItems);

let i = 1;
document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowRight") {
    if (i >= galleryItems.length) {
      galleryItems[i - 1].classList.remove("visible");
      i = 1;
    }

    galleryItems[i - 1].classList.remove("visible");
    galleryItems[i].classList.add("visible");
    i++;
  }
  if (e.code === "ArrowLeft") {
    if (i === 0) {
      i = 1;
    }
    galleryItems[i].classList.remove("visible");
    galleryItems[i - 1].classList.add("visible");
    i--;
  }
});
