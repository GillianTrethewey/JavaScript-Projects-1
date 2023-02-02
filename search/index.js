const submitButton = document.getElementById("submit-button");
const searchKeyword = document.getElementById("search-keyword");
submitButton.addEventListener("click", fetchJoke);

async function fetchJoke() {
  let keyword = searchKeyword.value;
  if (keyword) {
    const response = await fetch(
      `https://api.chucknorris.io/jokes/search?query=${keyword}`
    );
    if (!response.ok) {
      console.log(
        "An error occurred while fetching the joke: " + response.statusText
      );
      return;
    }
    const data = await response.json();
    if (data.total > 0) {
      const jokeContainer = document.getElementById("joke-container");
      jokeContainer.innerHTML = data.result[0].value;
      jokeContainer.style.display = "block";
      searchKeyword.value = "";
    } else {
      console.log("No jokes found with the keyword: " + keyword);
    }
  }
}
