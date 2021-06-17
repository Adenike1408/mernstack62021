//data types present with Javascript

var myDataType = "Luke";

console.log("myDataType is "+ typeof myDataType) //string

//auto casting and dynamic casting is present in javascript
//ES6 <= ecmascript6, es2015

myDataType = .255454;
console.log("myDataType is 2nd place "+ typeof myDataType) //number

myDataType = true;
console.log("myDataType is 3rd place "+ typeof myDataType) //boolean

myDataType = {};
console.log("myDataType is 4rd place "+ typeof myDataType) //object

myDataType = null;
console.log("myDataType of null is "+ typeof myDataType) //object

myDataType = undefined;
console.log("myDataType of undefined is "+ typeof myDataType) //object


//symbol data type -

mySym = Symbol("New Value");
console.log("Symbol ", mySym);
console.log("TypeOf Symbol ", typeof mySym);
