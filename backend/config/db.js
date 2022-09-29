const mongoose = require('mongoose');
require('dotenv').config()
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.PASSWORD)
const connection = async ()=>{
    return await connection(DB)
}
module.exports = connection();