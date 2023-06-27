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
    return this.products;
  },
  addProduct(newProduct) {
    this.products.push(newProduct);
    return this.products;
  },
  deleteProduct(deletedProduct) {
    //? #1  сравнить значения deletedProduct и
    //? итерированого обьекта
    //? Если они совпали, удаляем обьект
    for (const product of this.products) {
      if (product.name === deletedProduct) {
        const indexOfDeletedProduct = this.products.indexOf(product);
        this.products.splice(indexOfDeletedProduct, 1);
      }
    }
    return this.products;
  },
  addProductQuantity(addedProduct, addedQuantity) {
    for (const product of this.products) {
      if (product.name === addedProduct) {
        product.quantity += addedQuantity;
        return product.quantity;
      }
    }
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

array.forEach(element => {
    
});