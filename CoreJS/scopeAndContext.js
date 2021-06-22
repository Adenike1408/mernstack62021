//scope and context : both refer to the "this" keyword in a function
//scope is the accessibility of things in executing function
//context refers to the object over which function being called/executed

var User = {
    name : "Joe Biden",
    post : "President",
    getName : function(){
        console.log("this is - ", this); //context is User
        var that = this; //copying the user context to that variable so that instead of dyanmic context ("this") we can use "that"

        setTimeout(
            function(){ // a callback function to be executed after given interval
                //console.log("Test set time out - context", this)
                //console.log(this.name)
                console.log(that.name)
            }
        , 1000); //time in milliseconds   
        
        //return this.name;
    }
}

console.log(User.getName())


//global context or global scope
// setTimeout(
//     function(){ // a callback function to be executed after given interval
//         console.log("Test set time out - context", this)
//     }
// , 1000); //time in milliseconds


// function name(params) {
//     console.log("this - ", this)  //this is the context - global
// }
// name();