'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Compras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      clientId: {
        type: Sequelize.INTEGER
      },
      food_codigo: {
        type: Sequelize.INTEGER
      },
      precio_t: {
        type: Sequelize.FLOAT
      },
      hora: {
        type: Sequelize.TIME
      },
      fecha: {
        type: Sequelize.DATE
      },
      mesa: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Compras');
  }
};