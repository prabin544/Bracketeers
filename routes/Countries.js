const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Country = require("../model/Country")

//get countries list
router.get("/", (req, res) => 
    Country.findAll({raw: true})
        .then( CountryName => {
            console.log(CountryName);
            res.render("CountryName",{
                CountryName
            });
        })
        .catch(err => console.log(err)));

//Display add Country form
router.get("/add", (req, res)=> res.render("add"));

//Display add country form
router.post("/add", (req, res) => {
    console.log(req.body);
    let {CountryName} = req.body;
    let errors = [];

    if(!CountryName){
        error.push({test: "Please add Country Name"});
    }

    //check for errors
    if (errors.length > 0){
        res.render("add", {
            CountryName
        });
    }else{
        //Insert into table
        console.log(CountryName);
        Country.create({
            CountryName,
            })
            .then(CountryName => res.redirect("/countries"))
            .catch(err => console.log(err));
    }
});

module.exports = router;