const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
module.exports = new Sequelize('country_db', 'root', 'pravin123', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }

});
