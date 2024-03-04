//todo: #1

function delayedPromise(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}
async function showPromises() {
  const arrOfResults = await Promise.all([
    delayedPromise("lalala", 4500),
    delayedPromise("Tatata", 5000),
    delayedPromise("lyalyalya", 6000),
    delayedPromise("hello", 7000),
    delayedPromise("node.js", 10000),
  ]);
  await console.log(arrOfResults);
}
showPromises();

//todo: #2

function randomDelay(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, Math.round(Math.random() * 10000 - 1000 + 1000));
  });
}
const arrOfPromises = [
  randomDelay("hello"),
  randomDelay("world"),
  randomDelay("node.js"),
  randomDelay("ecmascript"),
  randomDelay("react"),
];

async function log() {
  console.log(await Promise.race(arrOfPromises));
}
log();
