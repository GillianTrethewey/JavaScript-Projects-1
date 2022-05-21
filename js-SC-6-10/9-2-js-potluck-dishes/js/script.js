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

const assignButton = document.querySelector(".assign");
// asign class only appears when guest list is full
const assignedItems = document.querySelector(".assigned-items");
// targets the list that populates with the name and dish

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
};

const assignItems = function () {
    const potluckItems = [
        "potato salad",
        "hummus",
        "cookies",
        "fruit",
        "macaroni salad",
        "green salad",
        "rolls",
        "ice cream",
        "jello"
    ];
    const allGuests = document.querySelectorAll(".guest-list li");
    for (let guest of allGuests) {
        const randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
        const randomPotluckItem = potluckItems[randomPotluckIndex];
        const listItem = document.createElement("li");
        listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
        //if you just use guest, you'd target the actual list element instead of the text
        assignedItems.append(listItem);
        potluckItems.splice(randomPotluckIndex, 1);
        // prevents duplicate assignment
    }
};

assignButton.addEventListener("click", function () {
    assignItems();
    assignButton.disabled = true;
    // disables the button avoiding duplicate assignment
});