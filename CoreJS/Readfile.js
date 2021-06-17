//this file is going to be an independent module

var student = {
    name : "Adenike",
    age : 20,
    place : "Texas",
    getName : function (params) {
        return this.name;
    }
}

module.exports = student; // exporting student literal to be accessed by any one outside