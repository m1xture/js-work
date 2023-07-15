//todo: Отримати масив імен всіх користувачів (поле name).

const findNames = (coll) => {
  const names = coll.map((obj) => obj.name);
  console.log(names);
};

const nnms = [{ name: "lalala" }, { name: "kls" }, { name: "ksdbh" }];

findNames(nnms)

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
