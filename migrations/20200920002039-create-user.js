'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull:false,
      },
       lastName: {
        type: Sequelize.STRING,
        allowNull:false,
      },
       email: {
        type: Sequelize.STRING,
         validate:{
           isEmail:true
         },
         allowNull:false,

      },
      
      role: {
        type: Sequelize.ENUM(["user","author","editor","admin"]),
        defaultValue:"user"
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
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};
