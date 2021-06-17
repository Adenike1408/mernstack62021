//Instead of using multiple variable we should have common literals and assign key value to them to avoid exploitation of globals

var name = "Luke", age = "21", address = "MainStreet NY";

// using literals : user

var user = {
    name : "Luke",
    age : "21", 
    address : "MainStreet NY"   
}

console.log(user.name)

//accounts - name, accountype, balance