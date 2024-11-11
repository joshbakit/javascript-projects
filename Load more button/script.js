const productContainer = document.querySelector(".container");
const loadMoreButton = document.querySelector(".load-more-product");
let currentPage = 0;

//fetch product api
async function fetchProducts(getCurrentPage) {
  try {
    const response = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${
        getCurrentPage === 0 ? 0 : getCurrentPage * 10
      }`,
      {
        method: "GET",
      }
    );
    const result = await response.json();
    console.log(result);
    if (result && result.products) {
      displayProducts(result.products);
    }
  } catch (error) {
    console.log(error);
  }
}
fetchProducts(currentPage);

function displayProducts(products) {
  console.log(products);
  productContainer.innerHTML = products
    .map(
      (item) => `
    <div class="product-card">
    <div class="figure">
      <img class="product-img" src="${item.thumbnail}" alt="${item.title}" />
    </div> 
      <div class="product-content">
        <div class="product-title">${item.title}</div>
        <div class="product-description">${item.description}</div>
        <div class="product-price">${item.price}</div>
      </div>
    </div>
  `
    )
    .join("");
}

loadMoreButton.addEventListener("click", () => {
  fetchProducts((currentPage += 1));
});
