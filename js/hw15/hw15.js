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
