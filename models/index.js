'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/..\config\config.json')[env];
var db        = {};
var models = require('./models/');


models.sequelize
  .authenticate()
  .then(function () 
  {
    console.log('Connection successful');
  })
  .catch(function(error) 
  {
    console.log("Error creating connection:", error);
  });

//Crea una conección Sequelize a la base de Datos
if (config.use_env_variable) 
{
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else 
{
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

//Carga todos los modelos
fs
  .readdirSync(__dirname)
  .filter(function(file) 
  {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) 
  {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) 
{
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
  console.log(modelName);
});


//Exporta el objeto db
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
