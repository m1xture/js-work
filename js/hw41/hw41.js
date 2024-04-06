const refs = {
  listElem: document.querySelector("[data-list]"),
  loadMoreBtnEl: document.querySelector("[data-btn]"),
  searchInputEl: document.querySelector("[data-search]"),
};
const limitImgs = 100;
function renderCards(array) {
  array.forEach(({ webformatURL, tags, user, userImageURL, likes, comments }) =>
    refs.listElem.insertAdjacentHTML(
      "beforeend",
      `<li class="gallery__item">
           <div class="user">
    <img src=${userImageURL} alt="user avatar" class="user__avatar" />
    <p class="user__text">${user}</p>
  </div>
  <div class="post"><img src=${webformatURL} alt="post photo" class="post__img" /></div>
  <div class="bottom">
    <p class="bottom__tags">${tags}</p>
    <ul class="reactions">
      <li class="reactions__item">
        <img src="../imgs/heart.svg" alt="heart icn" />
        
        <p class="reactions__text">${likes}</p>
      </li>
      <li class="reactions__item">
        <img src="../imgs/comment.svg" alt="lala" />
        
        <p class="reactions__text">${comments}</p>
      </li>
      <li class="reactions__item">
        <img src="../imgs/bookmark.svg" alt="bookmark icon" />
       
      </li>
    </ul>
  </div>
        </li>`
    )
  );
}
async function loadImages(i) {
  const params = new URLSearchParams({
    editors_choice: true,
    safesearch: true,
    key: "43028857-0f1ea2a07ec80ac5b3d9eeb9b",
    per_page: 5,
    page: i,
  });

  //? with then() method

  // fetch(`https://pixabay.com/api/?${params}`)
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw new Error(response.status);
  //     }
  //     return response.json();
  //   })
  //   .then((data) => {
  //     renderCards(data.hits);
  //   })
  //   .catch((err) => console.log(err));

  //? async/await method

  try {
    const resp = await fetch(`https://pixabay.com/api/?${params}`);
    const data = await resp.json();
    renderCards(data.hits);
  } catch (err) {
    console.log(err);
  }
}

let page = 1;
let searchedPages = 0;
document.addEventListener("DOMContentLoaded", () => {
  const latestPages = localStorage.getItem("page");
  if (latestPages) {
    for (let i = 1; i <= latestPages; i++) {
      page = i;
      loadImages(i);
    }
  } else {
    loadImages(page);
  }
});

refs.loadMoreBtnEl.addEventListener("click", () => {
  if (searchedPages === 0) {
    page++;
    loadImages(page);
    localStorage.setItem("page", page);
    if (page * 5 === limitImgs) {
      refs.loadMoreBtnEl.remove();
    }
  } else {
    searchedPages++;
    loadSearchedImgs(refs.searchInputEl.value, searchedPages);
  }
});

async function loadSearchedImgs(query, i) {
  try {
    const params = new URLSearchParams({
      q: query,
      safesearch: true,
      key: "43028857-0f1ea2a07ec80ac5b3d9eeb9b",
      per_page: 5,
      page: i,
    });
    const resp = await fetch(`https://pixabay.com/api/?${params}`);
    const data = await resp.json();
    if (i === 1) refs.listElem.innerHTML = "";
    renderCards(data.hits);
  } catch (err) {
    console.log(err);
  }
}

refs.searchInputEl.addEventListener(
  "input",
  _.debounce((evt) => {
    console.log("bonk");
    if (evt.target.value === "" || evt.target.value.length >= 100) {
      searchedPages = 0;
      page = 1;
      refs.listElem.innerHTML = "";
      loadImages(page);
      return;
    }
    searchedPages = 1;

    loadSearchedImgs(evt.target.value, searchedPages);
  }, 500)
);
