//todo: Отримати масив імен всіх користувачів (поле name).

const findNames = (coll) => {
  const names = coll.map((obj) => obj.name);
  console.log(names);
};

const nnms = [{ name: "lalala" }, { name: "kls" }, { name: "ksdbh" }];

findNames(nnms);

//todo: Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).

const eyeColorFind = (collection, eyesColor) => {
  const BlueEyes = collection.filter((eyes) => eyes.eyeColor === eyesColor);
  console.log(BlueEyes);
  return BlueEyes;
};

const ab = [{ eyeColor: "blue" }, { eyeColor: "red" }, { eyeColor: false }];

eyeColorFind(ab, "blue");

//todo: gender

const findSomePeople = (collection, gender) => {
  const somePeople = collection.filter((person) => person.gender === gender);
  console.log(somePeople);
  const ArrayOfNames = somePeople.map((person) => person.name);
  return ArrayOfNames;
};

const wqer = [
  {
    name: "Egorov",
    gender: "female",
  },
  {
    name: "e",
    gender: undefined,
  },
  {
    name: "John",
    gender: "male",
  },
];

findSomePeople(wqer, "male");

//todo: #4 isActive

const findInactivePeople = (array) => {
  const inactivePeople = array.filter((person) => person.isActive === false);
  console.log(inactivePeople);
  return inactivePeople;
};

const people = [{ isActive: false }, { isActive: true }, { isActive: false }];

findInactivePeople(people);

//todo: #5 Отримати користувача (не масив) по email (поле email, він унікальний).

const users = [
  { name: "Vanya", email: "ivan@gamail.com", age: 15 },
  { name: "John", email: "lalala@gmal.com", age: 65 },
  { name: "KOlya", email: "doctor12345@mail.com", age: 7 },
  { name: "met25", email: "matvii.savula@gmail.com", age: 13 },
];

const findSomeone = (array, email) => {
  const foundPerson = array.find((person) => person.email === email);
  console.log(foundPerson);
  return foundPerson;
};

findSomeone(users, "doctor12345@mail.com");

//todo: #6 Отримати масив користувачів, які потрапляють у
//todo: вікову категорію від min до max років(поле age).

const findPeopleByAge = (arrayOfUsers, minAge, maxAge) => {
  const foundPeopleByAge = arrayOfUsers.filter(
    person => person.age > minAge && person.age < maxAge
  );
  console.log(foundPeopleByAge);
  return foundPeopleByAge;
};

findPeopleByAge(users, 50, 90);