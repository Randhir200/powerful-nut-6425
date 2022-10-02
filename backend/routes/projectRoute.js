const {Router} = require('express'); 
const projectRoute = Router();
const projectController = require('../controllers/projectController');

projectRoute
            .route('/')
            .get(projectController.getData)
            .post(projectController.create)

projectRoute
            .route('/:id')
            .patch(projectController.update)
            .delete(projectController.delete)         

module.exports = projectRoute
