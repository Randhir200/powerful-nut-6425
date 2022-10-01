<<<<<<< HEAD
const express = require('express');
const app = express();
const connection = require('./config/db');
const projectRoute = require('./routes/projectRoute');
const ClientRouter = require('./routes/clientRouter');
app.use(express.json());
// <<<<<<< HEAD
app.use('/projects', projectRoute)
app.use('/clients', ClientRouter)

// app.get("/",(req,res)=>{
//     res.send("homepage")
// })

// =======
app.use('/projects', projectRoute);
app.use('/clients', ClientRouter);
// >>>>>>> a5c5c31b7207c2499864554b95788f4074fab519
const port = process.env.PORT || 7000;
app.listen(port, async () => {
  try {
    await connection();
    console.log('connection established');
  } catch (e) {
    console.log(e);
  }
});
=======
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
>>>>>>> bbadec5fc33ba19706e4e0828b82ba0168891e7a
