
const {Router}=require("express");

const ClientRouter=Router();


const clientController = require('../controllers/clientController');

ClientRouter
            .route('/')
            .get(clientController.getData)
         .post(clientController.create)

         ClientRouter
         .route('/:id')
         .patch(clientController.update)
         .delete(clientController.delete)         

module.exports = ClientRouter









