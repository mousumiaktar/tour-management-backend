const router  = require('express').Router();
const tourController = require('../controllers/tour.controller.js');



router.post('/tours', tourController.createTour)
router.get("/tours", tourController.getTours)


module.exports = router;