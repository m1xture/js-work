//todo: #1

function delayedPromise(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}
// function showPromises() {
const arrOfResults = Promise.all([
  delayedPromise("lalala", 450),
  delayedPromise("Tatata", 500),
  delayedPromise("lyalyalya", 600),
  delayedPromise("hello", 700),
  delayedPromise("node.js", 1000),
])
  .then((res) => console.log(res))
  .catch((e) => console.log(e));
// return arrOfResults;
// }
// setTimeout(() => {
//     console.log(arrOfResults);
// }, 2000);

//todo: #2

function randomDelay(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, Math.round(Math.random() * 10000 - 1000 + 1000));
  });
}
Promise.race([
  randomDelay("hello"),
  randomDelay("world"),
  randomDelay("node.js"),
  randomDelay("ecmascript"),
  randomDelay("react"),
]).then((msg) => console.log(msg));

// async function log() {
//   console.log(await Promise.race(arrOfPromises));
// }
// log();
