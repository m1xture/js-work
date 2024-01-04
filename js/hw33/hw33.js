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
    course: e.currentTarget.course.value,
    faculty: e.currentTarget.faculty.value,
    courses: e.currentTarget.courses.value.split(" "),
  };
  let arr = [];
  if (localStorage.length !== 0) {
    arr = [localStorage.getItem("student"), JSON.stringify(obj)];
  } else {
    arr = [JSON.stringify(obj)];
  }

  // console.log(obj.courses);
  localStorage.setItem("student", arr);
  formElem.classList.add("is-hidden");
});
