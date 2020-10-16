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
        var sql = "INSERT INTO westcountry(countryName) VALUES (?)";
        mysqlConnection.query(sql, [req.Name],  (err, rows, fields) => {
            if (!err) {
                response.send(rows);
            }
        });
    });

    app.post('/addeast', (request, response) => {
        let req = request.body;
        console.log(req);
        var sql = "INSERT INTO eastcountry(countryName) VALUES (?)";
        mysqlConnection.query(sql, [req.Name],  (err, rows, fields) => {
            if (!err) {
                response.send({rows: rows, message: 'Success'});
            }else{
              response.send({message: 'Failed'})
            }
        });
    });
};
