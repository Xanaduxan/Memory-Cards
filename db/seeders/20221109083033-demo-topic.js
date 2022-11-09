/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Topics', [{
      title: 'Food',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Travel',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Animals',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Topics', null, {});
  },
};
