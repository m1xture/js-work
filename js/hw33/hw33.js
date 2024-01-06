const formElem = document.querySelector("form");
const btnsListEl = document.querySelector(".btns__list");
const clearBtnEl = document.querySelector("[data-clear]");
const formBlockEl = document.querySelector(".block-form");

function addSidebar() {
  return (document.body.innerHTML =
    "<button type=button class=sidebar__btn>Delete all info about me</button><button type=button>View info about me</button>");
}

function loadTable() {
  document.querySelector("tbody").innerHTML = "";
  document.body.style.backgroundColor = "#fff";
  btnsListEl.classList.remove("is-hidden");
  document.querySelector("table").classList.add("w90");
  JSON.parse(localStorage.getItem("student")).map((elem) => {
    document.querySelector("tbody").insertAdjacentHTML(
      "beforeend",
      `<tr>
    <td>${elem.firstName}</td>
    <td>${elem.lastName}</td>
    <td>${elem.age}</td>
    <td>${elem.course}</td>
    <td>${elem.faculty}</td>
    <td>${elem.courses}</td>
    </tr>`
    );
  });
}

formElem.addEventListener("submit", (e) => {
  e.preventDefault();
  const obj = {
    firstName: e.currentTarget.fname.value,
    lastName: e.currentTarget.lname.value,
    age: e.currentTarget.age.value,
    course: e.currentTarget.course.value,
    faculty: e.currentTarget.faculty.value,
    courses: e.currentTarget.courses.value,
  };
  let arr = [];
  if (localStorage.length !== 0) {
    // arr = [localStorage.getItem("student"), JSON.stringify([obj])];
    const parsedArr = JSON.parse(localStorage.getItem("student"));
    // console.log(parsedArr);
    parsedArr.push(obj);
    arr = parsedArr;
    // console.log(arr);
    // console.log(parsedArr);
  } else {
    // arr = [JSON.stringify(obj)];
    arr = [obj];
  }

  // console.log(arr);
  localStorage.setItem("student", JSON.stringify(arr));
  loadTable();
  formBlockEl.style.display = "none";

  // formElem.classList.add("is-hidden");
  // document.body.style.backgroundColor = "#fff";
  // document.querySelector("table").classList.add("w90");
  // document.querySelector("#table").innerHTML = `<thead>
  // <tr>
  //   <th>Name</th>
  //   <th>Last name</th>
  //   <th>Age</th>
  //   <th>Course</th>
  //   <th>Faculty</th>
  //   <th>Courses</th>
  // </tr>
  // </thead>
  // <tbody></tbody>
  // `;

  // arr.map((elem) => {
  //   document.querySelector("tbody").insertAdjacentHTML(
  //     "beforeend",
  //     `<tr>
  //   <td>${elem.firstName}</td>
  //   <td>${elem.lastName}</td>
  //   <td>${elem.age}</td>
  //   <td>${elem.course}</td>
  //   <td>${elem.faculty}</td>
  //   <td>${elem.courses}</td>
  //   </tr>`
  //   );
  // });
  // btnsListEl.classList.remove("is-hidden");
  // clearBtnEl.addEventListener("click", () => {
  //   document.querySelector("#table").innerHTML = "";
  //   clearBtnEl.insertAdjacentHTML(
  //     "afterend",
  //     "<p data-msg>Data was deleted</p>"
  //   );
  //   setTimeout(() => {
  //     document.querySelector("[data-msg]").remove();
  //   }, 5000);
  //   return localStorage.clear();
  // });
  // document.body.style.display = "block";
  // console.log(JSON.parse(localStorage.getItem("student")));
});

// localStorage.setItem("arr", JSON.stringify(["lala", 2, null]));

document.addEventListener("DOMContentLoaded", loadTable);

document.querySelector("[data-add]").addEventListener("click", () => {
  formBlockEl.style.display = "flex";
});

document.querySelector("[data-edit]").addEventListener("click", () => {
  formBlockEl.style.display = "flex";

  const index = JSON.parse(localStorage.getItem("student")).length;
  let options = "<option></option>";
  for (let i = 1; i <= index; i++) {
    options += `<option value="${i}">${i}</option>`;
  }
  document
    .querySelector("input[name=fname]")
    .insertAdjacentHTML(
      "beforebegin",
      `<select id="student_index">${options}</select>`
    );

  let click = 0;
  
  document.querySelector("#student_index").addEventListener("change", (e) => {
    click++;
    const selectedIndex = Number(e.currentTarget.value);
    const values = Object.values(
      JSON.parse(localStorage.getItem("student"))[selectedIndex - 1]
    );
    for (let i = 0; i < 6; i++) {
      formElem[i + 1].value = values[i];
    }
    console.log(values);
    formElem.removeEventListener("submit"); //! err

    // console.log(formElem);
  });
});

console.log(formElem[0]);
