// Destructuring helps us creating less number of variables and we can do direct assignments

//2. Object destructuring

let user = {
    name : "Adenike",
    address : {
        address1 : "Add1",
        address2 : "Add2"
    },
    marks : {
        physics : 95,
        chemistry : 90
    }
}

// let address = user.address.address1
// let address2 = user.address.address2
// let markPhysics = user.marks.physics

let {name, address : { address1 }, marks : {chemistry, maths = 99} } = user;

console.log(address1)
console.log(chemistry)
console.log(maths)

// print user name : 

// object destructuring
let user = {
    fname : "John",
    lname : "Doe",
    age : 18,
    
}
let {lname, age, fisrtLane = "NY Street" } = user

// console.log("Last Name " + lname)
// console.log("Age " + age)
// console.log("Address " + fisrtLane)

//nested object destructuring 

let student = {
    name : "John",
    session: "MERNStack",
    age : 18,
    topicsRating : {
        coreJs : "coreJs-9",
        ES6 : "ES6-9",
        nodejs : "nodejs-9",
        express : "express-9",
        mongoDB : "mongoDB-9"
    }
}

let {name, topicsRating : {ES6, react="react-9", redux="redux-9" } } = student;

console.log(name)
console.log(ES6)
console.log(redux)


//1.  array : destructuring

let destructArr = ["one","two","three"]

// let [one, two, three, four] = destructArr;

// console.log(one)
// console.log(two)
// console.log(three)
// console.log(four)

//defaulting the values 
// let [one=3, two=2, three=1, four = 4] = [2,3];

//  console.log(one)
//  console.log(two)
//  console.log(three)
//  console.log(four)

// rest of the values, Rest element must be last element

// let [one=3, onepoint5, ...two] = [1,1.5,2,3,4];
// console.log(one)
// console.log(onepoint5)
// console.log(two)

//swapping of variables
// let one = 1, two = 2, three = 4;

// [one=3, two=2, three = 3] = [two, one, three];

// console.log(one)
// console.log(two)
// console.log(three)