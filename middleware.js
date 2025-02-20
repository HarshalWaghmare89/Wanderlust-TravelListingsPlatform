const Listing = require('./models/listing.js');
const Review = require('./models/reviews.js');
const ExpressErrors = require("./utils/ExpressErrors.js");
const {listingSchema } = require("./schema.js");
const {reviewSchema} = require("./schema.js");


//--------->>>Authentication
module.exports.isLoggedIn = (req ,res , next) => {
   
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash('error','you must be logged in !');
       return res.redirect('/login');
    }
    next();
};

//------->>> Redirect Original Request
module.exports.saveOriginalUrl = (req , res , next ) => {
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

//------------->>> Listings authorization
module.exports.isOwner = async (req , res , next) => {
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner.equals(res.locals.user._id)){
        req.flash('error',"You don't have Permisssion ! ");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

//---------------->>>> Listings Validation
module.exports.ValidateLIstings = (req,res,next) => {
    let {error} = listingSchema.validate(req.body);
   
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
     throw new ExpressErrors(400 , errMsg);
    }else{
        next();
    }
};

//------------------ >> Reviews validation
module.exports.ValidateReviews = (req,res,next) => {
    let {error} = reviewSchema.validate(req.body);

    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
     throw new ExpressErrors(400 , errMsg);
    }else{
        next();
    }
};


//----------->>> Review authorization
module.exports.isReviewOwner = async(req , res , next ) => {
    let {id , reviewId}  = req.params;
    let review = await Review.findById(reviewId);

    if(!review.author.equals(res.locals.user._id)){
        req.flash('error',"You don't have Permisssion ! ");
        return res.redirect(`/listings/${id}`);
    }
    next();
};