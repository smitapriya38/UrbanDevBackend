// module imports
const express = require("express");
const joiningRoute = require("./routes/joining.route");
const trainingRoute = require("./routes/training.route");
const salaryRoute = require("./routes/salary.route");
const adRoute = require("./routes/advertisement.route");
const aptRoute = require("./routes/appointment.route");
const transferRoute = require("./routes/transfer.route");

// variables
const port = 3000;


// creating express app 
const app = express();

// read json info coming from a request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/joining-details", joiningRoute);
app.use("/training-details", trainingRoute);
app.use("/salary-details", salaryRoute);
app.use("/ad-details", adRoute);
app.use("/apt-details", aptRoute);
app.use("/transfer-details", transferRoute);

// starting server
app.listen(port, ()=>{
    console.log(`Server started at port: ${port}`);
})