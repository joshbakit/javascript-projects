const body = document.querySelector("body");
const greenBtn = document.querySelector(".green");
const brownBtn = document.querySelector(".brown");
const creamBtn = document.querySelector(".cream");
const avocadoBtn = document.querySelector(".avocado");
const coffeeBtn = document.querySelector(".coffee");
const darkBtn = document.querySelector(".dark");

let currentTheme = body.getAttribute("data-theme");
body.setAttribute("data-theme", currentTheme);

function updateTheme(theme) {
  currentTheme = theme;
  body.setAttribute("data-theme", currentTheme);
}

greenBtn.addEventListener("click", () => {
  console.log(currentTheme);
  updateTheme("green");
});

brownBtn.addEventListener("click", () => {
  console.log(currentTheme);
  updateTheme("brown");
});
creamBtn.addEventListener("click", () => {
  console.log(currentTheme);
  updateTheme("cream");
});
avocadoBtn.addEventListener("click", () => {
  console.log(currentTheme);
  updateTheme("avocado");
});
coffeeBtn.addEventListener("click", () => {
  console.log(currentTheme);
  updateTheme("coffee");
});
darkBtn.addEventListener("click", () => {
  console.log(currentTheme);
  updateTheme("dark");
});
