//todo: met25

const friend = {
  group: "FE-2",
  school: "Goiteens",
  teacher: "Tate-T",
};

const firstFriend = Object.create(friend);

// // console.log(firstFriend.group);

firstFriend.friendName = "met25";
// // console.log(firstFriend);

//? #2 friend

const secondFriend = Object.create(friend);

secondFriend.friendName = "Senya";
// // console.log(secondFriend);
secondFriend.showInfo = function () {
  return this.friendName;
};

const senyasClone = Object.create(secondFriend);

//todo: Senya26

//? Алгоритм поиска свойства в цепочке прототипов
//? Поиск начинается в собственых свойствах объекта.
//? Если ключа в собствнных свойствах нет, тогда поиск переход к цепочке прототипов
//* Как только находит нужное свойство, прекращает поиск

// console.log(friend.age);


//todo: Фунции конструкторы


// const Car = function (brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
// };

// const ferrariF50 = new Car("ford", "Fiesta", 5000);
// console.log(ferrariF50);


const Car = function ({brand = "", model = "", price = 0}) {
  this.brand = brand;
  this.model = model;
  this.price = price;
};

Car.prototype.showInfo = function (newBrand) {
    this.brand = newBrand;
  return `${model}`;
};

const newgh = new Car({brand: "lamborgini"});
newgh.color = "violet";
newgh.year = 2220
console.log(newgh);

newgh.showInfo("newjdfgns");


