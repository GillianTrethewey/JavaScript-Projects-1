let button = document.querySelector(".got-this");
let modal = document.querySelector(".modal");
let modalX = document.querySelector(".modal-x");

let openModal = function () {
  modal.classList.add("show-modal");
  button.innerText = "You've got this!";
}

let closeModal = function () {
  modal.classList.remove("show-modal");
  button.innerText = "Who's got this?";
}

button.addEventListener("click", function () {
  openModal();
});

modalX.addEventListener("click", function () {
  closeModal();
});

document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") {
    if (modal.classList.contains("show-modal")) {
      closeModal();
    }
  }
})