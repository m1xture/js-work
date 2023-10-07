const galleryRefs = {
  galleryList: document.querySelector(".gallery"),
  galleryItems: Array.from(document.querySelector(".gallery").children),
};

console.log(galleryRefs.galleryItems);

const { galleryList, galleryItems } = galleryRefs;

const hiddenItems = galleryItems.slice(0, galleryItems.length - 1);
console.log(hiddenItems);

let i = 0;
document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowRight") {
    galleryItems[i - 1].classList.remove("visible");
    galleryItems[i].classList.add("visible");
    i++;
  }
});
