'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => { //o que a migration vai realizar
    return queryInterface.createTable('adresses', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
    });
  },

  down: async (queryInterface, Sequelize) => { //se der errado, deletar a tabela,
    return queryInterface.dropTable('adresses');
  }
};
