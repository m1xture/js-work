// //todo: Отложенный вызов

// const callback = function () {
//     console.log('This func will do smth after 5 sec');
// };
// setTimeout(callback, 5000)

//todo: using callback while working with back-end (http запросы)

// const responseInfo = function (response) {
//     console.log(response);
//     console.log('Function was completed successfully after response from backend');
// };

// //?API URL: https://pokeapi.co/api/v2/pokemon
// fetch("https://pokeapi.co/api/v2/pokemon")
//     .then(response => response.json())
//     .then(responseInfo);

//todo: 

const checkElems = function (array, callback) {
    let elemsArr = [];
    for (let element of array) {
        const test = callback(element)
        if (test) {
            elemsArr.push(element)
        }
    };
    return elemsArr;
};

function callback(num) {
    return num > 10;
};

function callbackCheck2(num) {
    return num < 10;
}

const callback3 = function (elem) {
    return elem.name === "banana" || elem.name === "orange";
}

const array = [324, 1, 21, 4, 9, -12, -2, 5, 878642];
const r1 = checkElems(array, callback);
console.log(r1);


// const array2 = [24, 234, -9, -11, 0, 67];
const r2 = checkElems(array, callbackCheck2);
console.log(r2);

const fruits = [
    {
        name: 'banana',
        quantity: 6
    },
    {
        name: 'coconut',
        quantity: 8
    },
    {
        name: 'apple',
        quantity: 11,
    }
];

const box = checkElems(fruits, callback3);
console.log(box);
