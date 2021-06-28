//default params

function add(a = 1, b = 1) { //default value of param b is 0
    //let _b = b ? b : 0; //if b is not undefined then b else 0
    return a + b;
}

console.log(add(5,5))