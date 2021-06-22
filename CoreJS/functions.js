//functions

//console.log(myfunc())

// var name = "Adenike";
// printName(name) //function invocation by opening and closing a paranthesis

// //named function
// function printName(params) {
//     console.log("Priting Name ", params)
// }

// //function expression
// var myfunc = function (params) {
//     console.log("Priting Myfunc ", params)
// }


//IIFE - Immediately Invocable Function Expression
// (function(){ // this will only be a single instance
//     console.log("We all are hopeful for a better future!!!")
//     global.user = {name:"Test"}
// })()
//console.log(global.user)


(function (params) {
    console.log(params)
    global.user = {name:"Adenike"}
})("Hung");

console.log(global.user)