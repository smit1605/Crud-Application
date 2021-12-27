var express = require("express");
var router = express.Router();


router.get("/", function  (req, res) {
    console.log("WELCOME MY FIRST PAGE");
    res.render("index")
     
});

router.get("/", function  (req, res) {
    console.log("WELCOME MY FIRST PAGE");
    res.render("aboutus")
     
});

router.get("/", function  (req, res) {
    console.log("WELCOME MY FIRST PAGE");
    res.render("contactus")
     
});


module.exports=router;
