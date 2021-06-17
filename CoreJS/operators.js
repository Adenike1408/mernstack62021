// learing operators
//comment and uncomment ctrl+/
//and (&&), or (||), not(!), =, ==, ===, >, <, >=, <= : operators are used in js

//  console.log(18+"19"+21); //181921
//  console.log(18+1+"21"); //1921
//  console.log(18+1-"21"); //-2
//  console.log(18-"Test"); //NaN - not a number

//ternary operator
//var age = 19;

//condition ? true statemet : false

//age >= 18 ? console.log("Valid Voter") : console.log("InValid Voter")


// var myname = false;
// var myAge = 18;

// if (typeof typeof myname == "string") {
//     console.log("This is string type variable")
// } else {
//     console.log("This is other type variable")
// }

// if (myname || myAge >= 18) {
//     console.log("I am a valid voter")
// } else {
//     console.log("This is other type variable")
// }


//var someNumber = "18";

//if (someNumber == 18) { // equality of value only

// if (someNumber === 18) {    // equality of value as well as type
//     console.log("We are printing 18")
// } else {
//     console.log("We can't print 18")
// }


var myName = "Its Me"
function test(params) {
    console.log("My Name is "+ myName);
    //myName = "Some Name";
    var myName = "Some Name";
    console.log("My Name is "+ myName);
}

test();