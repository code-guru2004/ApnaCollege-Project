const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
const methodOverride = require("method-override");
const ejsMate = require('ejs-mate');
//const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
// const { listingSchema } = require("./schema.js"); // validation JOi
// const {reviewSchema} = require("./schema.js");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");


// router

const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");
const userRoute = require("./routes/user.js");

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname,"public")));


// MongoDb Schema define and Initialisation
const mongoose = require('mongoose');
// const Listing = require("./models/lisiting");
// const Review = require("./models/review.js");
const User = require("./models/user.js");

main().then(()=>{
    console.log("Connected to Database...");
})
.catch(err => console.log(err)); 
 
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/arbnb');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
///

////////////////////////////////////////////////////////////////////////////////////////


const sessionInfo = {
    secret: 'mysecretvalue',
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7*24*60*60*1000,
        maxAge: 7*24*60*60*1000,
        httpOnly: true,
    },
}

app.use(session(sessionInfo));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// res.locals

app.use((req,res,next)=>{
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    next();
});

// app.get("/demouser" , async (req,res)=>{
//     let fakeUser = new User({
//         email: 'abc@gmail.com',
//         username: 'abc',
//     });

//     let regUser = await User.register(fakeUser , '1234');
//     res.send(regUser);
// });


//express route
app.get("/" , (req,res)=>{
    res.send("Hi User");
});  

app.use("/listings",listings);
app.use("/listings/:id/reviews" , reviews);
app.use("/" , userRoute);


// error handler4
app.all("*",(req,res,next)=>{
    next(new ExpressError(404, "Page not Found"));

});

app.use((err,req,res,next)=>{
    let {statusCode=500 , message="OOPS Something went wrong!"} = err;
    //res.send("Something went wrong!");
    console.log(statusCode);
   // res.status(statusCode).send(message);
   res.status(statusCode).render("error.ejs", {message});
});

app.listen(port , ()=>{
    console.log("Connected to Server...");
});