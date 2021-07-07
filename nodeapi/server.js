console.log("This is the entry point of my first web server")
let port = 9090;
let express = require("express");
let app = express(); // this creates express application which will handle all request

//console.log("__dirname" , __dirname)
//console.log("__filename" , __filename)

app.get('/queryparam', function (req, res) {
    console.log("Query Object ", req.query)
    //res.send('Hello Ashish!')
    res.json(req.query);
})

app.get('/routeparam/:id/details', function (req, res) {
  console.log("Route Param ", req.params["id"])
  res.send(req.params["id"])
  //res.json(req.query);
})


app.get('/html', function (req, res) {
  res.sendFile(__dirname+"/index.html")
})

app.get('/', function (req, res) {
  res.send('Hello World Adenike!')
})
app.listen(port);

console.log(`Express server is started on port ${port}`)