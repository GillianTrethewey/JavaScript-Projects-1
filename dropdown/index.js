const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", fetchJoke);

async function fetchJoke() {
  console.log(submitButton);
  const category = document.getElementById("joke-categories").value;
  if (category) {
    const response = await fetch(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
    if (!response.ok) {
      console.log(
        "An error occurred while fetching the joke: " + response.statusText
      );
      return;
    }
    const data = await response.json();
    const jokeContainer = document.getElementById("joke-container");
    jokeContainer.innerHTML = data.value;
    jokeContainer.style.display = "block";
  }
}
