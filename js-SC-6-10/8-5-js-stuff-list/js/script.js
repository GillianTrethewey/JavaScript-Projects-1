let stuff = [
  "cars",
  "blankets",
  "sunflowers",
  "sky",
  "yellow",
  "code",
  "perfume",
  "coffee",
  "books"
];

/*
stuff.forEach( function (item, index) {
  if ((index+1)%2 === 0) {
    console.log(` ${index+1}. ${item}`);
  }
});

let removeItem = function (array, item) {
  let index = array.indexOf(item);
    if (index === -1) {
      console.log(
          `Sorry, no such item in this array.`
      );
    } else {
      array.splice(index, 1);
      console.log(`Removing "${item}"`);
    }
  };
removeItem(stuff, "code");
console.log(stuff);
*/
let newStuff = [];
for (let item of stuff) {
  if (item.includes("s")) {
    newStuff.push(item);
  }
}
console.log(newStuff);

let newStuffFiltered = [];
for (let item of stuff) {
  if (item.includes("s")) {
    newStuffFiltered.push(item);
  }
}
console.log(newStuffFiltered);


