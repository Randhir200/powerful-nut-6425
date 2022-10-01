const express=require('express')
const connection = require('./config/db')
const {passport}=require('./config/google.auth')
const { UserModel } = require('./models/usermodel')
const { UserRoute } = require('./routes/user.route')
require('dotenv').config()
const app=express()
app.use(express.json())


app.use("/user",UserRoute)
const PORT=process.env.PORT || "8000"


app.get('/',(req,res)=>{
  res.send('<h1>hello everyone</h1>')
})

app.get('/data',async(req,res)=>{
  let data=await UserModel.find()
  res.send({"data":data})
})
app.listen(PORT,async()=>{
    try {
        await connection
        console.log("connected ...")
    } catch (error) {
        console.log(error)
    }
})