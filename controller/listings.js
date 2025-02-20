const Listing = require("../models/listing.js");
const mongoose = require("mongoose");
const ExpressErrors = require("../utils/ExpressErrors.js");
const https = require("https");


//------>>> Home Page
module.exports.index = async (req , res) => {
    let listings =  await Listing.find().populate('reviews');
    res.render('./listings/index.ejs', {listings});    
};


// -------->>> NewForm Page
module.exports.renderNewForm = (req, res) =>{
    res.render('./listings/new.ejs');
};


// --------->> Show Page
module.exports.showListing = async (req, res) => {
    let {id} =req.params;
    if(mongoose.Types.ObjectId.isValid(id)){
        let list = await Listing.findById(id).populate({path : "reviews",populate: {path: "author"}}).populate('owner');
    if(!list){
        req.flash('error',"Listing you requested for does not exist");
       return res.redirect('/listings');
    }
    res.render('./listings/show.ejs' ,{list});
  }

   
};


//---------->>> Add
module.exports.createListing = async (req,res,next) => {

    let url = req.file.path;
    let filename = req.file.filename;
     let listing = new Listing(req.body.listing);
     listing.owner = req.user._id;
     listing.image = {url , filename};

     let address = encodeURIComponent(req.body.listing.location);
     const path = `https://nominatim.openstreetmap.org/search?q=${address}&format=geojson`;
     https.get(path, { headers: { 'User-Agent': 'ListingApp/1.0 (alpha@apnacollege.in)' } }, (response) => {
      let data = "";
      response.on('data', (apiResponse) => {
        data += apiResponse;
      });
      response.on('end' ,async () => {
        try{
          const geojsonData = JSON.parse(data);
         if(geojsonData.features[0].geometry.type === 'Point'){
          listing.geometry = geojsonData.features[0].geometry;
          await listing.save();
          req.flash('success' , "New Listing  Add Successfully !");
          res.redirect('/listings');
         }else{
          path;
         }
        }catch(err){
          next(err);
        }
      });
  });

   
};


// ----------->>> EditPage
module.exports.renderEditForm = async (req,res) => {
    let {id} = req.params;
    let list = await Listing.findById(id);
    if(!list){
        req.flash('error','Listing you requested for does not exists');
        res.redirect('/listings');
    }
    //------------>>Image Preview
    let originalImageUrl = list.image.url;
    originalImageUrl = originalImageUrl.replace('/upload','/upload/w_160');
    res.render('./listings/edit.ejs', {list , originalImageUrl});
};


//------->>> Update
module.exports.updateListing = async (req, res) => {
    let {id} = req.params;
    let {title , description , price , location , country} = req.body;

    if(! req.body){
        throw new ExpressErrors(400 , "Send Valid Data For Listings");
    };
    
    // --------------->>> Update query
    let listing = await Listing.findByIdAndUpdate(id , {
        title : title,
        description : description,
        price : price,
        location : location ,
        country : country
    } , {runValidators : true});

    
    // ---------->> Image Update
   if(typeof req.file != "undefined"){
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = {url , filename};
    await listing.save();
   }
   
    req.flash('success','Listing Updated');
    res.redirect(`/listings/${id}`);
};


//--------->>> Delete
module.exports.destoryListing = async  (req, res) => {
    let {id} = req.params;
   await Listing.findByIdAndDelete(id);
   req.flash('success','Listing Deleted !');
    res.redirect('/listings');
};


//----------->>> Filter
module.exports.filterListing = async(req , res) => {
    let {filter} = req.params;
    let decodeFilter = decodeURIComponent(filter);
    let cleanFilter = decodeFilter.replace(/\u00A0/g, ' ');
    let data =  await Listing.find({category : cleanFilter});
    if(data.length > 0){
        return res.render('listings/filter',{data});
    }else{
        res.redirect('/listings');
    }
};


// ---------------->>>> Search
module.exports.searchListing = async (req , res) => {
    let {q} = req.query;
    
    if(q) {
        let data = await Listing.find({
            $or : [{location : {$regex: new RegExp(q, 'i')}},{country : {$regex: new RegExp(q, 'i')}}] 
        });
        
        if(data.length > 0){
            res.render('listings/filter',{data});
        }else{
            res.render('listings/filter.ejs',{data : [] , message : 'No Result Found'});
        }
    }else{
        req.flash('error',"query not get");
        res.redirect('/listings');
    }
   
};