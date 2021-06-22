//bind : changes the context of a function dynamically and supplies the same at the time of execution 
//so no immediate execution like call or apply

var User = {
    name : "Joe Biden",
    post : "President",
    getName : function(){
        //using bind feature of functions to bind the context dynamically
        setTimeout(
            function(){ // a callback function to be executed after given interval
                console.log("Test set time out - context", this)
                console.log(this.name)
            }.bind(this) // binding context to this (which is user not the global one)
        , 1000);

        return this.name;
    }
}

console.log(User.getName()) //



//html example
//<button id="newDivBind">Practice Div</button>
var btn = document.getElementById("newDivBind")
onclick = function(){alert("The name is"+ this.name)}

btn.addEventListener("click", this.onclick.bind(user1), false) // changing context to user1 upon click
btn.addEventListener("click", this.onclick, false) //without bind context remains global