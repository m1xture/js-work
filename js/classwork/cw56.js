// const json = `{
//         "nickname": "CuteNinja54",
//         "hours": 89
//  }
//  `;
// const objJson = JSON.parse(json);
// console.log(objJson);

// const object = {
//         nickname: "SuperSniper09",
//         hours: 201.5,

// };

// const jsonToObj = JSON.stringify(object);
// console.log(jsonToObj);

//todo: #1

// let xhr = new XMLHttpRequest();
// let objArr = [];
// xhr.overrideMimeType("application/json");
// xhr.open("GET", "../colorpicker.json", true);

// xhr.onreadystatechange = () => {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     objArr = JSON.parse(xhr.responseText);
//     console.log(objArr);
//     showDiv();
//   }
// };
// xhr.send(null);

const divEl = document.createElement("div");
divEl.style.backgroundColor = "red";
document.body.append(divEl);

function showDiv() {
  objArr.forEach(({ hex }) => {
    const div = document.createElement("div");
    div.style.backgroundColor = HEX;
    document.body.append(div);
  });
}

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((res) => {
          console.log(res);
          console.log(res);
  });
