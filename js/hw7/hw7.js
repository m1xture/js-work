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

//todo: #3

const drink = "coffee";
let price;
switch (drink) {
  case "tea":
    price = 25;
    console.log(`you have to pay ${price} grn.`);
    break;
  case "coffee":
    price = 30;
    console.log(`you have to pay ${price} grn.`);
    break;
  case "juice":
    price = 20;
    console.log(`you have to pay ${price} grn.`);
    break;
  default:
    price = 0;
    console.log("Our shop does not have this drink");
};

//todo: #4

const day = prompt("What day is it today?");
switch (day) {
  case "Monday" || "Tuesday" || "Wednesday" || "Thursday" || "Friday":
    console.log("Today tou have to go to your accursed work");
    break;
  case "Saturday" || "Sunday":
    console.log("In these days people rest, but not you");
    break;
  case "31":
    console.log("Today you will get ur salary!");
    break;
  default:
    console.log("You don't obey the laws of physics");
}

//todo: #5

const month = prompt("What month is it today?");
let timeOfTheYear;
switch (month) {
  case "January" || "February" || "December":
    timeOfTheYear = "winter";
    console.log(`It is ${timeOfTheYear} now`);
    break;
  case "March" || "April" || "May":
    timeOfTheYear = "spring";
    console.log(`It is ${timeOfTheYear} now`);
    break;
  case "June" || "July" || "August":
    timeOfTheYear = "summer";
    console.log(
      `It is ${timeOfTheYear} now. It is the best time of the year, and don't argue with me!`
    );
    break;
  case "September" || "October" || "November":
    timeOfTheYear = "autumn";
    console.log(`It is ${timeOfTheYear} now. So, you can go to OctoberFest`);
    break;
  default:
    console.log("Maybe, you live in the other planet");
}
