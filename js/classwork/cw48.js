// import products from "./data.js";

// const productsList = document.querySelector("[data-products]");

// const makeproduct = ({ price, name, description }) => {
//   const productArticle = document.createElement("article");
//   const productName = document.createElement("h3");
//   productName.textContent = name;

//   const productDescription = document.createElement("p");
//   productDescription.textContent = description;

//   const productPrice = document.createElement("p");
//   productPrice.textContent = price;
//   productArticle.append(productName, productDescription, productPrice);
//   return productArticle;
// };

// const productsBox = products.map(makeproduct);
// console.log(productsBox);

// productsList.append(...productsBox);

//todo: 32

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

const buttonsList = document.querySelector("[data-buttons]");

const createBtn = () => {
    const btnElem = document.createElement('button');
    btnElem.type = "button";
    btnElem.textContent = "";
    console.log(btnElem);
};

createBtn();


const btnsBox = colorPickerOptions.map(createBtn);