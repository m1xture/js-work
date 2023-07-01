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



//todo: bank


const bankAccount = {
  balance: 500000,
};

const account = {
  balance: 0,
  history: [],
  addMoney(amount) {
    this.balance += amount;
    this.history.push(`Add ${amount} to the balance`)
    console.log(`You have ${this.balance} in ur balance`);
    return this.balance;
  },
  withdrawMoney(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      this.history.push(`Withdraw ${amount} from balance`);
      console.log(`You have ${this.balance} in ur balance. You have just withdraw ${amount}$`);
    } else {
      console.log('Too big amount or not enough money on balance');
    }
    return this.balance;
  },
  viewHistory() {
    for (const event of this.history) {
      console.log(event);
    };
    return this.history;
  },
  takeloan(amount, time) {
    if (amount <= bankAccount.balance && time <= 1095) {
      bankAccount.balance -= amount;
      this.balance += amount;
      this.history.push(`Give a loan for ${amount} for ${time} days`);
      console.log(`You successfully took a loan for ${amount} for ${time} days. Do not forget to return the loan!`);
      return this.balance;
    } else if (amount === undefined || time === undefined) {
      console.log("You forgot to write amount of loan or time");
    }
    else if (time > 1095) {
      console.log("it is a very long term for our bank. Please, choose something earlier");
      return this.balance;
    } else if (amount > bankAccount.balance) {
      console.log("The sum is too big!");
      return this.balance;
    }
  }
}

const viewBalance = document.querySelector("[data-viewBalance]");


account.addMoney(1000);
account.withdrawMoney(1);
account.viewHistory();
account.takeloan(50, 6);
account.viewHistory();