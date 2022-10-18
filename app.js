const express = require("express");
const createDatabaseConnection = require("./utils/dbConnection")
const app = express();
const cors = require("cors");
// const mongoose = require("mongoose");


// SERVER
const port = process.env.PORT || 5000;



// Middlewares
app.use(express.json());
app.use(cors());



/* Test Routes */
app.get('/', (req, res) => {
    res.send({success: true, message: "Welcome to the Tour Management System (TMS) API"});
});



// DATABASE CONNECTION
createDatabaseConnection();


app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
})



module.exports = app;