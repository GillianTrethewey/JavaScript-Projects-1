let button = document.querySelector(".got-this");
let modal = document.querySelector(".modal");
let modalX = document.querySelector(".modal-x");

let closeModal = function () {
  modal.classList.remove("show-modal");
  button.innerText = "Who's got this?";
};

button.addEventListener("click", function () {
  modal.classList.add("show-modal");
  button.innerText = "You've got this!!!";
});

modalX.addEventListener("click", function () {
  closeModal();
});

document.addEventListener("keydown", function (e) {
  // console.log(e.key);
  if (e.key === "Escape") {
    if (modal.classList.contains("show-modal")) {
      closeModal();
    }
  }
});
