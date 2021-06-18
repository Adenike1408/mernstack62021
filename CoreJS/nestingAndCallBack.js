//callBack Of Functions : a function can be passed as a parameter to another function and it can hold the scope with reference!

//callBackFunc - is a function that can be passed as a parameter 
function name(callBackFunc, nameParam) {
    typeof callBackFunc != undefined ?
            callBackFunc(nameParam) : ""
}

//print - a named function
function print(params) {
    console.log("The value you wanted to print is - " + params)
}

function printObject(params) {
    console.log("The value you wanted to print is - ", params)
}

name(print, "Adenike")
name(printObject, {'name1' :"Adenike",'name2':'Luke'})

// Print Account Details of a user using callback function - AccountName, Type, Balance, Branch

// nesting of a function
// function A(){
//     var abc = "test";
//     //console.log(xyz) // not accessible
//     function B(){

//         function C(){
//             console.log(abc)
//             function D(){
//                 var xyz = "test-xyz";
//             }
//         }
//     }   
//}