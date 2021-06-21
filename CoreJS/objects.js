//objects are key/value pairs and referenced by an identifier

var $user1 = { //object like a class
    name : "Hung", //property
    profession: "Student",
    getUserName: function (params) { //method
        return this.name;
    }
}
//$user1.profession = "Software Geek";
//console.log($user1.profession)
//console.log($user1.getUserName())

//creating new object with new key word or through constructor
//one way is - we should avoid using this as it keeps prototype copied to the parent
// var $student = new Object($user1); //copy the $user1 into student object (class)
// $student.name = "Luke";
// console.log($user1.getUserName())
// console.log($student.getUserName())

//second way : this is the acceptable way of creating inheritance in objects, 
//this instead of copying object, copies the prototype chain so that the reference have one way flow

var $doctor = Object.create($user1); // protoype :  is basically an object and only way to provide inheritance in js

$doctor.name = "Adenike";
console.log($user1.getUserName())
console.log($doctor.getUserName())
$doctor.profession = "Senoir Resident Doctor";
$doctor.getProfession = function (params) {
    return this.profession;
}
$doctor.getUserName = function (params) { //overriding - the parent definition of the same function
    return this.name +", "+ this.profession;
}

console.log($doctor.getProfession())
console.log($doctor.getUserName())

//take an example of vehicle and create two objects car and truck with some properties and methods

//merging two objects, with deep copy

var obj1 = {name : "MyName", age : 29, salary : 250}
var obj1_1 = {name : "MyName1", session:"MERNStack"}
var obj2 = {name : "YourName", address:"New City ", skills : "Javascript"}

obj1 = Object.assign(obj1, obj1_1, obj2); //over-rides the values from source object into target

console.log(obj1);

//if we wish to break the prototype chain

//you need to pass null in your object create constructor

var nullProtoype =  Object.create(null);

console.log(nullProtoype.__proto__)