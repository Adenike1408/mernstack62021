// fat arrow function : let name = () => { }

// function name(params) {
    
// }

// 1. Easy and straght forward way of writting a function
//let name = (fName) => console.log(fName) 
//name("Hung")

//let add = (a,b=0) => a+b;

let add1 = (a,b=0) => {
                        return a+b
                        };

// console.log(add(5,9))
// console.log(add1(5))

//2. Arrow functions are used to solve the problem of context without using bind, by copying the context of immediate parent

var User = {
    name : "Joe Biden",
    post : "President",
    getName : function() {
                //parent function
                setTimeout(()=>{ // a callback arrow function - that copies context of its immediate function so this <==> User
                        //child function
                        console.log("Test set time out - context", this)
                        console.log(this.name)
                    }
                , 1000); //time in milliseconds   
        }   
}

console.log(User.getName())

// can you try solving this issue with arrow function -

let obj = {
    id: 42,
    counter: function counter() {
        setTimeout(function() {
            console.log(this.id);
        }, 1000);
    }
}
