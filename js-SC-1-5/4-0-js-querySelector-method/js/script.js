let available = document.querySelector("h3");
console.log(available);
// <h3>We're here for you every day of the week.</h3>

let mainTitle = document.querySelector(".main-title");
console.log(mainTitle);
// <h1 class="main-title">Ryan's Roses</h1>

let firstItem = document.querySelector("ul li");
console.log(firstItem);
// <li>Today's Specials</li>

let intro = document.querySelector(".intro p");
console.log(intro);
// <p>Available today</p>

let intro = document.querySelector(".intro p");
intro.style.color = "purple";
console.log(intro);
// <p style="color: purple;">Available today</p>
intro.style.fontSize = "3em";
intro.style.fontStyle = "italic";

let firstImg = document.querySelector("img");
firstImg.src = "img/lulu.jpeg";
firstImg.alt = "Lulu bouquet";
console.log(firstImg);
// <img src="img/lulu.jpeg" alt="Lulu bouquet"></img>

let firstCaption = document.querySelector("figcaption");
firstCaption.innerText = "The Lulu.";
console.log(firstCaption);
// <figcaption>The Lulu.</figcaption>

let attention = document.querySelector(".increase__size");
attention.style.fontSize = "2.5em";
console.log(intro);

let intro = document.querySelector(".intro p");
intro.innerHTML = 'Available <span class="increase__size">today</span>';
// <p>Available <span class="increase__size" style="font-size: 2.5em;">today</span></p>