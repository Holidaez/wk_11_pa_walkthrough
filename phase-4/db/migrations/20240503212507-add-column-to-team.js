'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Teams',
      'sportId',
      {
        type:Sequelize.INTEGER,
        references: {model:'Sports'},
        onDelete: 'CASCADE',
        allowNull:false
      }
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Teams','sportId')
  }
};
