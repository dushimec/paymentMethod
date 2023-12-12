'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('payment_methods', {
      accountId: {
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type: Sequelize.INTEGER
      },
      payment_id: {
        type: Sequelize.INTEGER,
        references:{
          model: 'payment_types',
          key: 'id'
        }
      },
      userId: {
        type: Sequelize.INTEGER,
        references:{
          model:'users',
          key: 'id'
        }
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('payment_methods');
  }
};