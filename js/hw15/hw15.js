//todo: #1

const user = {
  hobby: "dancing",
  premium: null,
  addMood() {
    return (this.mood = "happy");
  },
  changeHobby() {
    return (this.hobby = "skydiving");
  },
  changeStatus() {
    return (this.premium = false);
  },
};

console.log(user);

user.addMood();
user.changeHobby();
user.changeStatus();

const userKeys = Object.keys(user);

for (const key of userKeys) {
  console.log(`${key}: ${user[key]}`);
}

//todo: #2

const countProps = (obj) => {
  const objProps = Object.keys(obj);
  let counter = 0;
  for (const prop of objProps) {
    counter += 1;
  }
  return counter;
};

//todo: #3

const findBestEmployee = (employees) => {
  // let biggestValue = 0;
  // for (const value of employeesValues) {
  //     if (biggestValue < value) {
  //         biggestValue = value;
  //     }
  // };
  let biggestValue = 0;
  const employeesKeys = Object.keys(employees);
  const employeesValues = Object.values(employees);
  let bestEmployee = "";
  for (const key of employeesKeys) {
    console.log(key);
    console.log(employees[key]);
    if (biggestValue < employees[key]) {
      biggestValue = employees[key];
      bestEmployee = key;
    }
  }
  console.log(`best employee is ${bestEmployee} with ${biggestValue} tasks`);
  return `best employee is ${bestEmployee} with ${biggestValue} tasks`;
};

findBestEmployee({
  Lalala: 234,
  Lyalyalya: 23,
  FSDJFDSN: 7887,
});

//todo: #4

const countTotalSalary = (employees) => {
  const salaryArray = Object.values(employees);
  let totalSalary = 0;
  for (const salary of salaryArray) {
    totalSalary += salary;
  }
  return totalSalary;
};

//todo: #5

const getAllPropValues = (arr, prop) => {
  const propValues = [];
  for (const obj of arr) {
    propValues.push(obj[prop]);
  }
  console.log(propValues);
  return propValues;
};

const lala = [
  {
    name: "lalala",
  },
  {
    name: "blablabla",
  },
];

getAllPropValues(lala, "name");

//todo: #6

//? Первый вариант, наверное, не правильный

// const calculateTotalPrice = (allProduts, productName) => {
//   let allPrices = [];
//   for (const product of allProduts) {
//     const price = product.quantity * product.price;
//     allPrices.push(price);
//     console.log(`Price ${product.name} is - ${price}`);
//   };
//   let totalPrice = 0;
//   for (const productPrice of allPrices) {
//     totalPrice += productPrice;
//   };
//   console.log(`Итоговая цена - ${totalPrice}`);
// return totalPrice
// };

//? Второй вариант

const calculateTotalPrice = (allProduts, productName) => {
  let price = 0;
  for (const product of allProduts) {
    if (productName === product.name) {
      price = product.quantity * product.price;
      console.log(`${productName} cost - ${price}$`);
      break;
    } else {
      console.log("Product searching...");
    }
  }
  return price;
};

const products = [
  {
    name: "banana",
    quantity: 5,
    price: 20,
  },
  {
    name: "orange",
    quantity: 7,
    price: 10,
  },
];

calculateTotalPrice(products, "banana");
