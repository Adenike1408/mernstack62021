//closures : is a paradigm where we have a parent function which holds some public and private identifiers/ properties
// then it returns a child function which will contain only public properties
// a way of achieving encapsulaiton upto some extent

function Parent(name, address) {
    var salary = 10000; //private 
    var password = "ASDasdnajsd#$3"; //private
    var age = 31; //public

    var childFunc = function (mobile, session) {
        // return {
        //     name:name,//[key]:[value] in JSON object //name:name
        //     age:age,
        //     address:address,
        //     mobile:mobile,
        //     session:session
        // }

        return { //short hand
            name,//if the name of key and the identifier from which we read the value are same we set as one
            age,
            address,
            mobile,
            session
        }
    }

    return childFunc;
}

var accessParent = Parent("Adenike", "Texas");

console.log("Parent => Child", accessParent(95959595, "MERNSTack"))