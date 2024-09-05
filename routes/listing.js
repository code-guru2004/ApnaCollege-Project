const express = require("express");
const Listing = require("../models/lisiting"); // schema
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js"); //
const router = express.Router();
const { listingSchema } = require("../schema.js");// Joi validation
const {reviewSchema} = require("../schema.js"); // Joi validation

const validateListing = (req,res,next) =>{
    
    let {error} = listingSchema.validate(req.body);
    // console.log(result); 
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    }else{
        next();
    }
};

//DElete route
router.delete("/:id", wrapAsync(async (req,res,next)=>{
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success" , "Deleted Successfully");
    res.redirect("/listings");
}));
//Update route
router.get("/:id/edit",
    wrapAsync(async (req,res,next)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    console.log(listing);
    res.render("./Listings/edit.ejs" , {listing});
}));

router.put("/:id" , validateListing ,
     wrapAsync(async (req,res,next)=>{
        
        let {id} = req.params;
        //let body = req.body;
        req.flash("success" , "Edited Successfully");
        await Listing.findByIdAndUpdate(id, {...req.body.listings});
        
        res.redirect("/listings");
}));
///new route
router.get("/new",(req,res)=>{
    res.render("./Listings/new.ejs");
}); 

router.post("/"  , validateListing,
    wrapAsync( async (req,res,next) => {
    let data = req.body.listings;
    let newListings = new Listing(data);
    req.flash("success" , "New Listing Is Added");
    await newListings.save(); 
    res.redirect("/listings");
   
})
);
//show route
router.get("/:id" ,
    wrapAsync (async (req,res,next)=>{
    let {id} =  req.params;
    let data = await Listing.findById(id).populate("reviews");
    if(!data){
        req.flash("error" , "Sorry, No Listing Exists");
        res.redirect("/listings");
    }
    //console.log(data);
    res.render("./Listings/show.ejs", {data});
}));

//all listings
router.get("/",
    wrapAsync(async (req,res,next)=>{ 
   let allListings = await Listing.find({});  
   res.render("./Listings/index.ejs",{allListings});
}));
 
// router.get("/" , (req,res)=>{
//     res.send("Hi User");
// }); 

module.exports = router; 
