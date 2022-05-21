let body = document.querySelector("body");

document.addEventListener("keydown", function (e) {
  console.log(e);
  if (e.key === "l") {
    body.classList.add("light");
  } else if (e.key === "d") {
    if (body.classList.contains("light")) {
      body.classList.remove("light");
    }
  }
});

let fave = document.querySelector("#favorite");
let heading = document.querySelector("h1");
let selection = "regular";

fave.addEventListener("change", function (e) {
  selection = e.target.value;
  if (selection === "stealth") {
    heading.innerText = "Stealth Quincy 😎";
  } else if (selection === "party") {
    heading.innerText = "Party Quincy 🥳";
  } else {
    heading.innerText = "Quincy";
  }
});
