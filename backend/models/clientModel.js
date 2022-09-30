const mongoose =require("mongoose")

const ClientSchema=new mongoose.Schema({
    Client_name:{type:String,required:true},
    Business_Details:{type:String,},
    Tax:{type:Number},
    Discount:{type:Number}
})



const Clientmodel=("clientdata",ClientSchema);

module.exports=
    Clientmodel
