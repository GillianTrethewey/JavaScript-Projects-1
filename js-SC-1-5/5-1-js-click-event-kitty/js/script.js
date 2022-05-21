let button = document.querySelector("button.show-cat");
let cat = document.querySelector("figure.cat");

button.addEventListener("click", function () {
   // cat.classList.add("show");
    if (cat.classList.contains("show")) {
        cat.classList.remove("show");
        button.classList.add("disappear");
        button.innerText = "Wait, come back!";
    } else {
        cat.classList.add("show");
        button.innerText = "Shoo, cat!";
        button.classList.remove("disappear");
    }

});

