// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://127.0.0.1:${
  import.meta && import.meta.env && import.meta.env.REACT_APP_JSON_SERVER_PORT
    ? import.meta.env.REACT_APP_JSON_SERVER_PORT
    : 9090
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
let mainSection = document.getElementById("data-list-wrapper");
let getRecipesBtn = document.getElementById("fetch-recipes");
getRecipesBtn.addEventListener("click", fetchRecipes);

let totalResult = document.querySelector(".total-results");
const urlAllRecipes = `${baseServerURL}/recipes`;

let currentPage = 1;
let loading = false;

function fetchRecipes() {
  loading = true;
  fetch(`${baseServerURL}/recipes?_page=${currentPage}&_limit=5`)
    .then((res) => res.json())
    .then((data) => {
      // timeout for loading simulation
      setTimeout(() => {
        data.forEach(createRecipeCard);
      }, 1000);
      totalResult.innerText = currentPage * 5;
      currentPage++;
      loading = false;
    })
    .catch((error) => {
      console.error("Error fetching recipes:", error);
      loading = false;
    });
}

function loadMoreRecipes() {
  const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 5 && !loading) {
    fetchRecipes();
  }
}

function createRecipeCard(recipe) {
  const recipeElement = document.createElement("div");
  recipeElement.setAttribute("class", "recipe-card");
  const imgContainer = document.createElement("div");
  imgContainer.setAttribute("class", "recipe-image");
  const recipeImg = document.createElement("img");
  recipeImg.src = recipe.image;
  recipeImg.alt = recipe.name;
  imgContainer.append(recipeImg);
  const recipeDetails = document.createElement("div");
  recipeDetails.setAttribute("class", "recipe-details");
  const recipeName = document.createElement("h2");
  recipeName.setAttribute("class", "recipe-name");
  recipeName.innerText = recipe.name;
  const recipePrice = document.createElement("p");
  recipePrice.setAttribute("class", "recipe-price");
  recipePrice.innerText = recipe.price;
  recipeDetails.append(recipeName, recipePrice);
  recipeElement.append(imgContainer, recipeDetails);
  mainSection.append(recipeElement);
}
// Event listener for scroll
window.addEventListener("scroll", loadMoreRecipes);

let recipesArray = [];
