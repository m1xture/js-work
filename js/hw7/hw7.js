//todo: #1

// const a1 = 5; // ? Global
// if (true) {
//   console.log(a1);
//   const a2 = 88; //? Local
// }
// console.log(a2);

// const b1 = 45; //? Global
// if (true) {
//   const b2 = 33; //? Local
//   if (true) {
//     console.log(b2); //?
//   }
// }
// if (true) {
//   console.log(b2);
// }

//TODO: #2

let lang = "en";
switch (lang) {
  case "jp":
    console.log("1月");
    break;
  case "ua":
    console.log("Січень");
    break;
  case "en":
    console.log("January");
    break;
  case "fr":
    console.log("Janvier");
    break;
  default:
    console.log("Вы говорите так быстро, что ни один переводчик вас не поймет");
}
