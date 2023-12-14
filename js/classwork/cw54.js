const targetElem = document.querySelector(".target");

document.addEventListener("scroll", () => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  function callbackFn(entries, observer) {
    // console.log("cb call");
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        //   console.log(true);
        targetElem.classList.add("visible");
      }
      //   else {
      //     targetElem.classList.remove("visible");
      //   }
      if (!entry.isIntersecting) {
        targetElem.classList.remove("visible");
      }
    });
  }

  const observer = new IntersectionObserver(callbackFn, options);

  observer.observe(targetElem);
});
