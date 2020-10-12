"use strict";

const express = require("express");
let router = express.Router();
const path = require("path");

router.use(function (req, res, next){
    console.log("I am in signup router");
    next();
})
router
    .route("/")
    .get((req, res)=> {
        res.sendFile(path.join(process.cwd() + '/' + '/signup.html'));
    })
    .post((req, res)=>{
        console.log(req.body);
        res.send("hi post")
    });

module.exports = router;
