// const friends = [
//   {
//     name: "Semen",
//     age: "13",
//     category: "JavaScript",
//   },
//   {
//     name: "Mihael",
//     age: "12",
//     category: "Html/js",
//   },
//   {
//     name: "Yakov",
//     age: "12",
//     category: "Css",
//   },
//   {
//     name: "Vitalik",
//     age: "12",
//     category: "Html",
//   },
// ];

// for (const friend of friends) {
//   friends[0].duration = "1 year";
// }
// console.table(friends);

// const findFriendByName = (friends, friendName) => {
//     for (const friend of friends) {
//         if (friend.name === friendName) {
//             return `We found ${friendName}`
//         };
//         console.log("Error");
//     }
// };

// const found = findFriendByName(friends, "Yakov");
// console.log(found);

//todo: #2\

const basket = {
  products: [
    {
      name: "🍎",
      quantity: 5,
    },
    {
      name: "🍇",
      quantity: 12,
    },
    {
      name: "🍫",
      quantity: 2,
    },
  ],
  showProducts() {
    const { products } = this;
    console.log(products);
    return products;
  },
  addProduct(newProduct) {
    const { products } = this;
    products.push(newProduct);
    return products;
  },
  deleteProduct(deletedProduct) {
    //? #1  сравнить значения deletedProduct и
    //? итерированого обьекта
    //? Если они совпали, удаляем обьект

    const { products } = this;

    for (const product of products) {
       const { name } = product;
      if (name === deletedProduct) {
        const indexOfDeletedProduct = products.indexOf(product);
        products.splice(indexOfDeletedProduct, 1);
      }
    }
    return products;
  },
  addProductQuantity(addedProduct, addedQuantity) {
    const { products } = this;
    let countQuantity = 0;
    for (const product of products) {
      const { name, quantity } = product;
      if (name === addedProduct) {
        // console.log(quantity);
        // console.log(addedQuantity);
        countQuantity = quantity;
        countQuantity += addedQuantity;
        return quantity;
      }
    }
  },
  clearBasket() {
    const { product } = this;
    product = [];
    console.log(this);
  },
};

console.log(basket.showProducts());

const prod = {
  name: "🍭",
  quantity: 6,
};

console.log(basket.addProduct(prod));

console.log(basket.deleteProduct("🍫"));

console.log(basket.addProductQuantity("🍇", 4));

// array.forEach(element => {

// });
