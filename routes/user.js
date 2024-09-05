const express = require("express");
const router = express.Router(); // imp imp 
const wrapAsync = require("../utils/wrapAsync.js");
const User = require("../models/user.js");
const passport = require("passport");

router.get("/signup" , (req,res)=>{
    res.render("./user/signup.ejs");
});

router.post("/signup" , wrapAsync(async (req,res)=>{
    // to implement if we gwt error we redirect to the signup page
    try{
        let {username , password , email} = req.body;
        const newUser = new User({email , username});
        const regUser = await User.register(newUser , password);
        console.log(regUser);
        req.flash("success",  "Login Successfull");
        res.redirect("/listings");
    }catch(err){
        req.flash("error", err.message);
        res.redirect("/signup");
    }
}));

//login
router.get("/login" , async(req,res)=>{
    res.render("./user/login.ejs");
});

router.post("/login" ,passport.authenticate(
    'local' ,
     { failureRedirect: '/login' ,
         failureFlash: true}) ,  
         wrapAsync(async(req,res)=>{
            res.send("User login successfull");
}));

module.exports = router;