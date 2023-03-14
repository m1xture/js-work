// const min = 0;
// const max = 100;
// const res = Math.round(Math.random() * (max - min) + min);
// console.log(res);


//! Interesting Method 


const colors = ["tomato", "green", "skyblue", "teal"];
const min = 0;
const max = colors.length - 1;
const index = Math.round(Math.random() * (max - min) + min)
const color = colors[index]
console.log(color);
document.body.style.backgroundColor = color;