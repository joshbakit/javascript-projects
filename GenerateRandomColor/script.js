const hexButton = document.querySelector(".hex-color-btn");
const hexValue = document.querySelector(".hex-color-value");
const hexColorContainer = document.querySelector(".hex-color-generator");
const copyHexButton = document.querySelector(".hex-color-btn-copy");

const rgbButton = document.querySelector(".rgb-color-btn");
const copyRgbButton = document.querySelector(".rgb-color-btn-copy");
const getRedColorRange = document.querySelector("#red");
const getBlueColorRange = document.querySelector("#blue");
const getGreenColorRange = document.querySelector("#green");
const rgbContainer = document.querySelector(".rgb-color-generator");
const rgbValue = document.querySelector(".rgb-color-value");

//hex
hexButton.addEventListener("click", () => {
  let characters = "0123456789ABCDEF";
  let hexColorOutput = "";

  for (let i = 0, charSetLength = characters.length; i < 6; i++) {
    hexColorOutput += characters.charAt(
      Math.floor(Math.random() * charSetLength)
    );
  }

  hexValue.textContent = `#${hexColorOutput}`;
  hexColorContainer.style.backgroundColor = `#${hexColorOutput}`;
});

copyHexButton.addEventListener("click", () => {
  navigator.clipboard.writeText(hexValue.textContent);
  copyHexButton.textContent = "Copied!";

  setTimeout(() => {
    copyHexButton.textContent = "Copy hex color";
  }, 1000);
});

//rgb
rgbButton.addEventListener("click", () => {
  let redColor = getRedColorRange.value;
  let blueColor = getBlueColorRange.value;
  let greenColor = getGreenColorRange.value;
  let rgbColorOutput = `rgb(${redColor}, ${blueColor}, ${greenColor})`;

  console.log(rgbColorOutput);
  rgbValue.textContent = rgbColorOutput;
  rgbContainer.style.backgroundColor = rgbColorOutput;
});

copyRgbButton.addEventListener("click", () => {
  navigator.clipboard.writeText(rgbValue.textContent);
  copyRgbButton.textContent = "Copied!";

  setTimeout(() => {
    copyRgbButton.textContent = "Copy rgb color";
  }, 1000);
});
