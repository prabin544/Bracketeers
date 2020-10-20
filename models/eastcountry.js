module.exports = function (sequelize, DataTypes) {
    const CountryName = sequelize.define("eastcountries", {
      countryName: {
        type: DataTypes.STRING,
        allowNull: false
      },
    });

    return CountryName;
};
