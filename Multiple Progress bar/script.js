const previousButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const progressBar = document.querySelector(".progress");
const iconWrapper = document.querySelectorAll(".icon-wrapper");

let currentStep = 1;

nextButton.addEventListener("click", () => {
  if (currentStep < iconWrapper.length) {
    currentStep++;
  }
  handleUpdateStep();
});

previousButton.addEventListener("click", () => {
  if (currentStep > 1) {
    currentStep--;
  }
  handleUpdateStep();
});

function handleUpdateStep() {
  iconWrapper.forEach((item, index) => {
    if (index < currentStep) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  progressBar.style.width =
    ((currentStep - 1) / (iconWrapper.length - 1)) * 100 + "%";

  if (currentStep === 1) {
    previousButton.disabled = true;
  } else if (currentStep === iconWrapper.length) {
    nextButton.disabled = true;
  } else {
    previousButton.disabled = false;
    nextButton.disabled = false;
  }
}
