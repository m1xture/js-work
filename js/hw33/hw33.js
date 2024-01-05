const formElem = document.querySelector("form");

function addSidebar() {
  return (document.body.innerHTML =
    "<button type=button class=sidebar__btn>Delete all info about me</button><button type=button>View info about me</button>");
}

formElem.addEventListener("submit", (e) => {
  e.preventDefault();
  const obj = {
    firstName: e.currentTarget.fname.value,
    lastName: e.currentTarget.lname.value,
    age: e.currentTarget.age.value,
    course: e.currentTarget.course.value,
    faculty: e.currentTarget.faculty.value,
    courses: e.currentTarget.courses.value.split(" "),
  };
  let arr = [];
  if (localStorage.length !== 0) {
    // arr = [localStorage.getItem("student"), JSON.stringify([obj])];
    const parsedArr = JSON.parse(localStorage.getItem("student"));
    console.log(parsedArr);
    parsedArr.push(obj);
    arr = parsedArr;
    console.log(arr);
    console.log(parsedArr);
  } else {
    // arr = [JSON.stringify(obj)];
    arr = [obj];
  }

  console.log(arr);
  localStorage.setItem("student", JSON.stringify(arr));
  formElem.classList.add("is-hidden");
  document.body.style.backgroundColor = "#fff";
  document.querySelector("table").classList.add("w90");
  document.querySelector("#table").innerHTML = `<thead>
  <tr>
    <th>Name</th>
    <th>Last name</th>
    <th>Age</th>
    <th>Course</th>
    <th>Faculty</th>
    <th>Courses</th>
  </tr>
  </thead>
  <tbody></tbody>
  `;

  arr.map((elem) => {
    document.querySelector("tbody").insertAdjacentHTML(
      "afterbegin",
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

  // console.log(JSON.parse(localStorage.getItem("student")));
});

// localStorage.setItem("arr", JSON.stringify(["lala", 2, null]));
