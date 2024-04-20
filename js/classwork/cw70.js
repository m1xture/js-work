const url = "https://66238d403e17a3ac846f82ae.mockapi.io/api/v1/products";

function renderProducts(array) {
  const listEl = document.querySelector(".products");
  array.forEach((product) => {
    listEl.insertAdjacentHTML(
      "afterbegin",
      `<li class="products__item">
      <h2>${product.name + product.emoji}</h2>
      <p>${product.description}</p>
      <p>Price - ${product.price}</p>
      <p>Quntity - ${product.quantity}</p>
    </li>`
    );
  });
}

async function getAndRenderProducts() {
  const resp = await fetch(url);
  const data = await resp.json();
  renderProducts(data);
}

getAndRenderProducts();

async function addProduct(obj) {
  try {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });
  } catch (err) {
    console.log(err);
  }
}

document
  .querySelector("[data-add-form]")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      emoji: e.target.emoji.value,
      description: e.target.description.value,
      price: e.target.price.value,
      quantity: e.target.quantity.value,
    };
    await addProduct(formData);
  });
