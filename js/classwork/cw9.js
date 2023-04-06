//todo: Напиши скрипт виблру вартості готелю по кількості зірок.
//todo: 1 - 20$, 2 -30$, 3 - 50$, 4 -70$, 5 - 120$
//todo: Якщо у змінній stars є ще інші цифри, крім 1-5, виведи рядок "Такої кількості зірок готелю не існує"

// const stars = 4;
// let price;
// let message;
// if (stars === 1) {
//   price = 20;
//   message = `Вартість готелю - ${price} $`;
// } else if (stars === 2) {
//   price = 30;
//   message = `Вартість готелю - ${price} $`;
// } else if (stars === 3) {
//   price = 50;
//   message = `Вартість готелю - ${price} $`;
// } else if (stars === 4) {
//   price = 70;
//   message = `Вартість готелю - ${price} $`;
// } else if (stars === 5) {
//   price = 120;
//   message = `Вартість готелю - ${price} $`;
// } else {
//   console.log("Ви оселетеся не в отелі");
// }

// switch (stars) {
//   case 1:
//     price = 20;
//     message = `Вартість готелю - ${price} $`;
//     break;
//   case 2:
//     price = 30;
//     message = `Вартість готелю - ${price} $`;
//     break;
//   case 3:
//     price = 50;
//     message = `Вартість готелю - ${price} $`;
//     break;
//   case 4:
//     price = 70;
//     message = `Вартість готелю - ${price} $`;
//     break;
//   case 5:
//     price = 120;
//     message = `Вартість готелю - ${price} $`;
//     break;
//     defoult: console.log("Ви оселетеся не в отелі");
// }

//todo: Напиши скрипт вибору вартості готелю по кількості зірок.
//todo: Якщо 1, 2 - 20$, якщо 3, 4 - 30$, якщо 5 - 120$
//? 1) create variables
//? 2) create switch, add message text
// const stars = 5;
// let value = 120;
// let message;
// if (stars === 1 || stars === 2) {
//   value = 20;
// } else if (stars === 3 || stars === 4) {
//   value = 30;
// } else if (stars === 5) {
//   value = 120;
// } else {
//   message = "Занадто великий гаманець";
// }

// switch (stars) {
//   case 1:
//   case 2:
//     value = 20;
//     break;
//   case 3:
//   case 4:
//     value = 30;
//     break;
//   case 5:
//     value = 120;
//     break;
//     default: message = "Занадто великий гаманець для нашого сайту";
// }

// //todo: Напиши скрипт вибору опції доставки товару.
//?  Опція зберігається в змінній price, де 100 - значення ʼсамовивізʼ, 200 - ʼкурʼєрʼ, 3 - ʼпоштаʼ

// ? В змінну message записати повідомлення в залежності від опції.
//  ?- 'Ви зможете забрати товар завтра з 12:00 в нашому офісі'
//  ?- 'Курʼєр доставить замовлення завтра з 9:00 до 18:00'
// ? - 'Посилка буде відправлена сьогодні'
//  ?- 'Вам перезвонить менеджер'

let price;
let delivery;
if (price === 100) {
  delivery = "Ви зможете забрати товар завтра з 12:00 в нашому офісі";
} else if (price === 300) {
  delivery = "Посилка буде відправлена сьогодні";
} else if (price === 500) {
  delivery = "Курʼєр доставить замовлення завтра з 9:00 до 18:00";
} else {
  delivery = "Вам перезвонить менеджер";
}

switch (price) {
  case 100:
    delivery = "Ви зможете забрати товар завтра з 12:00 в нашому офісі";
    break;
  case 300:
    delivery = "Посилка буде відправлена сьогодні";
    break;
  case 500:
    delivery = "Курʼєр доставить замовлення завтра з 9:00 до 18:00";
    break;
  default:
    delivery = "Вам перезвонить менеджер";
}
