const {createTourService, getToursService} = require("../services/tour.services");

const createTour = async (req, res) =>{
    // console.log(req.body);
    try {
        const tour = await createTourService(req.body);
        res.status(200).json({
            status: "success",
            messgae: "Data inserted successfully!",
            data: tour
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: " Data is not inserted ",
            error: error.message,
        });
    }
}



const getTours = async (req, res) =>{
    try {
        const tours = await getToursService();
        res.status(200).json({
            status:"success",
            data:tours
        })
        
    } catch (error) {
        res.status(400).send({
           status: "fail",
           message: "can't get the data",
           error:error.message 
        })
    }
}






module.exports = {
    createTour, getTours
}