'use strict';
module.exports = function(sequelize, DataTypes) {
  var Compra = sequelize.define('Compra', {
    clientId: DataTypes.INTEGER,
    food_codigo: DataTypes.INTEGER,
    precio_t: DataTypes.FLOAT,
    hora: DataTypes.TIME,
    fecha: DataTypes.DATE,
    mesa: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Compra.hasOne(models.Usuario);
        Compra.hasMany(models.Comida);
      }
    }
  });
  return Compra;
};