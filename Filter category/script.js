const btnContainer = document.querySelector(".button-container");
const categoryContainer = document.querySelector(".category-container");

const categoriesList = [
  {
    id: "Men",
    label: "Men Shirt 1",
  },
  {
    id: "Men",
    label: "Men Shirt 2",
  },
  {
    id: "Men",
    label: "Men Shirt 3",
  },
  {
    id: "Men",
    label: "Men Shirt 4",
  },
  {
    id: "Men",
    label: "Men Shirt 5",
  },
  {
    id: "Women",
    label: "Women Shirt 1",
  },
  {
    id: "Women",
    label: "Women Shirt 2",
  },
  {
    id: "Women",
    label: "Women Shirt 3",
  },
  {
    id: "Women",
    label: "Women Shirt 4",
  },
  {
    id: "Women",
    label: "Women Shirt 5",
  },
  {
    id: "Kids",
    label: "Kids Shirt 3",
  },
  {
    id: "Kids",
    label: "Kids Shirt 4",
  },
  {
    id: "Kids",
    label: "Kids Shirt 5",
  },
  {
    id: "Kids",
    label: "Kids Shirt 10",
  },
  {
    id: "Kids",
    label: "Kids Shirt 20",
  },
];

const categoriesButton = ["All", "Men", "Women", "Kids"];

function createcategoryButton() {
  categoriesButton.forEach((category) => {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = category;
    buttonElement.classList.add("filter-button");
    buttonElement.setAttribute("data-filter", category);

    btnContainer.appendChild(buttonElement);
  });
}
createcategoryButton();

function createCategoryContainer() {
  categoriesList.forEach((contentItem) => {
    const cardItem = document.createElement("div");
    cardItem.classList.add("card", contentItem.id);
    cardItem.textContent = contentItem.label;

    categoryContainer.appendChild(cardItem);
  });
}

createCategoryContainer();

const filterButton = document.querySelectorAll(".filter-button");
const card = document.querySelectorAll(".card");

function filterCardsByCategory(extractCurrentCategory, card) {
  card.forEach((item) => {
    const isShowAllCard = extractCurrentCategory.toLowerCase() === "all";
    const isItemFiltered = !item.classList.contains(extractCurrentCategory);

    if (isItemFiltered && !isShowAllCard) {
      item.classList.add("hide");
    } else {
      item.classList.remove("hide");
    }
  });
}

filterButton.forEach((singleFilterButton) => {
  singleFilterButton.addEventListener("click", () => {
    const extractCurrentCategory = singleFilterButton.dataset.filter;
    console.log(extractCurrentCategory);

    filterCardsByCategory(extractCurrentCategory, card);
  });
});
