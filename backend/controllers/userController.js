const { UserModel } = require("../models/usermodel");
const { SignUpValidator, loginValidator } = require("../validator/Validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { passport } = require("../config/google.auth");
require('dotenv').config()

const SECRET_CODE=process.env.SECRET_CODE || "secret"

exports.signup = (req, res) => {
  const data = req.body;
  //  console.log(data)
  let password = data.password;
  let email = data.email;


  if(SignUpValidator(data)){
    try {

    bcrypt.hash(password, 6).then(function (hash) {
        data.password = hash;
        
        const user = new UserModel(data);
         user.save();
        const token = jwt.sign({ email: email }, SECRET_CODE);
        res.status(200).send({ "signup": "successfully", "token": token });
      })
    } catch (error) {
      res
      .status(404)
      .json({
        status: "something is missing",
      })
      .send({ msg: "something is missing" }); 
    }
    }




}

exports.login = async (req, res) => {
  let data = req.body;

console.log(data)

  if (loginValidator(data)) {
    try {
    const { email, password } = data;
    let user = await UserModel.findOne({email: email });
    let hash = user.password;

    bcrypt.compare(password, hash, function (err, result) {
    
      if (result) {
        const token = jwt.sign({ email: email }, SECRET_CODE);
        res.status(200).send({ "sign in": "successfully", "token": token });
      } 
      else{
        res.status(304).send("Password is Invalid")
      }
     
      });
    } catch (error) {
      res
      .status(404)
      .json({
        status: "something is missing",
      })
      .send({ msg: "something is missing" });
    }
    }
    else{
      res.status(404).send("something is wrong")
    }

};