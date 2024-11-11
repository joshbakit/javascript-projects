const imagesliderContainer = document.querySelector(".container");
const dotsContainer = document.querySelector(".dots-container");

async function getImage() {
  try {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=2&limit=10",
      {
        method: "GET",
      }
    );
    const imageList = await response.json();
    if (imageList && imageList.length > 0) displayImageSlider(imageList);
    console.log(imageList);
  } catch (error) {
    console.log(error);
  }
}
getImage();

function displayImageSlider(imgList) {
  imagesliderContainer.innerHTML = imgList
    .map(
      (item) =>
        `<div class="image-slider">
      <img src="${item.download_url}" alt="${item.author}" />
    </div>`
    )
    .join("");

  dotsContainer.innerHTML = imgList
    .map(
      (item, index) =>
        `<span class="dots" ${
          index === 0 ? "active" : ""
        } data-slide="${index}"></span>`
    )
    .join("");
}

setTimeout(() => {
  const slide = document.querySelectorAll(".image-slider");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let currentSlide = 0;

  function activeDots(slide) {
    document
      .querySelectorAll(".dots")
      .forEach((dotItem) => dotItem.classList.remove("active"));

    document
      .querySelector(`.dots[data-slide="${slide}"]`)
      .classList.add("active");
  }

  function changeCurrentSlide(currentSlide) {
    slide.forEach(
      (slideItem, index) =>
        (slideItem.style.transform = `translateX(${
          100 * (index - currentSlide)
        }%)`)
    );
  }
  changeCurrentSlide(currentSlide);

  prevBtn.addEventListener("click", () => {
    currentSlide--;

    if (0 > currentSlide) {
      currentSlide = slide.length - 1;
    }

    changeCurrentSlide(currentSlide);
    activeDots(currentSlide);
  });

  nextBtn.addEventListener("click", () => {
    currentSlide++;

    if (slide.length - 1 < currentSlide) {
      currentSlide = 0;
    }

    changeCurrentSlide(currentSlide);
    activeDots(currentSlide);
  });

  dotsContainer.addEventListener("click", (e) => {
    console.log(e.target.classList, e.target.dataset.slide);

    if (e.target.classList.contains("dots")) {
      currentSlide = e.target.dataset.slide;
      changeCurrentSlide(currentSlide);
      activeDots(currentSlide);
    }
  });
}, 1000);
