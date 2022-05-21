const button = document.querySelector(".show-results");
const results = document.querySelector(".results");
const expensesList = document.querySelector(".expenses");
const minDisplay = document.createElement("li");
const maxDisplay = document.createElement("li");

const expenses = [
  9.99,
  25.8,
  144.39,
  12.98,
  4.99,
  38.75,
  14.5,
  99.99,
  75.4,
  4.75,
  62.88
];

// Display your expenses in a list
for (let exp of expenses) {
  let li = document.createElement("li");
  li.innerText = `$ ${exp}`;
  expensesList.append(li);
}

const showMinMax = function (expenses) {
  const min = Math.min(...expenses);
  const max = Math.max(...expenses);
  const minDisplay = document.createElement("li");
  minDisplay.innerText = `Min: $ ${min}`;
  const maxDisplay = document.createElement("li");
  maxDisplay.innerText = `Max: $ ${max}`;
  results.append(minDisplay);
  results.append(maxDisplay);
  results.classList.remove("hide");
}

button.addEventListener("click", function () {
  showMinMax(expenses);
  button.disabled = true;
});
