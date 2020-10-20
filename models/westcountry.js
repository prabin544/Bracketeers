module.exports = function (sequelize, DataTypes) {
    const CountryName = sequelize.define("westcountries", {
      countryName: {
        type: DataTypes.STRING,
        allowNull: false
      },
    });
 
    return CountryName;
};