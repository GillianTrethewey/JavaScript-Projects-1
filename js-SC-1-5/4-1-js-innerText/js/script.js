//console.log("Hi!");
//let mainTitle = document.querySelector("h1");
//console.log(mainTitle);
//mainTitle.innerText = "Yay, JavaScript!";
//let body = document.querySelector("body");
//body.style.backgroundColor = "#fef2f1";
//console.log(body);
//
//Part 2
let firstListItem = document.querySelector("ul li");
console.log(firstListItem);
firstListItem.style.textTransform = "uppercase";
let moreReasons = document.querySelector("h3.more-reasons");
moreReasons.style.fontSize = "2.5em";
console.log(moreReasons);

let whyJS = document.querySelector("h3");
whyJS.innerHTML =
  '<h3>Why learn <span class="highlight">JavaScript</span>?</h3>';
let highlight = document.querySelector(".highlight");
highlight.style.backgroundColor = "#ffff82";
console.log(whyJS);

let mainImage = document.querySelector("img");
mainImage.src = "img/js-code.png";
mainImage.alt = "JavaScript coding image";
