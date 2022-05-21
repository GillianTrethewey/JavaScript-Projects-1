// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const addGuestText = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const displayGuestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");

addGuestButton.addEventListener("click", function () {
    const guest = guestInput.value;
    if (guest !== "") {
        addToList(guest);
        updateGuestCount();
        clearInput();
    }
});

const clearInput = function () {
    guestInput.value = "";
};
const addToList = function (guest) {
    const listItem = document.createElement("li");
    listItem.innerText = guest;
    displayGuestList.append(listItem);
};

const updateGuestCount = function () {
    const guests = document.querySelectorAll(".guest-list li");
    guestCount.innerText = guests.length;
    if (guests.length === 4) {
        addGuestButton.classList.add("hide");
        guestInput.classList.add("hide");
        addGuestText.classList.add("hide");
        guestFull.classList.remove("hide");
    }
}