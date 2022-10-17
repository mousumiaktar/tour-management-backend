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
        const {fields, page, limit,sort} = req.query;
        const queries ={};

        // query by fields
        if(fields){
            const fieldsArray = fields.split(',').join('');
            queries.select = fieldsArray;
        }

        // query by paginated
        if(page || limit){
            const currentPage = parseInt(page);
            const limitPerPage = parseInt(limit);
            const skip = (currentPage - 1) * limitPerPage;
            queries.skip = skip;
            queries.limit = limitPerPage;
        }

        // query by sorted
        if(sort){
            const sortBy = sort.split(',').join(' ');
            queries.sort = sortBy;
        }


        const tours = await getToursService(queries);
        res.status(200).send({
            status:"success",
            data:tours
        });
        
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