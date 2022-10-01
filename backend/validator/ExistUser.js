const { UserModel } = require("../models/usermodel")


const UserExist=async(req,res,next)=>{
try {
        
    const email=req.body.email
const user=await UserModel.findOne({email:email})
console.log(user)
if(user){
    res.status(400).send({"msg":"User Exist. Please Login"})
}
else{
    next()
}

    
} catch (error) {
    res.send(error)
}
}
module.exports={
    UserExist
}