const {Router} = require('express'); 
const projectRoute = Router();
const projectController = require('../controllers/projectController');

projectRoute
            .route('/')
            .get(projectController.getData)
                .post(projectController.create)


module.exports = projectRoute

