console.log(`Exercise 1`);
let weekday = new Date().toLocaleString("en-US", { weekday: "long" });

//console.log(weekday);

if (weekday === "Monday") {
	console.log("Let's get this week started!");
} else if (weekday === "Tuesday") {
	console.log("Worky work!");
} else if (weekday === "Wednesday") {
	console.log("Humpday!");
} else if (weekday === "Thursday") {
	console.log("Almost there!");
} else if (weekday === "Friday") {
	console.log("Weekend's almost here!");
} else {
	console.log("WEEKEND, YAYYY!!!");
}

console.log(`Exercise 2`);

let time = new Date().getHours();

//console.log(time);
let greeting = "Hello";
let name = "Gillian";
//let time = 23;
if(time <= 18) {
	greeting = "Good afternoon";
} else if (time <= 22) {
	greeting = "Good evening";
} else {
	greeting = "Go to bed";
}

console.log(alert(`${greeting}, ${name}!"`));

console.log(`Exercise 3`);

let twelveString = "12";
let twelveNum = 12;

if (twelveString === twelveNum) {
  console.log("Yep, these two variable values and types are the same.");
} else if (twelveString == twelveNum) {
  console.log("The value of these two variables are the same.");
} else {
  console.log("Not sure what happened here, but something went wrong.");
}

console.log(`Exercise 4`);

let hoursOfSleep = Number(
  prompt("How many hours of sleep did you get last night? (0-12)")
);

if (hoursOfSleep > 12) {
  console.log("Come on, now. Tell me the truth.");
} else if (hoursOfSleep >= 8) {
  console.log("You're a sleep boss! The sleepest!");
} else if (hoursOfSleep >= 5) {
  console.log("Not bad, but you should consider going to bed earlier tonight.");
} else {
  console.log("How are you awake right now?? You need more sleep!");
}

console.log(`Exercise 5`);
let chocolate = Number(
  prompt("How many chocolate pieces would you like? Choose 0 to 10.")
);
let leftoverChocolate = 10 - chocolate;

if (leftoverChocolate === 10) {
  alert("You didn't want any chocolate?");
} else if (leftoverChocolate >= 6) {
  alert(
    `There are ${leftoverChocolate} pieces of chocolate left. Still have lots!!`
  );
} else if (leftoverChocolate >= 1) {
  alert(`There's ${leftoverChocolate} pieces of chocolate left. Getting low!`);
} else {
  alert("You ate all the chocolate. Yum!");
}