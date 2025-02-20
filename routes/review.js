const express = require("express");
const router = express.Router({mergeParams : true});
const WrapAsync = require("../utils/WrapAsync.js");
const {ValidateReviews, isLoggedIn, isReviewOwner} = require('../middleware.js');
const reviewController = require("../controller/review.js");



// --------------------->>> Reviews 

router.post("/", isLoggedIn,ValidateReviews, WrapAsync(reviewController.createReview));

// ------------------------>>>> Delete Reviews

router.delete('/:reviewId',isLoggedIn,isReviewOwner, WrapAsync(reviewController.destoryReview));


module.exports = router;