// function fetchGallery() {
//   console.log("1 fetch gallery");
//   return new Promise((resolve, reject) => {
//     const resp = false;
//     if (resp) {
//       resolve();
//     } else {
//       reject();
//     }
//   });
// }

// function successFetch() {
//   console.log("we got photos2");
// }

// function errorFetch() {
//   console.log("wqe did noit get photos(((");
// }

// fetchGallery().then(successFetch).catch(errorFetch);

//?

// 9 - setTimeout vs Promise

// console.log("start");

// setTimeout(() => {
//   console.log("setTimeout");
// });

// Promise.resolve().then(() => {
//   console.log("resolve");
// });

// console.log("end");

//? start end resolve setT

//todo: part 2

// Promise.all([
//   new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
//   new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
//   new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3
// ]).then(alert);

//?

// Promise.all([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Error!")), 2000)
//   ),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
// ]).catch(alert);

//? error!

// Promise.race([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Error!")), 2000)
//   ),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
// ]).then(alert);

//?
// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   setTimeout(() => {
//     console.log("timerStart");
//     resolve("success");
//     console.log("timerEnd");
//   }, 0);
//   console.log(2);
// });

// promise.then((res) => {
//   console.log(res);
// });

// console.log(4);

//? 1 2 4 timerStart timerend success

// const timer1 = setTimeout(() => {
//   console.log("timer1");

//   const promise1 = Promise.resolve().then(() => {
//     console.log("promise1");
//   });
// }, 0);

// const timer2 = setTimeout(() => {
//   console.log("timer2");
// }, 0);

//? timer1 promise1 timer2

// Напишіть функцію, яка приймає два
// числа і повертає проміс, який виконується з результатом їхнього додавання.
// Якщо хоча б одне з чисел не є числом,
//     проміс повинен бути відхилено з повідомленням "Неправильні аргументи".

// console.log(isNaN("alla"));

// function addNums(num1, num2) {
//   return new Promise((resolve, reject) => {
//     if (!isNaN(num1) && !isNaN(num2)) {
//       resolve(num1 + num2);
//     } else {
//       reject("The arguments are not number type");
//     }
//   });
// }
// addNums(23, 89)
//   .then((sum) => console.log(sum))
//   .catch((err) => console.log(err));

//? nect

// function randomPromise() {
//   //   console.log(Math.random * 1 );
//   const randomNum = Math.random() * 1 - 0 > 0.5 ? true : false;
//   return new Promise((resolve, reject) => {
//     if (randomNum) {
//       resolve("Success!" + Math.round(randomNum));
//     } else {
//       reject("error!");
//     }
//   });
// }

// randomPromise()
//   .then((msg) => console.log(msg))
//   .catch((err) => console.log(err))
//   .finally(() => {
//     console.log("finally ");
//   });
//? nwexty

// function getRandomNumber() {
//   return new Promise((resolve, reject) => {
//     const randomNum = Math.round(Math.random() * 10 - 0);
//     if (randomNum >= 5) {
//       reject("error");
//     } else {
//       resolve(randomNum);
//     }
//   });
// }

// getRandomNumber()
//   .then((num) => {
//     console.log(num + 10);
//   })
//   .catch((e) => console.log(e))
//   .finally(() => {
//     console.log("promise is all");
//   });


