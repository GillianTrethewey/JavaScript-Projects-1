const person = {
    name: "Alice",
    lastName: "Parker",
    student: true
}

console.log(person.student);
console.log(person.lastName);
console.log(person.name);
person.totalSteps = 200;
person.walk = function(steps){
    this.totalSteps += steps;
}
person.walk(250);
console.log(person.totalSteps);