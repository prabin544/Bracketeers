const express = require("express");
const router = express.Router();


//Display add Country form
router.get("/add", (req, res)=> res.render("add"));

router.get("/", (req, res)=> res.render("CountryName"));

module.exports = router;