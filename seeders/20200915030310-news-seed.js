'use strict';

const faker = require("faker")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    let data = [], news;

    for (var i = 0; i < 100; i++) {
      news = {
        title: faker.lorem.sentence(),
        image: faker.image.nature(),
        caption:faker.lorem.words(16) ,
        quote: faker.lorem.words(8),
        body: faker.lorem.paragraphs(5),
        createdAt: faker.date.past(),
        updatedAt: faker.date.soon()

      }
      data.push(news)
    }
    await queryInterface.bulkInsert('News', data);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await queryInterface.bulkDelete('News', null, {});
  }
};
