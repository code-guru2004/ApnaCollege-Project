const express = require("express");
const app= express();
const cookieParser = require('cookie-parser');
const port =3000;
const session = require('express-session')
var flash = require('connect-flash');
const path = require("path");

app.set("view engine" , "ejs");
app.set("views",path.join(__dirname,"views"))

const sessionInfo = {
    secret:"mysecretkey",
    resave: false,
    saveUninitialized: true,
}
app.use(session(sessionInfo));
app.use(flash());
// app.use(cookieParser("secretCode"));

// const book = require("./route.js");

// app.get("/getCookies" , (req,res)=>{
//     res.cookie("name","nayan", {signed:true});
//     res.send("Sent you ccookies");
// });

// app.use("/book" ,book);

//res.local middlewares
app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
});
// hoe req.session + res.locals + req.flash work
app.get("/register",(req,res)=>{
    let {name = "User Name"} = req.query;
    req.session.name = name;
    console.log(req.session.name);

    if( req.session.name === "User Name"){
        req.flash("error" , "User name not found !");
    }
    else{
    req.flash("success" , "User register successfully!");
    }
    res.redirect("/hello");
});
 
app.get("/hello",(req,res)=>{
    
    res.render("page.ejs" , {name :  req.session.name});
});



// how req.session works
app.get("/count",(req,res)=>{
    console.dir(req.cookies);

    if(req.session.count){
        req.session.count++;
    }else{
        req.session.count=1;
    }
    // req.session.count=1;
    res.send(`count ${req.session.count}`);
});

// how only req.flash works
app.get('/flash', function(req, res){
    // Set a flash message by passing the key, followed by the value, to req.flash().
    req.flash('info', 'Flash is back!')
    res.redirect('/getflash');
  });
   
  app.get('/getflash', function(req, res){
    // Get an array of flash messages by passing the key to req.flash()
    res.render('flash', { msg: req.flash('info') });
  });



  app.get("/",(req,res)=>{
    res.send("The main page");
});

app.listen(port , ()=>{
    console.log(`${port} is listening`);
});