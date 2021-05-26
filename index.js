// module imports
const express = require("express");
const empRoute = require("./routes/employees.route");
const joiningRoute = require("./routes/joining.route");

// variables
const port = 3000;


// creating express app 
const app = express();


// read json info coming from a request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/employee", empRoute);
app.use("/joining-details", joiningRoute);

// starting server
app.listen(port, ()=>{
    console.log(`Server started at port: ${port}`);
})