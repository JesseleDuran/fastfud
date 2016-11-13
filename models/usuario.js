'use strict';
module.exports = function(sequelize, DataTypes) {
  var Usuario = sequelize.define('Usuario', {
    userId: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    CI: DataTypes.INTEGER,
    fecha_registro: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        Usuario.hasOne(models.Compra);
      }
    }
  });
  return Usuario;
};