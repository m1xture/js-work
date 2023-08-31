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

class Hero {
  constructor({ heroName = "", heroScores = 0 }) {
    this.name = heroName;
    this.scores = heroScores;
  }
}

class Orks extends Hero {
  constructor({ skinColor = "" }) {
    super(name, scores);
    this.skinColor = skinColor;
  }
}

class Elfs extends Hero {
  constructor({ earsLength }) {
    super(name, scores);
    this.earsLength = earsLength;
  }
}
