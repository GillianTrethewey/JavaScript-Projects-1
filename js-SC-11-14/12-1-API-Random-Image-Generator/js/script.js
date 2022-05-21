const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function() {
    const response = await fetch(`https://picsum.photos/v2/list?limit=100`);
    const images = await response.json();
    selectRandomImage(images);
}


const selectRandomImage = function(imageArray) {
    let randomIndex = Math.floor(Math.random() * imageArray.length);
    let randomImage = imageArray[randomIndex];
    displayImage(randomImage);
}

const displayImage = function(randomImage) {
    let author = randomImage.author;
    let imageAddress = randomImage.download_url;
    authorSpan.innerText = `${author}`;
    img.src = `${imageAddress}`;
    imgDiv.classList.remove("hide");
}

button.addEventListener("click", function() {
    getImage();
});