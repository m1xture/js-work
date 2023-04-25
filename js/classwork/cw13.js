// const friends = ["Віталя", "vsif", "Руслан", "Семен", "Яків", "Ілля", "Матвій"];
// console.log(`friend number 1 - ${friends[0]}`);
// for (let i = 0; i < friends.length; i++) {
//     console.log(`friend number ${i + 1} - ${friends[i]}`);
// }
// let number = 0
// for (let friend of friends) {
//     // friend = friends[i]
//     number++;
//     console.log(`friend number ${number} - ${friend}`);
//     friend = friend + '-1';
//     console.log(friend);
// }

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
let totalSum = 0;

// // for (let card of cart) {
// //     totalSum += card
// // }
// // console.log(totalSum);

// for (let i = 0; i < cart; i += 1) {
//     totalSum += cart[i];
// }
// console.log(totalSum);

//todo: # 3

for (let i = 0; i < cart.lenght; i++) {
  console.log(`${cart[i]} - summ without`);
  let cartTax = cart[i] * 1.2;
  console.log(`${cartTax} - with`);
  totalSum += cartTax;
  console.log(totalSum);
}
