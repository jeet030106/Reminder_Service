'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.changeColumn(
      'NotificationTickets',
      'status',
      {
        type: Sequelize.ENUM('PENDING', 'SUCCESS', 'FAILED'),
        allowNull: false,
        defaultValue: 'PENDING'
      }
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.changeColumn(
      'NotificationTickets',
      'status',
      {
        type: Sequelize.STRING
      }
    );
  }
};
