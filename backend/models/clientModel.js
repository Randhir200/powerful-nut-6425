const mongoose =require("mongoose")

const ClientSchema=new mongoose.Schema({
    Client_name:{type:String,required:true},
    email:{type:String},
    Business_Details:{type:String,},
    Tax:{type:Number},
    Discount:{type:Number},
    due:{type:String},
    Projects:[]         
})



const Clientmodel=mongoose.model("clientdata",ClientSchema);

module.exports=Clientmodel
