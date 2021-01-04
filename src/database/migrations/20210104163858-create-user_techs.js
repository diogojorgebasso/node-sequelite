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
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key:"id"
        },
        OnUpdate: 'CASCADE',
        OnDelete: 'CASCADE'
      },
      techId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'techs',
          key:"id"
        },
        OnUpdate: 'CASCADE', //deleta usuário, deleta tecnologia.
        OnDelete: 'CASCADE'
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
