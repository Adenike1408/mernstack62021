//we need to require any file if we want to read data from that

var studentObj = require("./Readfile"); //importing a module to use in access file


console.log(studentObj);
studentObj.name = "Luke";

console.log(studentObj.getName());


// car - with properties and a function getDetails
// teacher - with properties and a function getExpertise
// admin - with properties and a function getAllTheAccessRights