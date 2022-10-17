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


// const tourSchema = new mongoose.Schema(
//     {
//         name: {
//             type: String,
//             required: [true, "You have to set a tour name"],
//             unique: true,
//             trim: true,
//             minlength: [5, "A tour name must have 5 characters"],
//             maxLength:[50, "Name is too large"]
//         },
//         packageName: {
//             type: String,
//             required: [true, "You have to set a tour name"],
//             unique: true,
//             trim: true,
//             minlength: [5, "A tour name must have 5 characters"],
//             maxLength:[50, "Name is too large"]
//         },
//         price: {
//             type: Number,
//             required: [true, "A tour must have a price"]
//         },
//         duration: {
//             type: String,
//             required: [true, "A tour must have a duration"],
//           },
//         description: {
//             type: String,
//             trim: true,
//             required: [true, "A tour must have a description"],
//           },
//           views: {
//             type: Number,
//             default: 0,
//           }
//     },
//     {
//         timestamps: true,
//       }
// );

// const Tour = mongoose.model("Tour", tourSchema);

// app.post('/tours',(req, res)=>{
//     console.log(req.body);
   
// })





module.exports = app;