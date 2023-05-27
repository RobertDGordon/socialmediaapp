const express = require('express'); //tells app we need this package
const app = express(); //extracts functions from package

const port = 3000 //define our port here

app.use(express.json()); //tells the app to parse json automatically

app.use("/", express.static('public')) //serves any files located in the /public folder

app.listen(port, ()=> {
  console.log(`Social Media App listening at http://localhost:${port}`)
})