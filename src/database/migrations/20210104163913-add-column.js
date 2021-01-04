'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users', //dentro dessa tabela
      'age', //nome da coluna a adicionar
      {
        type:Sequelize.INTEGER
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'users', //dentro dessa tabela
      'age' //nome da coluna
    )
  }
};
