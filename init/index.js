const mongoose = require("mongoose");
const initData = require("./data.js");
const Listings = require('../models/listing.js');


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

main().then(() => {
    console.log("Connect To DB");
}).catch((err) => console.log(err));


//-------->>> Insert Query
const storeData = async () => {
     await Listings.insertMany(initData.data);
}

storeData();