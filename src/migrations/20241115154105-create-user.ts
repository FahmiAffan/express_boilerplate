'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id_user: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      password: {
        type: Sequelize.STRING
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

    // queryInterface.addIndex('image_properti', ['id_properti'] ,{ unique: false });

    // queryInterface.addConstraint('image_properti', {
    //   fields: ['id_properti'],
    //   type: 'foreign key',
    //   name: 'image_properti_id_properti',
    //   references: { //Required field
    //     table: 'Properti',
    //     field: 'id_properti'
    //   },
    //   onDelete: 'cascade',
    //   onUpdate: 'cascade'
    // });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};