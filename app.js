const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");


// SERVER
const port = process.env.PORT || 5000;



// Middlewares
app.use(express.json());
app.use(cors());



/* Test Routes */
app.get('/', (req, res) => {
    res.send({success: true, message: "Welcome to the Tour Management System (TMS) API"});
});



// Database connection
mongoose.connect(process.env.DATABASE_LOCAL).then(()=>{
    console.log(`Database connected successfully`);
});


app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
})



module.exports = app;