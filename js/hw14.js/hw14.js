const myObject = {
    name: 'La-la-la',
    age: 13,
    city: "Odessa",
    occupation: "IT",
};
console.log(myObject); //? object
console.log(myObject.age); //? 13
console.log(myObject.lalala); //? undefined

//todo: #2

const basket = [
    {
        name: "banana",
        quantity: 3,
        isPopular: true,
        whoPicked: undefined,
        pit: null,
        vitamines: ["sucroze", "B1", "C"],
        producer: {
            name: "tree",
            type: "banana",
        }
    },
    {
        name: "apple",
        quantity: 16,
        isPopular: true,
        whoPicked: undefined,
        pit: null,
        vitamines: ["Ferum", "B1", "C"],
        producer: {
            name: "tree",
            type: "apple",
        }
    },
    {
        name: "pear",
        quantity: 10,
        isPopular: true,
        whoPicked: undefined,
        pit: null,
        vitamines: ["А", "B", "C"],
        producer: {
            name: "tree",
            type: "pear",
        }
    }
];
console.log(basket);
console.log(basket[1]);
console.log(basket[1].name);
console.log(basket[1].producer.type);

