const Sequelize = require('sequelize');
const db = require("../config/database");

const Country = db.define("country", {
    CountryName: {
        type: Sequelize.STRING
    }
})

module.exports = Country;