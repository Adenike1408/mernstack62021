console.log("This is the entry point of my first web server")
let port = 9090;
let express = require("express");
let app = express(); // this creates express application which will handle all request

let adminApp = express(); // this app will serve the request that comes to /admin routes 

//console.log("__dirname" , __dirname)
//console.log("__filename" , __filename)

app.use('/static', express.static('public')); // serve static files like images css using static middle ware

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

//path mounted to serve the request from the other concurrent express application
app.use("/admin", adminApp);

adminApp.get('/hello',(req, res)=>{
    res.json({
      "Application":"Admin",
      "Msg" : "New app is mounted"
    })
})


app.get('/', function (req, res) {
  res.send('Hello World Adenike!')
})

//wild card operator to match any route
app.get('*', function (req, res) { 
  res.send('Nothing Matched to the route you\'ve given!')
})


app.listen(port);

console.log(`Express server is started on port ${port}`);