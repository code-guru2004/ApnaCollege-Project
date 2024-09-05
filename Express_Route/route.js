const express = require("express");
const app= express();

const router = express.Router();


router.get("/" , (req,res)=>{
    res.send("Book's show route.");
});

router.get("/new",(req,res)=>{
    res.send("New book");
});

module.exports = router;