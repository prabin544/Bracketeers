// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var mysqlConnection = require("../config/database");

// Routes
// =============================================================
module.exports = function(app) {
  // Get all chirps
  app.get("/alleast", function(req, res) {    
    var dbQuery = "SELECT * FROM eastcountry";

    mysqlConnection.query(dbQuery, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  app.get("/allwest", function(req, res) {
    var dbQuery = "SELECT * FROM westcountry";

    mysqlConnection.query(dbQuery, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  // Add a country
    app.post('/addwest', (request, response) => {
        let req = request.body;
        console.log(req);
        var sql = "TRUNCATE table westcountry";
        mysqlConnection.query(sql, (err, rows, fields) => {
            
        });
        for (let i = 0; i < req.NameList.length; i++) {
          var sql = "INSERT INTO westcountry(countryName) VALUES (?)";
          mysqlConnection.query(sql, [req.NameList[i]],  (err, rows, fields) => {
            
        });
          
        }
        
    });

    app.post('/addeast', (request, response) => {
      let req = request.body;
      console.log(req);
      var sql = "TRUNCATE table eastcountry";
      mysqlConnection.query(sql, (err, rows, fields) => {
          
      });
      for (let i = 0; i < req.NameList.length; i++) {
        var sql = "INSERT INTO eastcountry(countryName) VALUES (?)";
        mysqlConnection.query(sql, [req.NameList[i]],  (err, rows, fields) => {
          
      });
        
      }
    });
};
