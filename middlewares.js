const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

// app.use((req,res,next)=>{
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method , req.path , req.time , req.hostname);
//     return next();
// });

app.use("/random" ,(req,res,next)=>{
    console.log("I am only for random.");
    return next();
} );

const checkToken = (req,res,next)=>{
    let {token} = req.query;
    if(token === "abcd"){
        return next();
    }else{
        res.send("Access Denied");
    }
};
app.get("/err",(req,res)=>{
    abc ===abc;
});


app.get("/random" , (req,res)=>{
    //console.log("You are in random page.");
    res.send("You are in random page.");
});

app.get("/api",checkToken , (req,res)=>{
    res.send("Hi, I am API");
});
app.get("/" , (req,res)=>{
   // console.log("You are in the main page.");
    res.send("You are in the main page.");
});


app.use((err,req,res,next)=>{
    console.log("error");
    next(err);
});

// app.use((req,res)=>{
//     res.send('Something broke!');
// })
app.listen(port , ()=>{
    console.log("Listening....");
});