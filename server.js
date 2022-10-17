// const mongoose = require("mongoose");
// const dotenv = require("dotenv").config();


const app = require("./app");


// Database connection
// mongoose.connect(process.env.DATABASE_LOCAL).then(()=>{
//     console.log(`Database connected successfully`);
// });


// SERVER
// const port = process.env.PORT || 5000;

// app.listen(port, ()=>{
//     console.log(`App is running on port ${port}`);
// })

/* importers area */ 


/* Imports Routes Area */
const tourRouter = require('./routes/tour.routes');


/* Init Routes */
app.use('/api/', tourRouter);


/* Global Error Handler */

app.use("*", (req, res) =>{
    res.status(404).send({
        success: false,
        message: "Page not found"
    })
})

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        success: false,
        message: err.message
    });
});