//Concept of hoisting
//var name = undefined
console.log(typeof printName)
console.log(typeof name)

console.log("This is hoisted variable", name); //undefined - default

var name = "Hung"; // initialization of variable

console.log("My actual value is", name);

// functional hoisting


printName(name)

function printName(params) {
    console.log("Priting Name ", params)
}