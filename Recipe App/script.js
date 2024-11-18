const recipeList = document.querySelector(".recipe-list");
const recipeDetails = document.querySelector(".recipe-details");

async function fetchRecipeData() {
  try {
    const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json();
    console.log(data.recipes);
    displayRecipe(data.recipes);
  } catch (error) {
    console.log(error);
  }
}

function displayRecipe(data) {
  recipeList.innerHTML = data
    .map((item) => {
      return `
            <div class="recipe-card" key=${item.id}>
                <img src=${item.image} alt=${item.name} />
            <div class="recipe-content">
                <h2 class="recipe-name">${item.name}</h2>
                <p class="ingredients">Ingredients: ${item.ingredients}</p>
                <p class="instructions">Instructions: ${item.instructions}</p>
                </div>
            </div>
        `;
    })
    .join("");
}

fetchRecipeData();
