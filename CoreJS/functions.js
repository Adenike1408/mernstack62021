//functions

console.log(myfunc())

var name = "Adenike";
printName(name) //function invocation by opening and closing a paranthesis

//named function
function printName(params) {
    console.log("Priting Name ", params)
}

//function expression
var myfunc = function (params) {
    console.log("Priting Myfunc ", params)
}