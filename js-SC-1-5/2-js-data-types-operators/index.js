console.log(`Exercise 1`);
let tempCelsius = 10;
let toFahrenheit = tempCelsius * 1.8 + 32;
console.log(
  `Outside my friend's house it's ${tempCelsius} degrees Celsius, which is ${toFahrenheit} degrees Fahrenheit.`
);

console.log(`Exercise 2`);
let mealCost = Number(prompt("How much was your meal? (ex. 25.99)"));
let tip = Number(prompt("Tip percentage (ex. enter 0.15 for 15%)"));
let tipAmount = mealCost * tip;
let total = mealCost + tipAmount;
let numOfPeople = Number(prompt("How many people are eating? (ex. Min 1)"));

console.log(
  `Your meal cost is $${mealCost}, and with the tip, it comes to $${total.toFixed(
    2
  )}. Your share is $${(total / numOfPeople).toFixed(
    2
  )}. Hope it was delicious!`
);

console.log(`Exercise 3`);
let favoriteColor = prompt("Enter your favorite color: (ex. purple)");
console.log(`Your favorite color is ${favoriteColor}.`);

console.log(`Exercise 4`);
let name = prompt("Enter your name: (ex. Jill)");
let birthYear = Number(prompt("Enter your birth year: (ex. 1993)"));
console.log( `${name}, you are ${2021 - birthYear} years old.`);

console.log(`Exercise 5`);
let hourlyWage = Number(prompt("Enter your hourly wage: (ex. 10.25)"));
let hours = Number(prompt("Enter the number of hours worked this week: (ex. 25)"));
console.log(`You earned $${(hourlyWage * hours).toFixed(2)} this week.`);
