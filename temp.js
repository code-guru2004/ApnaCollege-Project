//DElete route
app.delete("/listings/:id", wrapAsync(async (req,res,next)=>{
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
}));
//Update route
app.get("/listings/:id/edit",
    wrapAsync(async (req,res,next)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    console.log(listing);
    res.render("./Listings/edit.ejs" , {listing});
}));

app.put("/listings/:id" , validateListing ,
     wrapAsync(async (req,res,next)=>{
        
        let {id} = req.params;
        //let body = req.body;
        await Listing.findByIdAndUpdate(id, {...req.body.listings});
        res.redirect("/listings");
}));
///new route
app.get("/listings/new",(req,res)=>{
    res.render("./Listings/new.ejs");
}); 

app.post("/listings"  , validateListing,
    wrapAsync( async (req,res,next) => {
    let data = req.body.listings;
    
    let newListings = new Listing(data);
    await newListings.save(); 
    res.redirect("/listings");
   
})
);
//show route
app.get("/listings/:id" ,
    wrapAsync (async (req,res,next)=>{
    let {id} =  req.params;
    let data = await Listing.findById(id).populate("reviews");
    //console.log(data);
    res.render("./Listings/show.ejs", {data});
}));

//all listings
app.get("/listings",
    wrapAsync(async (req,res,next)=>{ 
   let allListings = await Listing.find({});  
   res.render("./Listings/index.ejs",{allListings});
}));
 /////
//reviews
///
// reviews post route
app.post("/listings/:id/reviews" ,validateReview , wrapAsync (async (req,res)=>{
    let {id} = req.params;
    let currListing = await Listing.findById(id);
    let newReview = new Review(req.body.review);
    //console.log(newReview);
    await newReview.save();
    currListing.reviews.push(newReview);
   let listing =  await currListing.save();
   console.log(listing);
    res.redirect(`/listings/${currListing._id}`);
}));

app.delete("/listings/:id/reviews/:reviewId", wrapAsync (async(req,res,next) =>{
    let {id, reviewId} = req.params;
   let q = await Listing.findByIdAndUpdate(id, {$pull: {reviews :  reviewId}});
   console.log(q);
    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/listings/${id}`);
}));