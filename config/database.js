// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
var mysql = require("mysql2");

// Set up our connection information
if (process.env.JAWSDB_URL) {
    mysqlConnection = mysql.createConnection(process.env.JAWSDB_URL);
    } else {
    var mysqlConnection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "goozie418",
    database: "nodelogin",
    multipleStatements: true
    });
  };

// Connect to the database
mysqlConnection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + mysqlConnection.threadId);
});

// Export mysqlConnection
module.exports = mysqlConnection;
