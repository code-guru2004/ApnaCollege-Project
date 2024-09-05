const express = require("express");
const router = express.Router({mergeParams: true}); // imp imp // ata chara listing er _id access kora jabr=e na
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema} = require("../schema.js");
const Listing = require("../models/lisiting");
const Review = require("../models/review.js");




const validateReview = (req,res,next) =>{
    
    let {error} = reviewSchema.validate(req.body);
    // console.log(result); 
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    }else{
        next();
    }
};

/////
//reviews
///
// reviews post route
router.post("/" ,validateReview , wrapAsync (async (req,res)=>{
    let {id} = req.params;
    console.log(id);
    let currListing = await Listing.findById(id); // find the particular listing 
    let newReview = new Review(req.body.review); // 
    //console.log(newReview);
    await newReview.save(); // save in revews document
    currListing.reviews.push(newReview); // reviews array push
   let listing =  await currListing.save();
   //console.log(listing);
   req.flash("success" , "Review Added Successfully");
    res.redirect(`/listings/${currListing._id}`);
}));

router.delete("/:reviewId", wrapAsync (async(req,res,next) =>{
    let {id, reviewId} = req.params;
   let q = await Listing.findByIdAndUpdate(id, {$pull: {reviews :  reviewId}});
   console.log(q);
    await Review.findByIdAndDelete(reviewId);
    req.flash("success" , "Review Deleted Successfully");
    res.redirect(`/listings/${id}`);
}));

module.exports = router;