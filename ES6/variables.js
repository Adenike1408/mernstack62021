//ES5 or VanilaJS => var
//ES6 or ES2015 => let, const

//1. var is a functional scope, let and const are block scope (lexical scope) and doesn't support hoisting
//ctrl+/
// console.log(hoistVar)
// console.log(hoistVarLet)

// {} => lexical scope or code boundary

// hoisted, can be access out of lexical scope
// {
//     var hoistVar = 5000;
// }

// not hoisted, can not be accessed out of lexical scope
// {
//     let hoistVarLet = 5000;
//     const hoistVarConst = 5000;
// }

// console.log(hoistVar)
// console.log(hoistVarLet)