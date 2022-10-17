const Tour = require("../models/tour.model");

// CREATE TOUR SERVICES
exports.createTourService = async (data) => {
    return await Tour.create(data);
};

// GET TOUR SERVICES
exports.getToursService = async (queries) =>{
    // return await Tour.find({queries})
    const counts = await Tour.countDocuments();
    const pageCount = Math.ceil(counts / queries.limit);
    const result = await Tour.find()
    .skip(queries.skip)
    .limit(queries.limit)
    .select(queries.select)
    .sort(queries.sort);
    return {pageCount, counts, result};

}