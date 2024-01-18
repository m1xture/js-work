// const db = {
//   title: "Webstudio",
//   items: ["Studio", "Porfolio", "Contacts"],
// };

// const source = document.querySelector("#menu-template").innerHTML.trim();
// const template = Handlebars.compile(source);

// const markup = template(db);
// console.log(markup);

// document.querySelector("[data-header]").innerHTML = markup;

import Handlebars from "../../node_modules/handlebars";
import template from "../template/menuTemplate.hbs";

const menuData = {
  title: "Webstudio",
  items: ["Studio", "Porfolio", "Contacts"],
};

const markup = template(menuData);
document.querySelector('[data-header]').innerHTML = markup;
