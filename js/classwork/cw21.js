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

const checkNumbers = function (array, callback) {
    let numbersMoreThanTen = [];
    for (let element of array) {
        const test = callback(element)
        if(test) {
            numbersMoreThanTen.push(element)
        }
    };
    return numbersMoreThanTen;
};

function callback (num) {
    return num > 10;
};

function callbackCheck2 (num) {
    return num < 10;
}

const array = [324, 1, 21, 4, 9, -12, -2, 5, 878642];
const r1 = checkNumbers(array, callback);
console.log(r1);


// const array2 = [24, 234, -9, -11, 0, 67];