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

//!іскщдд

// const btnEl = document.getElementById('back-to-up');
// window.onscroll = () => {
//   toggleTopButton();
// };
// btnEl.addEventListener('click', scrollToTop);
// function scrollToTop() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;

//   // window.scrollTo({ top: 1, behavior: 'smooth' });
// }

// function toggleTopButton() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     btnEl.classList.remove('d-none');
//   } else {
//     btnEl.classList.add('d-none');

// const btnEl = document.getElementById('back-to-up');
// window.onscroll = () => {
//   toggleTopButton();
// };
// btnEl.addEventListener('click', scrollToTop);
// function scrollToTop() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;

//   // window.scrollTo({ top: 1, behavior: 'smooth' });
// }

// function toggleTopButton() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     btnEl.classList.remove('d-none');
//   } else {
//     btnEl.classList.add('d-none');
// }
// }


