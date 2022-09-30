const mongoose = require('mongoose');
require('dotenv').config()

// const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.PASSWORD)
const connection = async ()=>{
    return await mongoose.connect(process.env.MONGO_URL)
}
module.exports = connection;