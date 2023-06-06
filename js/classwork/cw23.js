//todo: write a func

const onHandlerSalary = function (worker = "", baseSalary = 0) {
    let currentSalary = baseSalary;
    return {
        showSalary(salary) {
            return `${worker}'s salary is - ${salary}`;
        },
        addSalary(salary) {
            if (salary > 20001) {
                // console.log("Sorry, reality is hard");
                return "Sorry, reality is hard";
            };
            currentSalary += salary;
            return currentSalary;
        }
    };
};

const romanSalary = onHandlerSalary("Roman", 5000);
console.log(romanSalary.showSalary(19000));
console.log(romanSalary.addSalary(25000));

//todo: 

//?Was
const showInfo1 = function (message) {
    return message;
};

//?Is 
const showINFO2 = message => message;


//! was
function sumNums1(num1, num2, num3) {
    return num1 + num2 + num3;
};

//! is
// const sumNums2 = (num1, num2, num3) => num1 + num2 + num3;



// function sumNums(num1, num2, num3) {
//     if (num1 > 10 && num2 > 10) {
//         return "Ur nums are more than ten";
//     } else {
//         return num1 + num2 + num3;
//     }
// };

// const sumNums3 = (num1, num2, num3) => num1 > 10 && num2 > 10 ? "Ur nums are more than ten" : num1 + num2 + num3;


//todo:



// const findNum = function(...numArr) {
//     let minNumber = numArr[0];
//     for (let i = 0; i < numArr.length; i++) {
//         if (minNumber > numArr[i]) {
//             minNumber = numArr[i];
//         };
//     };
//     return minNumber;
// };
// findNum(2,2,2,2,2,2,2,22,2);
// console.log(findNum);

const findNum = (...numArr) => {
    let minNumber = numArr[0];
    for (let i = 0; i < numArr.length; i++) {
        if (minNumber > numArr[i]) {
            minNumber = numArr[i];
        };
    };
    return minNumber;
};

console.log(findNum(98, 9, -1));


// function deleteCard (cardsArray, cardToDelete) {
//     return cardsArray.splice(cardsArray.indexOf(cardToDelete), 1);
// };

const deleteCard = (cardsArray, cardToDelete) => cardsArray.splice(cardsArray.indexOf(cardToDelete), 1);

// function appendCard (cardsArray, cardToAppend) {
//     const cardsArrayLastIndex = cardsArray.length;
//     const cardToSplice = cardsArray.splice(
//           cardsArrayLastIndex,
//           0,
//           cardToAppend
//         );
//         return cardsArray;
// };

const appendCard = (cardsArray, cardToAppend) => {
    const cardToSplice = cardsArray.splice(
        cardsArray.length,
        0,
        cardToAppend
    );
    return cardsArray;
};

const updateCard = (cardsArray, cardToUpdate) => {
    
}