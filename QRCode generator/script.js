const qrTextInput = document.querySelector(".qr-text");
const qrContainer = document.querySelector(".qr-container");
const generateQrCodeBtn = document.querySelector(".btn-generateCode");
const errorMessage = document.querySelector(".error-message");

generateQrCodeBtn.addEventListener("click", () => {
  validateInputField();
});

function validateInputField() {
  if (qrTextInput.value.trim().length > 0) {
    generateCode();
  } else {
    console.log("Please enter a text to generate a QR code");
    errorMessage.textContent = "enter a valid text";
    errorMessage.style.color = "red";
  }

  console.log(qrTextInput.value);
}

function generateCode() {
  qrContainer.innerHTML = "";
  new QRCode(qrContainer, {
    text: qrTextInput.value,
    width: 200,
    height: 200,
    colorLight: "#fff",
    colorDark: "#000",
  });

  qrTextInput.value = "";
  errorMessage.textContent = "";
}
