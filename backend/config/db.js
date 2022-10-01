const mongoose=require('mongoose')
require('dotenv').config()

const connection=mongoose.connect('mongodb+srv://work:work@cluster0.pldywc5.mongodb.net/?retryWrites=true&w=majority')
    


module.exports={connection}