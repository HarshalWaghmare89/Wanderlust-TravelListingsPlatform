const mongoose = require("mongoose");
const Reviews = require("./reviews");
const { types } = require("joi");


const listingSchems = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    image : {
       url : String,
       filename : String,
    }, 
    price : {
        type : Number,
        required : true
    },
    location : {
        type : String,
        required : true
    },
    country : {
        type : String,
        required : true
    },
    reviews : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Review",
        }
    ],
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    geometry : {
        type: {
            type: String, 
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true
          },
          coordinates: {
            type: [Number],
            required: true
          }
    },
    category: {
        type: String,
        enum : ['Rooms','Iconic Cities','Mountains','Castels','Amazing Pools','Camping','Amazing views','New','Farms','Arctic','Treehouses','Boats','Bed & breakfast','Domes','Top cities','Grand music','Tropical','Ski in/out','Camper vans','Beach',`Chef's kitchens`,'Golfing','Creative spaces','Play'],
    }
});

listingSchems.post('findOneAndDelete', async (listing) => {
    if(listing.reviews.length){
        await Reviews.deleteMany({_id : {$in : listing.reviews}});
    }
});


const Listing = mongoose.model("Listing" , listingSchems);

module.exports = Listing;