const express = require("express");
const router = express.Router();
const WrapAsync = require("../utils/WrapAsync");
const passport = require("passport");
const { saveOriginalUrl } = require("../middleware.js");
const userController = require("../controller/user.js");


//------------->>> SignUp
router
.route('/signup')
.get( userController.renderSignUpForm)
.post( WrapAsync(userController.signup));

//----------->> Login
router
.route('/login')
.get( userController.renderLoginForm)
.post(
     saveOriginalUrl,
     passport.authenticate("local", {failureRedirect : '/login',
     failureFlash :true}), userController.login);

     
//-------------->> Logout
router.get('/logout' , userController.logout);

module.exports = router;
