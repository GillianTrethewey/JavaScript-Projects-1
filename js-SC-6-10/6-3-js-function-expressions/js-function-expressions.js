let shoutIt = function(name) {
    let shout = `Hello, ${name}, nice to meet you!`.toUpperCase();
    return shout;
}

console.log(shoutIt("Gillian"));

let multiply = function(num1, num2) {
    if (typeof num1 !== "number") {
        return  `Provide two numbers please.`;
    } else if (typeof num2 !== "number") {
        return `Provide two numbers please.`;
    }
    return num1 * num2;
};

console.log(multiply("yeah", 6));
console.log(multiply(3,"boo"));
console.log(multiply(3, 2));


