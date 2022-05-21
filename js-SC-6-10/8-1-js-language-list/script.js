let programmingLanguages = [
  "Scala",
  "Java",
  "Go",
  "Swift",
  "Cobol",
  "JavaScript",
  "Python",
  "Ruby",
  "Elm",
  "Rust",
  "C#"
];
for (let value of programmingLanguages) { // iterable (an array is an interable)
  console.log("I want to learn " + value +"!"); // do not use programmingLanguages[value]
}
/*
I want to learn Scala!
I want to learn Java!
I want to learn Go!
I want to learn Swift!
I want to learn Cobol!
I want to learn JavaScript!
I want to learn Python!
I want to learn Ruby!
I want to learn Elm!
I want to learn Rust!
I want to learn C#!
*/

programmingLanguages.forEach(function (item, index) {
  console.log(`${index + 1}. ${item.toUpperCase()}`);
});

let updatedLanguages = programmingLanguages.filter(function (eachLangName) {
  return eachLangName.includes("y");
});

console.log(updatedLanguages);
