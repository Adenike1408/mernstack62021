// call and apply are used to change the context of any function dynamically

//call : is the functions way of changing context immediately and returns function execution
//apply : is used to change the context dynamically and accepts parameters in the form of array

var name = "Hung";
var user1 = {name: "Luke", age : 23}
var user2 = {name: "Adenike", age : 26}

function printName(sessionName, topic){
    console.log(this.name)
    console.log(sessionName)
    console.log(topic)
}

printName.call(user1, "MERNStack","context switching"); //setting user1 as the context of printName (this)


//apply
var Trainee1 = {name: "Ashish", age : 23}

function printDetails(student1, student2, student3, student4) {
    console.log("Traner Name is : " +this.name)
    console.log("Traner Age is : " + this.age)
    console.log(student1)
    console.log(student2)
    console.log(student3)
}

printDetails.apply(Trainee1,["Hung","Adenike","Luke"])
