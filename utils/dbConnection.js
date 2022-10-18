const mongoose = require('mongoose');



const createDatabaseConnection = () =>{
    mongoose.connect(process.env.DATABASE_LOCAL, {}, (err) => {
        if(err){
            console.log(`Error: ${err.message}`);
            process.exit(1);
        }
        console.log("Database connected successfully");
    });
}



module.exports = createDatabaseConnection;