let hobbies = [
  "reading",
  "dancing",
  "painting",
  "playing music",
  "skating",
  "quilting",
];

// Find the length of the hobbies array:
//console.log(hobbies.length);
// Add a new hobby to the end of the array:
hobbies.push("singing");
//console.log(hobbies);
// Loop through the hobby array with the phrase, I like 
//for (let hobby of hobbies) {
//  console.log(`I like ${hobby}`);
//}
// Log out the element at index 3
//console.log(hobbies[3]);
// Remove the last element
hobbies.pop();
//console.log(hobbies);
// After the third element, add two new elements
hobbies.splice(3,0,"drinking tea", "knitting");
//console.log(hobbies);
// Remove the first element
hobbies.shift();
//console.log(hobbies);


let goals = [ 
  "Run 5 miles", 
  "Build a React App", 
  "Learn Next.js"
];
// Concatenate the hobbies and goals arrays
let allTheThings = hobbies.concat(goals);
console.log(allTheThings);
// Determine the index of "skating"
console.log(allTheThings.indexOf("skating"));
// Remove "skating" using an index
allTheThings.splice(5,1);
console.log(allTheThings);

// Create a function expression that checks for an item and removes it

let deleteArrayItem = function(array, item) {
  let index = array.indexOf(item);
  if (index === -1) {
    return;
  }
  array.splice(index,1);
  return array;
}
console.log(allTheThings);
deleteArrayItem(allTheThings, "knitting");
console.log(allTheThings);

// Use a forEach() to log out a numbered list of each element in uppercase


allTheThings.forEach( function (item, index) {
  console.log(` ${index + 1}. ${item.toUpperCase()}!`);
});




