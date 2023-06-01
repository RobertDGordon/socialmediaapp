const express = require('express'); //tells app we need this package
const app = express(); //extracts functions from package

const feedRoute = require('./routes/feedRoute'); // imports the feed route

const port = 3000 //define our port here

app.use(express.json()); //tells the app to parse json automatically

//define endpoints here where traffic will go
app.use("/", express.static('./')) //serves any files located in the /public folder
app.use("/feed", feedRoute); //routes traffic pointed at localhost:3000/feed to this router

app.listen(port, ()=> {
  console.log(`Social Media App listening at http://localhost:${port}`)
})