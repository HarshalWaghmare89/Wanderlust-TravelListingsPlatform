const Jio = require("joi");


module.exports.listingSchema = Jio.object({
    listing : Jio.object({
        title : Jio.string().required(),
        description : Jio.string().required(),
        image : Jio.string().allow("",null),
        category : Jio.string().required(),
        price : Jio.number().required().min(0),
        location : Jio.string().required(),
        country : Jio.string().required()
    }).required()
});


module.exports.reviewSchema = Jio.object({
    review : Jio.object({
        rating : Jio.number().required().min(1).max(5),
        comment : Jio.string().required()
    }).required()
})