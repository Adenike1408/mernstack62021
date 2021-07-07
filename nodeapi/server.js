console.log("This is the entry point of my first web server")
let port = 9090;
let express = require("express");
let app = express();



app.get('/test', function (req, res) {
    console.log("i am in test api")
    res.send('Hello Ashish!')
})


app.get('/html', function (req, res) {
  console.log("__dirname" , __dirname)
  console.log("__filename" , __filename)
  
  res.sendFile(__dirname+"/index.html")
})

app.get('/', function (req, res) {
  res.send('Hello World Adenike!')
})
app.listen(port);

console.log(`Express server is started on port ${port}`)