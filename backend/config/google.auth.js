const { v4: uuidv4 } = require("uuid");

const passport = require("passport");
const { UserModel } = require("../models/usermodel");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config();
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.Client_Id,
      clientSecret: process.env.Client_Secret,
      callbackURL: `http://localhost:8080/user/auth/google/callback`,
    },
    async function (accessToken, refreshToken, profile, cb) {
      console.log(profile);
      let email = profile._json.email;
      const name = profile._json.name;
      const user = new UserModel({
        name,
        email,
        password: uuidv4(),
      });
      await user.save();

      const { _id, password } = user;
      const payload = {
        email,
        _id,
        password,
        url: profile._json.picture,
      };
      return cb(null, payload);
    }
  )
);
module.exports = {
  passport,
};
