function pairNums(numsArr) {
  const isAllPaired = numsArr.every((num) => num % 2 === 0);
  return new Promise((resolve, reject) => {
    if (isAllPaired) {
      resolve("All nums are paired");
    } else {
      reject("error");
    }
  });
}

pairNums([2, 2, 8, 6])
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));

//todo: #2
const imgEl = document.querySelector("[data-img]");
const url =
  "https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=600";

function loadImg() {
  const isSuccessLoad = [true, false][Math.round(Math.random() * 1 - 0)];
  return new Promise((resolve, reject) => {
    if (isSuccessLoad) {
      resolve(url);
    } else {
      reject(
        "error"
      );
    }
  });
}

loadImg()
    .then((urlImg) => {
        console.log(imgEl.src);
        imgEl.src = urlImg;

  })
  .catch((err) => console.log(err));
