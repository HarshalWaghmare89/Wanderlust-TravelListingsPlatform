const Listing = require("../models/listing.js");
const Review = require("../models/reviews.js");


//---------->> Add Review
module.exports.createReview = async (req,res) => {
    let {id} = req.params;
    let listing = await Listing.findById(id);
    let review = new Review(req.body.review);
    review.author = req.user._id;
    listing.reviews.push(review);
    await review.save();
    await listing.save();
   req.flash('success','Review Added !');
    res.redirect(`/listings/${id}`);
};


//-------------->>> Delete Review
module.exports.destoryReview = async (req ,res) => {
    let {id, reviewId} = req.params;
   
    await Listing.findByIdAndUpdate(id , {$pull : {reviews : reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash('success','Review Deleted !');
    res.redirect(`/listings/${id}`);

};