// class Car {
//     constructor({ brand = "", model = "", price = 0 }) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }
//     showInfo() {
//         console.log(`Brand - ${this.brand} ${this.model}, price - ${this.price}`);
//     };
// };

// const toyota = new Car({brand: "Toyota", price: 30000, model: "rav4"});

// toyota.showInfo();

//todo Створіть клас Person, що містить властивості firstName та lastName.
//todo  Додайте метод getFullName(), який повертає повне ім'я у
//todo форматі "firstName lastName".

class Person {
  constructor({ firstName = "", lastName = "" }) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

const person1 = new Person({ firstName: "John", lastName: "Doe" });
console.log(person1.getFullName()); // John Doe

//todo Створіть клас Rectangle, що містить властивості width та height.
//todo Додайте метод getArea(), який повертає площу прямокутника.

class Rectangle {
  constructor({ width = 0, height = 0 }) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

const rectangle1 = new Rectangle({ height: 90, width: 180 });
console.log(rectangle1.getArea());

//todo: Створіть клас Calculator, який буде мати наступні
//todo: методи: add(), subtract(), multiply(), divide().
//todo: Кожен метод приймає два аргументи — числа,
//todo: які необхідно обробити.Результатом кожного методу має бути
//todo: результат відповідної математичної операції.

class Calculator {
  add(n1, n2) {
    return n1 + n2;
  }
  subtract(n1, n2) {
    return n1 - n2;
  }
  multiply(n1, n2) {
    return n1 * n2;
  }
  divide(n1, n2) {
    if (n1 !== 0 && n2 !== 0) {
      return n1 / n2;
    } else {
      return "Please, choose another numbers";
    }
  }
}

const calculator = new Calculator();
console.log(calculator.add(2, 3)); // 5
console.log(calculator.subtract(5, 2)); // 3
console.log(calculator.multiply(2, 4)); // 8
console.log(calculator.divide(10, 2)); // 5
console.log(calculator.divide(10, 0)); //

//todo Створіть клас Product, що містить властивості name, price, та discount.
//todo який повертає ціну товару зі знижкою, якщо така є
//todo Додайте метод getDiscountPrice(),
//todo (якщо властивість discount є ненульовим числом,
//todo знижка відсотків від ціни повинна бути застосована).

class Product {
    constructor({name = "", price = 0, discount = 0}) {
        this.name = name;
        this.price = price;
        this.discount = discount;
    };
    getDiscountPrice() {
        if (this.discount > 0) {
            return this.price - (this.price * this.discount / 100);
        } else {
            return this.price;
        }
    }
}


const product1 = new Product({ name: "Phone", price: 500, discount: 10 });
console.log(product1.getDiscountPrice()); // 450
