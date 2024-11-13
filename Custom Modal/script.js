const openModal = document.querySelector(".btn-open-modal");
const modalContainer = document.querySelector(".modal-container");
const closeModal = document.querySelector(".modal-cancel");

openModal.addEventListener("click", () => {
  modalContainer.style.display = "block";
  openModal.style.display = "none";
});

closeModal.addEventListener("click", () => {
  modalContainer.style.display = "none";
  openModal.style.display = "block";
});
