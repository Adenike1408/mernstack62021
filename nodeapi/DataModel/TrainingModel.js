let mongoose = require("mongoose"), //importing moongoose class to create connection, schema, collection and returning model

mongooseSchema = mongoose.Schema; //getting the schema class to use for creating our document (collection)

mongoose.connect("mongodb://127.0.0.1/mernstack6"); //creates db with name mernstack6 or opens a connection if already present

let TrainingSchema = new mongooseSchema({
                sessionname : {type:String, required: true},
                duration : Number,
                instructor : String,
                location : String
            },
            {
                versionKey: false //needs to set to false if we dont want __v to be saved, never set it to true
            });

let TrainingModel = mongoose.model("Training", TrainingSchema);//creates a collection with name TrainingSchema and returns mongodb object

module.exports = TrainingModel;