// #1
// Напиши функцію-конструктор Account, яка створює об'єкт
// з властивостями login і email. В prototype функції-конструктора
//  добав метод getInfo(), який виводить в консоль значення полів login і email об'єкта який його викликав.

// const mango1 = new Account({
//   login: "Mangozedog",
//   email: "mango@dog.woof",
// });
// mango1.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly1 = new Account({
//   login: "Poly",
//   email: "poly@mail.com",
// });
// poly1.getInfo(); // Login: Poly, Email: poly@mail.com
// const mango2 = new User({
//   name: "Mango",
//   age: 2,
//   followers: 20,
// });

const AccountPrototype = {
  login: "",
  email: "",
  getInfo() {
    // console.log(`Login: ${this.login}, Email: ${this.email}`);
    return `Login: ${this.login}, Email: ${this.email}`;
  },
};

const vova = Object.create(AccountPrototype);
vova.email = "vova2023@gmail.com";
vova.login = "Vovans";
vova.password = "lalala1234";
console.log(vova);
console.log(vova.getInfo());

//todo: #2

class User {
  constructor({ username, age, followers }) {
    this.username + username;
    this.age = age;
    this.followers = followers;
  }
  getInfo() {
    return `User ${this.username} is ${this.age} years old and has ${this.followers} followers`;
  }
}

// const avocado = new User("CoolAvocado317", 0.4, 251784);
const avocado = new User({
  username: "CoolAvocado317",
  age: 0.4,
  followers: 251784,
});

avocado.password = "imthebestavocado0ntheplanet97";
console.log(avocado);

//todo: #3

class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    this.items.reduce((acc, item) => {
      console.log(item);
    });
    return this.items;
  }
  addItem(newitem) {
    this.items.push(newitem);
    return this.items;
  }
  removeItem(itemToRemove) {
    const indexOfItemToRemove = this.items.findIndex(
      (item) => item === itemToRemove
    );
    const splicedItems = this.items.splice(indexOfItemToRemove, 1);
    console.log(splicedItems);
    return splicedItems;
  }
}

const itms = [
  "Нанітоіди",
  "Пролонгер",
  "Залізні жупи",
  "Антигравітатор",
  "Дроїд",
];

const newStorage = new Storage(itms);
newStorage.addItem("Avocado3000");
newStorage.removeItem("Пролонгер");
newStorage.getItems();
console.log(newStorage);

//todo: #4

