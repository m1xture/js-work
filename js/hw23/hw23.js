class Account {
  constructor({ login = "", email = "" }) {
    this.login = login;
    this.email = email;
  }
  getInfo() {
    console.log(`Email - ${this.email}. Login - ${this.login}`);
    return `Email - ${this.email}. Login - ${this.login}`;
  }
}

const mango1 = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});
mango1.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly1 = new Account({
  login: "Poly",
  email: "poly@mail.com",
});

//todo #2

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

const avocado = new User({
  username: "CoolAvocado317",
  age: 0.4,
  followers: 251784,
});

avocado.password = "imthebestavocado0ntheplanet97";
console.log(avocado);

//todo #3

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
newStorage.removeItem("Залізні жупи");

newStorage.getItems();
console.log(newStorage);

//todo #4

class StringBuilder {
  constructor(str) {
    this._value = str;
  }
  get value() {
    return this._value;
  }
  //   set append(newStr) {
  //     this._value = this._value + newStr;
  //   }
  //   set prepend(newStr) {
  //     this._value = newStr + this._value;
  //   }
  //   set pad(newStr) {
  //     this._value = newStr + this._value + newStr;
  //   }
  append(newStr) {
    return (this._value = this._value + newStr);
  }
  prepend(newStr) {
    return (this._value = newStr + this._value);
  }
  pad(newStr) {
    return (this._value = newStr + this._value + newStr);
  }
}

const builder = new StringBuilder(".");

// builder.append = "^"; //?: For setters
builder.append("^"); //?: For staticc methods

console.log(builder.value); // '.^'

// builder.prepend = "^"; //?: For setters
builder.prepend("^"); //?: For staticc methods

console.log(builder.value); // '^.^'

// builder.pad = "=";  //?: For setters
builder.pad("=");

console.log(builder.value); // '=^.^='

//todo #5

class Car {
  constructor({
    speed = 0,
    price = 0,
    maxSpeed = 0,
    isOn = false,
    distance = 0,
  }) {
    this.speed = speed;
    this.price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }
  get viewPrice() {
    return this.price;
  }
  set changePrice(newPrice) {
    this.price = newPrice;
  }
  getSpecs() {
    console.log(
      `Max. speed - ${this.maxSpeed}. Current Speed - ${this.speed}. Is turned on - ${this.isOn}. Distance you have driven by this car - ${this.distance}. Price - ${this.price}`
    );
    return;
  }
  turnOn() {
    if (this.isOn === false) {
      this.isOn = true;
      console.log(
        "The car is turned on. Please, do not drive faster than the speed of light"
      );

      return this.isOn;
    } else if (this.isOn) {
      console.log("It looks like the car has already been turned on");
      return this.isOn;
    } else {
      return "Error👺";
    }
  }
  turnOff() {
    if (this.isOn) {
      this.isOn = false;
      this.speed = 0;
      console.log("The car has successfully been turned off");
      return this.isOn;
    } else if (this.isOn === false) {
      console.log("It looks like the car has already been turned off");
      return this.isOn;
    } else {
      return "Error👺";
    }
  }
  accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
      console.log("We are starting to fly...");
      this.speed += value;
      return this.speed;
    } else if (this.speed + value > this.maxSpeed) {
      console.log(
        "Ohh, I told you, do not try to drive faster than the speed of light!"
      );
      return this.speed;
    } else {
      return "Error👺";
    }
  }
  deaccelerate(value) {
    if (this.speed - value >= 0) {
      console.log("Stop🏁");
      this.speed -= value;
      return this.speed;
    } else if (this.speed - value < 0) {
      console.log("I think you should turn off the brakes already...");
      return this.speed;
    } else {
      return "Error👺";
    }
  }
  drive(hours) {
    if (this.isOn) {
      this.distance = this.speed * hours;
      console.log(`Distance you have driven - ${this.distance}`);
      return this.distance;
    } else {
      console.log("Turn on the car!🚗");
      return this.isOn;
    }
  }
}

const porsche911 = new Car({ maxSpeed: 396, price: 50000 });

//? Price

console.log(porsche911.viewPrice);

porsche911.changePrice = 55000;

console.log(porsche911.viewPrice);

//? GetSpecs

porsche911.getSpecs();

//? Turn On

porsche911.turnOn();
porsche911.turnOn();

//? Turn Off

porsche911.turnOff();
console.log(porsche911.isOn);

porsche911.turnOff();
console.log(porsche911.isOn);

porsche911.turnOn();

//? Accelerate

porsche911.accelerate(100);
porsche911.accelerate(850);

console.log(porsche911.speed);

//? Deaccelerate

porsche911.deaccelerate(55);

console.log(porsche911.speed);

porsche911.deaccelerate(1000);

//? Driving

porsche911.drive(10);

porsche911.turnOff();

porsche911.drive(2);
