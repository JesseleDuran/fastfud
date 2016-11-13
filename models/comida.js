'use strict';
module.exports = function(sequelize, DataTypes) 
{
  //Define el modelo Comida
  var Comida = sequelize.define('Comida', 
  {
    //Define los tipos de datos de Comida
    precio: DataTypes.FLOAT,
    nombre_food: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    codigo: DataTypes.INTEGER
  }, 
  {
    classMethods: 
    {
      associate: function(models) 
      {
        Compra.hasOne(models.Compra);
      }
    }
  });
  return Comida;
};