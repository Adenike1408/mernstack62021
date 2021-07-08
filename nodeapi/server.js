let express = require("express");
let app = express(); //main application
let port = 9090;
let router = require("./route/router");



app.use('/static', express.static('Public')); // serve static files like images css using static middle ware

app.use("/", router);

app.listen(port);

console.log(`We are ready with server at localhost : ${port}`)