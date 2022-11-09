/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cards', [{
      question: 'meat',
      topicId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      question: 'carrot',
      topicId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question: 'egg',
      topicId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question: 'cucumber',
      topicId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question: 'pie',
      topicId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question: 'garlic',
      topicId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question: 'plane',
      topicId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question: 'luggage',
      topicId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question: 'vacation',
      topicId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question: 'sightseeing',
      topicId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question: 'foreigner',
      topicId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question: 'language',
      topicId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question: 'raccoon',
      topicId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      question: 'lion',
      topicId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question: 'cat',
      topicId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question: 'squarrel',
      topicId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question: 'turtle',
      topicId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question: 'dolphin',
      topicId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cards', null, {});
  },
};
