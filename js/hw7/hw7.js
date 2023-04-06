//todo: #1

const a1 = 5;   // ? Global
if (true) {
    console.log(a1);
  const a2 = 88; //? Local

}
console.log(a2);

const b1 = 45; //? Global
if (true) {
  const b2 = 33; //? Local
  if (true) {
    console.log(b2); //?
  }
}
if (true) {
  console.log(b2);
}
