const mongoose = require('mongoose');
const Review = require("./review.js");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
        },
    description: String,
    img: {
        type: String,
        default: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        
        set: (v) => v===""? "https://images.pexels.com/photos/8270207/pexels-photo-8270207.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" : v ,
    },
    price: {
      type:  Number
    },
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",  // already required
        },
    ],
});

listingSchema.post("findOneAndDelete", async(listing)=>{
    if(listing){
    await Review.deleteMany({_id : {$in : listing.reviews}});
    }
});

const Listing = mongoose.model("Listing" , listingSchema);

module.exports = Listing;