// const fruits = ["apple", "orange", "melon"];
// console.log(fruits);
// console.log(...fruits);

// const vegetables = ["potato", "tomato", "cucumber"];
// const basket = [...vegetables, ...fruits]; 
// console.log(basket + "ball");


// const numbers = [10, ...[12, 12, 322], "Lalalala"];



// //? # css copy))

const potato = {
    type1: "vegetable",
    quantity1: 9,
    weight1: 5,
};

const orange = {
    type2: "fruit",
    quantity2: 21,
    taste2: true,
};

const { type1, quantity1, weight1 } = potato;

const { type2, quantity2, taste2 } = orange;

// const res = Object.assign({}, orange, potato);
// console.log(res);

// const res2 = { ...potato, ...orange };

const a = {
    x: 0,
    y: 2,
};
const b = {
    x: 3,
    z: 49
};
const c = {
    x: 5,
    j: 10,
    z: 15,
    ...a,
    ...b
};
console.log(c);