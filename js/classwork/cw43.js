// class Car {
//   constructor({ brand = "", model = "", price = 0 }) {
//     this._brand = brand;
//     this._model = model;
//     this._price = price;
//   }
//   // showInfo() {
//   //     console.log(`Brand - ${this.brand} ${this.model}, price - ${this.price}`);
//   // };
//   get brand() {
//     return this._brand;
//   }
//   set brand(newBrand) {
//     return (this._brand = newBrand);
//   }
// }

// const toyota = new Car({ brand: "tototo", model: "yayaya" });
// console.log(toyota.brand);
// console.log(toyota.brand = "yoyoyo");

// class Hero {
//   constructor({ heroName = "", heroScores = 0 }) {
//     this.name = heroName;
//     this.scores = heroScores;
//   }
// }

// class Orks extends Hero {
//   constructor({ skinColor = "" }) {
//     super(name, scores);
//     this.skinColor = skinColor;
//   }
// }

// class Elfs extends Hero {
//   constructor({ earsLength }) {
//     super(name, scores);
//     this.earsLength = earsLength;
//   }
// }

//todo: Classes met25

class Animal {
  // constructor(animalName) {
  //   this.animalName = animalName;
  // }
  makeSound() {
    console.log("Roaaaaar");
  }
}

// class Dog extends Animal {
//   constructor({ breed = "" }) {
//     super(animalName);
//     this.breed = breed;
//   }
// }

//todo: Classes Yakov29

// class Cat extends Animal {
//   makeSound() {
//     console.log("nya");
//   }
// }

// const animal = new Animal();
// animal.makeSound(); // "The animal makes a sound"
// const cat = new Cat();
// cat.makeSound(); // "Meow"

// //todo: me

// class Shape {
//   constructor({ color = "" }) {
//     this.color = color;
//   }
//   draw() {
//     console.log(`Drawing ${this.color} shape`);
//   }
// }

// class Circle extends Shape {
//   constructor({ color = "", radius = 0 }) {
//     super({ color });
//     this.radius = radius;
//   }
//   draw() {
//     console.log(`Drawing ${this.color} circle with radius ${this.radius}`);
//   }
// }

// const myCircle = new Circle({ color: "red", radius: 6 });
// myCircle.draw(); // Drawing a circle with radius 5
// console.log(myCircle.color); // "red"

class Person {
  constructor( name = "", age = 0 ) {
    this.name = name;
    this.age = age;
  }
}

class Employee extends Person {
  constructor( name = "", age = 0, position = "" ) {
    super(name, age);
    this.position = position;
  }
  getInfo() {
    console.log(
      `${this.name} is a ${this.position} and he is ${this.age} y.o.`
    );
  }
}
const john = new Employee ("John", 32, "programmer" );
john.getInfo(); // "John is a programmer and is 32 years old"
