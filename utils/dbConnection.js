const mongoose = require('mongoose');
const dotenv= require('dotenv').config();
// dotenv.config( { path : 'config.env'} )



const createDatabaseConnection = () => {
    // console.log(process.env.DATABASE_LOCAL)
    mongoose.connect(process.env.DATABASE_LOCAL, {

        useNewUrlParser: "true",
        useUnifiedTopology: "true"

    }, (err) => {
        if (err) {
            console.log(`Error: ${err.message}`);
            process.exit(1);
        }
        console.log("Database connected successfully");
    });
}



module.exports = createDatabaseConnection;