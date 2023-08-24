const User = function ({ username = "", email = "", password = "" }) {
  this.username = username;
  this.email = email;
  this.password = password;
  this.showBaseInfo = function () {
    console.log(`Your name: ${this.username}`);
    console.log(`Your email: ${this.email}`);
    };
    this.showSecretInfo = function () {
      console.log(`Your password: ${this.password}`);
    };
};

const coolAvocado = new User({
  username: "VeryCoolAvocado",
  email: "bestavocado46@gmail.com",
  password: "imthebestavocadointheworld1234",
});
coolAvocado.showBaseInfo();
coolAvocado.showSecretInfo();


//! -1

//todo: book

// const books = {
//     bookName: "",
//     date: {
//         day: 14,
//         month: 9,
//         year: 1429,
//     },
//     author: {
//         authorName: "Avocado",
//     },
// };

// const { bookName, date: {day, month, year}, author: {authorName}} = books;
// console.log(month);