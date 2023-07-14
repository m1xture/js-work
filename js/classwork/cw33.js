//todo: Напишіть функцію, яка отримує масив об'єктів з
//? інформацією про товари
// (назва, ціна, кількість) та використовує
// //? деструктуризацію для обчислення
// загальної вартості товарів.

// function countSum(basket) {
//   // const {} = basket
//   let totalSum = 0;
//   for (const products of basket) {
//     const { name, price, quantity } = products;
//     totalSum += price * quantity;
//   }
//   console.log(totalSum);
//   return totalSum;
// }

// const basket1 = [
//   {
//     name: "🍎",
//     quantity: 5,
//     price: 34,
//   },
//   {
//     name: "🍇",
//     quantity: 12,
//     price: 21,
//   },
//   {
//     name: "🍫",
//     quantity: 2,
//     price: 98,
//   },
// ];

// countSum(basket1);


// const user = {
//   name: "John",
//   age: 30,
//   email: "john@example.com",
// };

// const { name, age, email } = user;/


const musicLibrary = {
  count: 2,
  artists: [
    {
      ArtistName1: "The Beatles",
      albums: [
        {
          title: "SgtPepper's Lonely Hearts Club Band",
          year: 1967,
          tracks: [
            {
              title: "With a Little Help from My friends",
              duration: "2:44",
            },
            {
              title: "Lucy in the sky with the diamonds",
              duration: "3:28",
            },
            {
              title: "A day in the life",
              duration: "5:33",
            },
          ],
        },
        {
          title: "Abbey Road",
          year: 1969,
          tracks: [
            {
              title: "Come toghether",
              duration: "4:19",
            },
            {
              title: "Something",
              duration: "3:01",
            },
            {
              title: "Here comes the Sun",
              duration: "3:06",
            },
          ],
        },
      ],
    },
    {
      ArtistName2: "Pink Floyd",
      albums: [
        {
          title: "The Wall",
          year: 1979,
          tracks: [
            {
              title: "Another Brick in the wall, Part 2",
              duration: "3:59",
            },
            {
              title: "Comfortably Numb",
              duration: "6:23",
            },
            {
              title: "Hey You",
              duration: "4:40",
            },
          ],
        },
        {
          title: "Dark Side of the Moon",
          year: 1973,
          tracks: [
            {
              title: "Speak to me/Breathe",
              duration: "3:58",
            },
            {
              title: "Time",
              duration: "7:06",
            },
            {
              title: "Money",
              duration: "6:22",
            },
          ],
        },
      ],
    },
  ],
};


const {
  count,
  artists: [TheBeatles: { name, albums: [SgtPeppersLonelyHeartsClubBand: { title, year, tracks: []}]}, PinkFloyd],
} = musicLibrary;
console.log(TheBeatles);
// const { TheBeatles, PinkFloyd } = musicLibrary.artists


function name(params) {
    
}