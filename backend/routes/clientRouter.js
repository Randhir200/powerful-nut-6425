
const {Router}=require("express");

const ClientRouter=Router();


const clientController = require('../controllers/clientController');

ClientRouter
            .route('/')
            .get(clientController.getData)
            .post(clientController.create)


module.exports = ClientRouter








ClientRouter.get("/Client",async (req,res)=>{

})

ClientRouter.post("/create",async (req,res)=>{
    


})

ClientRouter.patch("/edit/:id",async(req,res)=>{
    
  })



  ClientRouter.delete("/delete/:id",async (req,res)=>{
    
})