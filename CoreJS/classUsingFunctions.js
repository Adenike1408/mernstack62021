//How to create classes using function

var userClass = function(name, age, address){ //constructor function
    this.name = name;
    this.age = age;
    this.address = address;
    this.getAddress = function(){
        return this.address;
    }
}

var userObj = new userClass("Luke", 21, "Main Street NY") //instantiating the class object

console.log(userObj.age);

console.log(userObj.getAddress())

//create a student class and have an object initialized with you own name and print details