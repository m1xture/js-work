const fs = require('fs');
const formElem = document.querySelector("form");
formElem.addEventListener("submit", (e) => {
  e.preventDefault();
  const fileContent = fs.readFileSync(filePath, "utf-8");
  console.log(fileContent);
});
