//todo: _.tail(array) #1

console.log(_.tail([90, 78, -915, 59, 0]));
//? Result: [78, -915, 59, 0]


//todo: _.sample(Array/Object) #2

const arrSample = ['node.js', 'react', 'vue.js', 'python'];
const objSample = {
    age: 25,
    city: 'London',
    status: 'pro',
};

console.log(_.sample(arrSample));
//? Result: Any element from array

console.log(_.sample(objSample));
//? Result: Any value from object

//todo: _.shuffle(Array/Object) #3

console.log(_.shuffle(arrSample));
//? Result: The array in any order

console.log(_.shuffle(objSample));
//? Result: The object's values in any order

//todo: _.negate(Callback) #4

const isBigger = (elem) => {
    return elem.length > 5;
}

console.log(
    _.filter(arrSample, _.negate(isBigger))
);
//? Result: ['react']

//todo: _.pull(Array, values) #5
//! This method mutates array

const languages = ['java', 'ruby', 'python', 'java', 'pascal', 'fortan', 'ruby', 'javascript', 'go'];
console.log(_.pull(languages, 'ruby', 'java'));
//? Result: ['python', 'pascal', 'fortan', 'javascipt', 'go']

//todo: _.last(Array) #6

console.log(_.last(languages));
//? Result: 'go'

//todo: _.fromPairs(Array) #7

const room = {
    width: 4,
    length: 3,
    heigt: 4,
};

const entries = Object.entries(room);

console.log(_.fromPairs(entries));
//? Result: { width: 4, length: 3, height: 4 }

//todo: _.initial(Array) #8

console.log(_.initial([78, "lalala", 89, -1, [null, true]]));
//? Result: [78, 'lalala', 89, -1]

//todo: _.head(Array) #9

console.log(_.head(["cook", "look", "book"]));
//? Result: 'cook'

//todo: _.intersection([Arrays]) #10

const array1 = [72, 89, 0];
const array2 = ['', 0, null];

console.log(_.intersection(array1, array2));
//? Result: [0]