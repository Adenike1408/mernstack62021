//spread operator : spreads the array in conservational manner

function add(x=0,y = 0, z = 0){
    return x+y+z;
}

let array = [5,6,8];

console.log(add(...array)); //es6
console.log(add.apply(null, array)) //es5


//rest parameter : spreads the array in conservational manner

function addRest(...arr){
    let sum = 0;

    sum = arr.reduce((prevVal, currenValue)=>{
        console.log("Prev Val "+prevVal +"  Current Val "+currenValue)
        return prevVal + currenValue
    },0)

    return sum;
}

console.log(addRest(...array))

//please create a function to add values from 1 to 999, using rest and spread