const stars = document.querySelectorAll(".fa-star-o");
const ratingValue = document.querySelector(".rating-value");

let currentRating = 0;

stars.forEach((starItem, index) => {
  starItem.dataset.rating = index + 1;
  starItem.addEventListener("mouseover", handleMouseOver);
  starItem.addEventListener("click", handleClick);
  starItem.addEventListener("mouseleave", handleMouseLeave);
});

function handleMouseOver(e) {
  const currentRatingValue = e.target.dataset.rating;
  if (!currentRatingValue) return;
  else handleUpdateRatingState(currentRatingValue);
}

function handleUpdateRatingState(e) {
  for (let i = 0; i < 5; i++) {
    if (i < e) {
      stars[i].classList.replace("fa-star-o", "fa-star");
    } else {
      stars[i].classList.replace("fa-star", "fa-star-o");
    }
  }
}

function handleClick(e) {
  const currentRatingValue = e.target.dataset.rating;
  currentRating = currentRatingValue;
  handleUpdateRatingState(currentRating);
  console.log(currentRating);
  ratingValue.textContent = currentRating;
}

function handleMouseLeave() {
  handleUpdateRatingState(currentRating);
}
