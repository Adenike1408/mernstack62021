// Destructuring helps us creating less number of variables and we can do direct assignments

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