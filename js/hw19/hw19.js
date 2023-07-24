const array2 = [
  "apple",
  "banana",
  "orange",
  "banana",
  "grape",
  "apple",
  "kiwi",
];

const editStr = (arrayOfStr) => {
  const mapArray = arrayOfStr.map((str) => {
    const findLastIndexOfStr = str.length - 1;
    const slicedStr = str.slice(0, 1);
    const slicedStr2 = str.slice(findLastIndexOfStr, findLastIndexOfStr + 1);
    // console.log(slicedStr2);
    return slicedStr + slicedStr2;
  });
  console.log(mapArray);
  return mapArray;
};

editStr(array2);

//todo: #2

// У вас є масив обʼєктів user, і у кожного
// з обʼєктів є name, surname та id.
// Напишіть код, який створить ще один масив
// обʼєктів з параметрами id й fullName, де fullName
// – складається з name та surname.
const peoples = [
  { name: "John", surname: "Doe", age: 32, occupation: "programmer" },
  { name: "Jane", surname: "Lee", age: 26, occupation: "teacher" },
  { name: "Mike", surname: "Watson", age: 42, occupation: "engineer" },
  { name: "Emily", surname: "Brad", age: 29, occupation: "designer" },
  { name: "Emily", surname: "Brad", age: 29, occupation: "designer" },
];


const idFullnamePeople = peoples.map((person) => {
  person.id = String(Math.round(Math.random() * (999 - 1) + 1));
  person.fullname = person.name + " " + person.surname;
  return person;
});

console.log(idFullnamePeople);
