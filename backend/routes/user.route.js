const { Router } = require("express");
const { passport } = require("../config/google.auth");
const userController = require("../controllers/userController");
const { UserExist } = require("../validator/ExistUser");
require('dotenv').config()
const UserRoute = Router();
UserRoute.post("/signup",UserExist, userController.signup);
UserRoute.post("/login", userController.login);

//For Google OAuth
UserRoute.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
//For Google OAuth callback
UserRoute.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect(process.env.Redirected);
    res.send({"msg":"Signup successfully","token":"token"})
  }
);

module.exports = {
  UserRoute,
};