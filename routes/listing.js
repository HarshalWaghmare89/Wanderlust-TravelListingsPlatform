const express = require("express");
const router = express.Router();
const WrapAsync = require("../utils/WrapAsync.js");
const {isLoggedIn,isOwner,ValidateLIstings} = require('../middleware.js');
const listingController = require("../controller/listings.js");
const multer  = require('multer')
const {cloudinary , storage} = require('../CloudConfig.js');
const Listing = require("../models/listing.js");
const upload = multer({ storage });


router
.route("/")         
//---->> Index
.get( WrapAsync(listingController.index ))
//---->> New
.post( isLoggedIn,upload.single('listing[image]'),ValidateLIstings, WrapAsync(listingController.createListing));


//------------->> Filter 
router.get('/category/:filter',WrapAsync(listingController.filterListing));

//------------->> New

router.get('/new' ,isLoggedIn,listingController.renderNewForm);

// ------------>>> search
router.get('/search' , WrapAsync(listingController.searchListing));


router
.route("/:id")
//----->> Show
.get( WrapAsync(listingController.showListing))
//---->>> Update
.put(isLoggedIn ,isOwner,upload.single('image'),listingController.updateListing)
//-------------->>> DELETE 
.delete(isLoggedIn ,isOwner, WrapAsync(listingController.destoryListing));




//--------------->>> Update

router.get('/:id/edit' ,isLoggedIn,isOwner, WrapAsync(listingController.renderEditForm));



module.exports = router;

