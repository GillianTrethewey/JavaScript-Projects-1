let fans = document.querySelector(".fans");
let fish = document.querySelector(".fish");
let pets = document.querySelector(".pets");
let themeSwitchInput = document.querySelector("#toggle");
let ball = document.querySelector(".ball");
let h1 = document.querySelector("h1");
let body = document.querySelector("body");

fans.addEventListener("mouseover", function () {
  fans.innerText = "123K";
});

fish.addEventListener("mouseover", function () {
  fish.innerText = "47K";
});

pets.addEventListener("mouseover", function () {
  pets.innerText = "20K";
});

themeSwitchInput.addEventListener("click", function () {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    ball.classList.remove("move-right");
    h1.innerText = "Stealth Quincy";
  } else {
    body.classList.add("light");
    ball.classList.add("move-right");
    h1.innerText = "Party Quincy";
  }
});
