const User = require("../models/user.js");

//---------->>>SignUp Page
module.exports.renderSignUpForm = (req , res) => {
    res.render('./users/signup.ejs');
};


//----------->> SignUp
module.exports.signup = async (req , res , next) => {
    try{
        let {username , email , password} = req.body;
        let newUser = new User({email , username});
        await User.register(newUser , password);
        
        req.login(newUser , (err) => {
            if(err){
                 return next(err);
            }
            req.flash('success','Welcome to Wunderlust !');
            res.redirect('/listings');
        });

    }catch(e){
        req.flash('error',e.message);
        res.redirect('/signup');
    }
};


//------------>>> Login Page
module.exports.renderLoginForm = (req,res) => {
    res.render('users/login.ejs');
};


//------------>>> Login
module.exports.login = async (req , res) => {
    req.flash('success','Welcome Back to Wanderlust');
    
    let redirect = res.locals.redirectUrl || '/listings';
   
    res.redirect(redirect);
 
};

//------------->>> LogOut
module.exports.logout = (req , res, next) => {
   
    req.logOut((err) => {
        if(err){
           return next(err);
        }
        res.redirect('/listings');
    })
};