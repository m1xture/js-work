// // todo: Конкатeнація рядків

// const firstName = "Michael";
// const lastName = "Ivanov";
// console.log(firstName + " " + lastName);
// const full = firstName + " " + lastName;
// console.log(full);

// // todo: Guest X  Y  live in Z flat type P

// const room = "102";
// const type = "VIP";
// const welcomeMessage = "Guest" + " " + firstName + " " + lastName + " " + "live in";
// console.log(welcomeMessage);

// // Шаблoнные строки

// const mess = `Guest ${firstName} ${lastName} live in Z flat type P`

// //! Normalize

// let brand = "Samsung";
// let baseBrand = "samsung";
// brand = brand.toUpperCase();
// baseBrand = baseBrand.toLowerCase();
// const isTheSame = baseBrand !== brand;
// console.log(isTheSame);

// const firstLetter = baseBrand[0];
// console.log(firstLetter);

// //!  cuts string

// brand = brand[0] + brand.slice(2, 5);
// console.log(brand);

//todo: Search in string using method "includes()"

const word1 = "spam";
const word2 = "sale";
const string1 = "Привіт, я принц Абдул, це не spam, пропоную тобі мільйон!";
const string2 = "The largest sale";
const string3 = "Рекламна компанія у цьому місяці..."; 
console.log(string1.toLowerCase().includes(word1));
console.log(string1.toLowerCase().includes(word2));
console.log(string2.toLowerCase().includes(word1));
console.log(string2.toLowerCase().includes(word2));
console.log(string3.toLowerCase().includes(word1));
console.log(string3.toLowerCase().includes(word2));
const normalize = string2.toLowerCase()
console.log(normalize.includes(word1));

