const router = require('express').Router();
const Profile = require('../views/Profile.jsx');
const { Card, Result, Topic } = require('../db/models');

router.get('/', async (req, res) => {
  const user = req.session.userId;
  const result = await Result.findAll({ where: { userId: user, result: true }, raw: true });
  const allCards = await Card.findAll();
  // console.log(result);
  res.renderComponent(Profile, {
    result, allCards,
  });
});

router.post('/', async (req, res) => {
  const { rus, eng, topic } = req.body;
  try {
    const data = await Card.create({ answer: rus, question: eng, topicId: topic });
    console.log(data.topicId);
    res.json({ message: data.topicId });
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
