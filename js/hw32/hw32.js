document.querySelector("#btn").addEventListener("click", (e) => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((resp) => resp.json())
      .then((resp) => {
          console.log(resp);
        document.querySelector('.subtitle').textContent = resp.title;
    });
});

