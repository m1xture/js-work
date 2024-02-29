// function pairNums(numsArr) {
//   const isAllPaired = numsArr.every((num) => num % 2 === 0);
//   return new Promise((resolve, reject) => {
//     if (isAllPaired) {
//       resolve("All nums are paired");
//     } else {
//       reject("error");
//     }
//   });
// }

// pairNums([2, 2, 8, 6])
//   .then((msg) => console.log(msg))
//   .catch((err) => console.log(err));

//todo: #2
// const imgEl = document.querySelector("[data-img]");
// const url =
//   "https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=600";

// function loadImg() {
//   const isSuccessLoad = [true, false][Math.round(Math.random() * 1 - 0)];
//   return new Promise((resolve, reject) => {
//     if (isSuccessLoad) {
//       resolve(url);
//     } else {
//       reject(
//         "error"
//       );
//     }
//   });
// }

// loadImg()
//     .then((urlImg) => {
//         console.log(imgEl.src);
//         imgEl.src = urlImg;

//   })
//   .catch((err) => console.log(err));

// todo: #3

// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
// });

// console.log("end");

// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
// });

// promise1.then((res) => {
//   console.log(res);
// });

// console.log("end");

//? start 1 end 2

// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
//   console.log(3);
// });

// promise1.then((res) => {
//   console.log(res);
// });

// console.log("end");

//? start  1 3 end 2

// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
// });

// promise1.then((res) => {
//   console.log(2);
// });

// console.log("end");

//? start 1 end

// todo: #4

// console.log("start");

// const fn = () =>
//   new Promise((resolve, reject) => {
//     console.log(1);
//     resolve("success");
//   });

// console.log("middle");

// fn().then((res) => {
//   console.log(res);
// });

// console.log("end");

//? start middle 1 end success

// console.log("start");

// Promise.resolve(1).then((res) => {
//   console.log(res);
// });

// Promise.resolve(2).then((res) => {
//   console.log(res);
// });

// console.log("end");

//? start end 1 2

// const promise = new Promise((resolve, reject) => {
//   reject(Error("Some Error Occurred"));
// })
//   .catch((error) => console.log(error))
//   .then((error) => console.log(error));

//?

const promise = new Promise((res) => res(2));

promise
  .then((v) => {
    console.log(v);
    return v * 2;
  })
  .then((v) => {
    console.log(v); // 4
    return v * 2;
  })
  .finally((v) => {
    console.log(v);
    return v * 2; // 8
  })
  .then((v) => {
    console.log(v);
  });
  //? 2 4 4 undefined