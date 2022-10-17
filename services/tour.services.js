const Tour = require("../models/tour.model");

// CREATE TOUR SERVICES
exports.createTourService = async (data) => {
    return await Tour.create(data);
};

// GET TOUR SERVICES
exports.getToursService = async (queries) =>{
    return await Tour.find({queries});
}