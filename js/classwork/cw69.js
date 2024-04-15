const refs = {
  postsListEl: document.querySelector("[data-posts-list]"),
  buttonsListEl: document.querySelector("[data-controls-list]"),
};
const parameters = {
  perPage: 5,
  page: 1,
};

async function getAllPosts(perPage) {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await resp.json();
  return Math.ceil(data.length / perPage);
}

function renderPosts(postsArray) {
  postsArray.forEach(({ title, body, id }) =>
    refs.postsListEl.insertAdjacentHTML(
      "beforeend",
      `<li class="post">
       <h2 class="post__title">${title}</h2>
        <p class="post__description">${body}</p>
        <p class="post__text">${id}</p>
       </li>`
    )
  );
}

function renderButtons(num) {
  for (let i = 1; i < num + 1; i++) {
    refs.buttonsListEl.insertAdjacentHTML(
      "beforeend",
      `<li class="controls__item" data-id=${i}><button class="controls__button" type="button">${i}</button></li>`
    );
  }
}

async function getAndRenderThePosts({ page, perPage }) {
  const params = new URLSearchParams({
    _limit: perPage,
    _page: page,
  });
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?${params}`
  );
  const posts = await response.json();
  refs.postsListEl.innerHTML = "";

  renderPosts(posts);
}

document.addEventListener("DOMContentLoaded", async () => {
  getAndRenderThePosts(parameters);

  const postsQuantity = await getAllPosts(parameters.perPage);
  renderButtons(postsQuantity);
});
refs.buttonsListEl.addEventListener("click", (e) => {
  if (e.target.nodeName === "LI") {
    parameters.page = Number(e.target.id);
    getAndRenderThePosts(parameters);
    return;
  }
  if (e.target.nodeName === "BUTTON") {
    parameters.page = Number(e.target.textContent);
    getAndRenderThePosts(parameters);
    return;
  }
});
