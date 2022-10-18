const Tour = require("../models/tour.model");


// CREATE TOUR SERVICES
exports.createTourService = async (data) => {
    return await Tour.create(data);
};



// GET TOUR SERVICES
exports.getToursService = async (queries) =>{
    const counts = await Tour.countDocuments();
    const pageCount = Math.ceil(counts / queries.limit);
    const result = await Tour.find()
    .skip(queries.skip)
    .limit(queries.limit)
    .select(queries.select)
    .sort(queries.sort);
    return {pageCount, counts, result};

}


// GET SINGLE TOUR SERVICE
exports.getTourService = async (id) =>{
    return await Tour.findById(id);
}


// UPDATE TOUR SERVICES
exports.updateTourService = async (id, data) => {
    return await Tour.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true
    });
}


// TRENDING TOUR SERVICES
exports.getTrendingTourService = async () => {
    return await Tour.find().sort({views: -1}).limit(3);
}

// CHEAPEST TOURS SERVICES HERE
exports.getCheapestToursService = async () => {
    return await Tour.find().sort({price: 1}).limit(3);
}